import jwt from "jsonwebtoken"

const isAuthenticated = async (req, res, next) => {
    try {
        // 1)check if token exist or not 
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({
                message: "User not Authroized",
                success: false
            })
        }

        //2)decode the token if token exist
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        if (!decode) {
            return res.status(402).json({
                message: "Invalid token",
                success: false
            })
        }

        //if token is decoded we 
        req.id = decode.userId;
        next()

    } catch (error) {
        console.log("Authe middleware error")
        return res.status(500).json({
            message: "Authenticatd failed",
            error
        })
    }
}

export default isAuthenticated