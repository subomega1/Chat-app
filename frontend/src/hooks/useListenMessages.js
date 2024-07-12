import React, { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import notificationSound from '../assets/sounds/notification .mp3';

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { addMessage } = useConversation();

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      // Mark the message for shaking animation
      newMessage.shouldShake = true;

      // Play notification sound
      const sound = new Audio(notificationSound);
      sound.play();

      // Add the message to the conversation state
      addMessage(newMessage);
    };

    // Listen for 'newMessage' events from the socket
    socket?.on('newMessage', handleNewMessage);

    // Clean up by removing the socket listener when component unmounts
    return () => socket?.off('newMessage', handleNewMessage);
  }, [socket, addMessage]);

  // Ensure to return necessary values or actions if needed
  return {}; // Adjust as per your requirements
}

export default useListenMessages;
