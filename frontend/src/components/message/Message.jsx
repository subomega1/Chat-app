import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/time'

const Message = ({ message }) => {
  const {authUser}=useAuthContext()
  const {selectedConversation}=useConversation()
  const fromMe = message.senderId === authUser._id
  const formattedTme = extractTime(message.createdAt)
  const chatClass = fromMe ? 'chat chat-end' : 'chat chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bubleBgColor = fromMe ? 'bg-indigo-700' : 'bg-accent-content'
  return (
    <div className={`${chatClass}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
        <img src={profilePic} alt="usr avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white   ${bubleBgColor} pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'> {formattedTme}</div>
    </div>
  )
}

export default Message
