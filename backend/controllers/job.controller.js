import { Job } from "../models/job.model.js";


//adming job post karega  
export const postJob = async (req, res) => {
    try {
        //we will get all the fild in req.body
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body

        //getting id for which user is posting the job
        const userId = req.id

        //to create the job these things are mendetatory without this it will through an error
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        }

        //left side fix hona chahiye jo shcema me h or right side vo values se ayengi
        //our form request will come from req.body and then createa and model
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experinceLevel: experience,
            position,
            company: companyId,
            created_by: userId,
        })

        return res.status(201).json({
            message: "job created successfully",
            job,
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "Job not created please check ",
            success: true
        })
    }
}


//getting the job by keywords here
export const getAllJob = async (req, res) => {
    try {
        //keyword will get from query from api /api/job?keyword=frontend Devlopment
        const keyword = req.query.keyword || "";   //if keyword is given the okey if not then an empty array
        const query = {
            //we are using $or to find atleast on condition
            $or: [  //key valsue return from mongoDB
                { title: { $regex: keyword, $options: "i" } },   //here keyword will come from query,option "i" stands for case insitive search means no uppercase or lowecase
                { description: { $regex: keyword, $options: "i" } } //here keyword will come from query
            ]
        }

        const jobs = await Job.find(query).populate({ // we are using populate to fetch actual data form id in the given refrence
            path:"company"   //give path kisko populate karna h
        }).sort({createdAt:-1})
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })

    } catch (error) {
        console.log("Error in getting jobAlljob", error)
    }
}


//findign job by id
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id    // finding the job by id 
        const job = await Job.findById(jobId)  // we will use pepulate here 

        //if did  not foudn the job return and error
        if (!job) {
            return res.status(401).json({
                message: "job did not found by id",
                success: true
            })
        }

        //if we found the job return the job 
        return res.status(200).json({
            message: "job found by id",
            job,
            success: true
        })
    } catch (error) {
        console.log("Error in getting job by Id", error)
    }
}

//admign kitne job post kiya hai abhi tak
export const getAdminJobs = async (req, res) => {       
    try {
        //we are finding the job by id
        const adminId = req.id
        const jobs = await Job.find({ created_by: adminId })
        if (!jobs) {
            return res.status(401).json({
                message: "Jobs not found",
                success: false
            })
        }

        //if jobs found return jobs
        return res.status(200).json({
            message:"Admin Jobs found",
            jobs,
            success:true
        })
    } catch (error) {
        console.log("Error in get Admin jobs ", error)
    }
}


