import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//while making we dont check for cookies 
export const register = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password, role } = req.body
        if (!fullName || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
        //2) check if user already exists or not by email
        const user = await User.findOne({ email })
        //if User exist return and error or 401
        if (user) {
            return res.status(401).json({
                message: "User already exists",
                success: false
            })
        }
        //hash the password
        const hashpassword = await bcrypt.hash(password, 10)

        // now create the user
        await User.create({
            fullName,
            email,
            phoneNumber,
            password: hashpassword,
            role
        })

        return res.status(200).json({
            message: "User created successfully",
            success: true
        })
    } catch (error) {
        console.log("register error", error)
        return res.status(500).json({
            message: "Server error while registering"
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body

        //check if body is empty if yes return error 
        //if something is false it will come in this if statment
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "something went wrong",
                success: false
            })
        }

        //after checkng the body check if any user with same emil exist or not
        let user = await User.findOne({ email })
        //if user is false it will come in this if 
        if (!user) {
            return res.status(400).json({
                message: "User not exist register first",
                success: false
            })
        }

        //then befor login first mathch password
        //here password will be in User
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect password or email",
                success: false
            })
        }

        if (role !== user.role) {
            return res.status(400).json({
                message: "Account did not match",
                success: false
            })
        }

        const tokenData = {
            userId: user._id
        }

        //generate the token with jwt,sign and secret key and expiry date
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        }

        //store the token in cookie
        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            message: `User login succesfully welcome back ${user.fullName}`,
            user,
            success: true
        })
    } catch (error) {
        console.log("login error")
        return res.status(500).json({
            message: 'Login failed ',
        })
    }
}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged Out Succesfully",
            success: true
        })
    } catch (error) {
        console.log("User not loggedOut", error)
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, bio, skills } = req.body
        const file = req.file;
        //we can update the random things   
        //cloudinary will come here ....
        //skills will come in string we will have to convert them in array 
        let skillArray;
        if (skills) {
            skillArray = skills.split(",")
        }

        const userId = req.id;     //id will come from req.id we will get them in userid by findby
        let user = await User.findById(userId)   // we will find the user by findbyid in user.id 
        //first we will check the user exist or not to update then  only update user
        if (!user) {
            return res.status(400).json({
                message: 'user not found please register first',
                success: false
            })
        }
        // updating the data
        // we will chnage the req form data into stored data
        if (fullName) user.fullName = fullName
        if (email) user.email = email
        if (phoneNumber) user.phoneNumber = phoneNumber
        if (bio) user.profile.bio = bio
        if (skills) user.profile.skills = skillArray

        //  resume come later here

        //this will send on postman body and it will show on postman body
        await user.save()
        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        }
        return res.status(200).json({
            message: "Profile updated successfully",
            user,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

















































