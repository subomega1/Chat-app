import Conversation from "../models/conversation.model.js";
import Message from "../models/messages.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id:receiverId } = req.params; 
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId , 
      message,
    });
    
    await newMessage.save();
   

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await conversation.save();
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in send message", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getMessage = async (req ,res) =>
  {
    try {
      const {id:userTochatId} = req.params;
      const senderId = req.user._id;
      const conversation = await Conversation.findOne({
        participants : {$all :[senderId,userTochatId]}
      }).populate("messages");


      if (!conversation) return res.status(200).json([]);


      const message = conversation.messages;

      res.status(200).json(conversation.messages)

    
    
    
    } catch (error) {
      console.log("Error in send message", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
