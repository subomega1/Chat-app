import mongoose from "mongoose";


const connectToMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.mongodb_URL,)
        console.log("connect to the DataBase");
    }
    catch(error){
        console.log("could not connext to the Data Base",error.message);
    }
}
export default connectToMongoDB;