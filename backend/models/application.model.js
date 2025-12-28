import { application } from "express";
import mongoose, { mongo } from "mongoose";


//this is for applicants who are applying for job 
const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: "pending"
    }
}, { timestamps: true })

export const Application = mongoose.model("Application", applicationSchema)

