import mongoose from "mongoose";


const ConnectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected succesfully");
    } catch(Error){
        console.log(`Error DB not connected ,Error is ${Error}`);
    }
}

export default ConnectDB