import express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouters from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import userRoute from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectMongoDB.js";


const PORT = process.env.PORT || 5000 
const app = express();

dotenv.config();
 
app.use(express.json()); //to parse incoming request with json playload(from req.body)
app.use(cookieParser());

app.use("/api/auth",authRouters);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoute);

app.listen(PORT,() =>{
    connectToMongoDB();
    console.log(`server working on port ${PORT}`)
})

