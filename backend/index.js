// we are using type module in this 
// in type module  .js is important to right
import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()
import dotenv from "dotenv"
import ConnectDB from "./utils/db.js"
dotenv.config({})  //1)read the .env file data and 2)store them in process.env 
import userRoute from "./routes/user.routes.js"
import companyRoute from "./routes/company.routes.js"
import jobRoute from "./routes/job.routes.js"
import applicationRoute from "./routes/application.routes.js"

//middlewares
// request comes in json
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//corse cross origin resource sharing plateform allow domain to request
//frontedn se request id domain se aati h                                                                                                                                                                                                                                  
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
};
app.use(cors(corsOptions))
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user",userRoute)
app.use("/api/v1/company",companyRoute)
app.use("/api/v1/job",jobRoute)
app.use("/api/v1/application",applicationRoute)

app.listen(PORT,()=>{
    ConnectDB()
    console.log(`Server is running on PORT ${PORT}`)
})
