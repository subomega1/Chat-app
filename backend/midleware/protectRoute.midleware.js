import  jwt  from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute =  async (req,res,next) => {
  try {
    const token = req.cookies.jwt;
    if (!token){
       return res.status(401).json({error: "Unauthorized -no token provied"})
    }
    const decoded = jwt.verify(token ,process.env.JWT_SECRET);

    if (!decoded){
      return res.status(401).json({error: "Unauthorized -no  unvalid token "})
    }
    const user = await User.findById(decoded.userId).select("-password")
    if (!user)
      {
        return res.status(404).json({error:"Usernot found"})
      }
      req.user = user
      next();
  
  } catch (error) {
    console.log ("error in protecting route",error.message)
    res.status(500).json({eroor: "internal serval error"})
  }
}
export default protectRoute;