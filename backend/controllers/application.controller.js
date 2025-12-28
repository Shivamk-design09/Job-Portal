import { Application } from "../models/application.model.js"
import { Job } from "../models/job.model.js"


//
export const applyjob = async (req, res) => {
    try {
        //1) get the user id to apply the job
        const userId = req.id

        //2) get the job id to apply wher a user can apply 
        const jobId = req.params.id
        if (!jobId) {
            return res.status(400).json({
                message: "job is required",
                success: false
            })
        }

        //3)if user have applied for same job return an error
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId })
        //if axistingApplication got true return the error you have already applied
        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied to this job",
                success: false
            })
        }
        //4) weateher the job is still available or not
        const job = await Job.findById(jobId)
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        //after checking all the things like job , alreadyappiled, existing
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        })

        //we are pushing the applicaton into applications array in job.models
        job.applications.push(newApplication._id)
        await job.save()
        return res.status(201).json({
            message: "job applied successfully",
            job,
            success: true
        })
    } catch (error) {
        console.log("Error in apply job ")
        return res.status(400).json({
            message: "Something error on apply job",
            success: false
        })
    }
}

//this was to check applied job for student
export const getAppliedJob = async (req, res) => {
    try {
        const userId = req.id
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: "job",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "company",
                options: { sort: { createdAt: -1 } }
            }
        })

        if (!application) {
            return res.status(404).json({
                message: "No application ",
                success: false
            })
        }

        return res.status(200).json({
            application,
            success: true
        })




    } catch (error) {
        console.log("Error in get Applied JOb", error)
    }
}

//user can check how many students have applied for the jobs
export const getApplicants = async (req, res) => {
    try {

        //we will get the job by job id after searching it
        const jobId = req.params.id

        //after finding the job we will get the job by id
        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "applicant"
            }
        })

        if (!job) {
            return res.status(404).json({
                message: "job not found",
                success: false
            })
        }

        //after finding the job we will return success true
        return res.status(200).json({
            message: "Job found",
            job,
            success: true
        })
    } catch (error) {
        console.log("Error in get applicants ", error)
    }
}


//updating the status 
export const updateStatus = async (req, res) => {
    try {
        //we will get the stauts by body
        const { status } = req.body
        //we will get the application id by req.parems.id         
        const applicationId = req.params.id
        if (!status) {
            return res.status(400).json({
                message: "status is required",
                success: false
            })
        }
        //find the application by application id
        const application = await Application.findOne({_id:applicationId})
        // if we did not fund the application return success false
        if(!application){
            return res.status(400).json({
                message:"Application not found",
                success:false
            })
        }
        //update the status 
        application.status = status.toLowerCase()
        await application.save()
        return res.status(200).json({
            message:"status updated successfully",
            success:true
        })

    } catch (error) {
        console.log("Errorin updatinstatus",error)
    }
}