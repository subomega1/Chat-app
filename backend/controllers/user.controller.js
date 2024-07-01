import User from "../models/user.model.js";


export const getUsersForSlideBar = async (req,res) =>
{
  try {
      const loggedInUser = req.user._id;
      const fillterUser = await User.find({_id:{$ne: loggedInUser}}).select("-password");

      res.status(200).json(fillterUser);
  
  
  
  } catch (error) {
      console.error("Error in getUserForSlideBar",error.message);
      res.status(500).json({error: "internal server error"});
  }
}