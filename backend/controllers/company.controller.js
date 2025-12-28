import { Company } from "../models/company.model.js"

export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body || {}    //this was edited by github copilet
        if (!companyName) {
            return res.status(400).json({
                message: "Company Name is required",
                success: false
            })
        }

        //finding the company from company database
        let company = await Company.findOne({ name: companyName })
        //if company name is register we will return an error that company is register
        //if company is true
        if (company) {
            return res.status(400).json({
                message: "Company name is already register",
                success: false
            })
        }

        company = await Company.create({
            name: companyName,
            userId: req.id
        })

        //after craating the company return a reponce adn company
        return res.status(200).json({
            message: "Company register",
            company,
            success: true
        })

    } catch (error) {
        console.log("Error in company register", error)
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


export const getCompany = async (req, res) => {
    try {
        const userId = req.id;   //loggedIn userID or register user id 

        //find the companies for same user from Company database
        const companies = await Company.find({userId})
        if (!companies) {
            return res.status(404).json({
                message: "Companies not found",
                success: false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log("Error in getting company", error)
    }
}



//here we are finding copmany by id 
export const getCompanyById = async (req, res) => {
    try {
        //we will get the id by req.params
        const companyById = req.params.id
        const company = await Company.findById(companyById)
        if (!company) {
            return res.status(404).json({
                message: "Company not found by Company Id ",
                success: false
            })
        }

        // after getting the company return the company
        return res.status(200).json({
            message: "Company found",
            company,
            success: true
        })
    } catch (error) {
        console.log("Error in getting companiesbyID ", error)
    }
}

export const updateCompany = async (req, res) => {
    try {
        //we will get the date which we want to update
        const { name, description, location, website } = req.body
        const file = req.file
        // here cloudinary will come 
        //make and object to update the data
        const updateData = { name, description, location, website }
        //findbyIDandupdate(id,what ot update,new(true))
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true })
        //if get any error return an error
        if (!company) {
            return res.status(404).json({
                message: "Error in company update",
                success: false
            })
        }
        
        // if company gets update then return success
        return res.status(200).json({
            message:"Company information updated",
            company,
            success:true
        })  

    } catch (error) {
        console.log("Company did not updated")
    }   
}