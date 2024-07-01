import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup =async (req,res) => {
    try{
        const {fullName,username,password,confirmPassword,gender}=req.body;
        if (password!=confirmPassword)
            {
                return res.status(400).json({error : "Password don't match"});

            } 
            const user = await User.findOne({username});
        if (user)
            {
                return res.status(400).json({error : "User alredy exist"})
            }
        //hash pasword Here
        const salt = await bcrypt.genSalt(10);
        const hashedPasword = await bcrypt.hash(password,salt);
        const boyProfilePic = `https://i.pravatar.cc/150?u=${username}`;
        const girlProfilePic = `https://i.pravatar.cc/150?u=${username}`;  
        const newUser = new User({
            fullName,
            username,
            password :hashedPasword,
            gender,
            profilePic : gender == "male" ? boyProfilePic : girlProfilePic,
        })   
        if (newUser){
            //genrate JWt token
            generateToken(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                password: newUser.password,
                gender : newUser.gender,
                profilePic : newUser.profilePic,
            })
        }
        else{
            res.status(400).json({error:"Invalid user data"});
        }
          
     }
    catch(error){
        console.log("could not sign up" ,error);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const login = async(req,res) => {
    try{
        const {username,password}=req.body;
        const user = await User.findOne({username});
        const isPasswordValid = await bcrypt.compare(password,user?.password || "");
        if (!user || !isPasswordValid)
            {
                return res.status(400).json({error : "invalid uername or password"});
            }
            generateToken(user._id,res);
            res.status(200).json({
                _id:user._id,
                fullName: user.fullName,
                username: user.username,
                gender : user.gender,
                profilePic : user.profilePic,
            })
    }
    catch(error){
        console.log("could not login" ,error);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const logout = (req,res) => {
    try{
        res.clearCookie("jwt");
        res.status(200).json({message:"Logout Success"});
    }
    catch(error){
        console.log("could not logout" ,error);
        res.status(500).json({error:"Internal Server Error"});
    }
}
