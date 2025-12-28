import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    website: {
        type: String,
    }, 
    logo: {
        type: String,    //url to Company logo 
    }, 
    userId: {   //which company has creted the company
        type:mongoose.Schema.Types.ObjectId ,
        ref:"User",
        required:true
    }

},{timestamps:true})

export const Company = mongoose.model("Company", CompanySchema)