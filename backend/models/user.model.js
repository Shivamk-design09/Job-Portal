//creating user model for job form
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],   //because we have to role to login
        required: true,
    }, profile: {
        bio: { type: String }, // we are not making it requird because we will make or edit bio later
        skills: [{ type: String }],  //skills will be the array of strings
        resume: { type: String },  //here we will upload the url of resume file  
        resumeOriginalName: { type: String },  // to write the name of resume file
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company"
        },         
        profilePhoto:{
            type:String, // we may not be uploading the profile photo
            default:""
        }
    },

},{timestamps:true})

export const User = mongoose.model('User',UserSchema)
