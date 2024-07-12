import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }, [messages]);

  // Log messages and its type to diagnose the issue
  //console.log('MESSAGES:', messages, 'TYPE:', typeof messages);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading && [...Array(3)].map((_, index) => (
        <MessageSkeleton key={index} />
      ))}
      {!loading && (!Array.isArray(messages) || messages.length === 0) && (
        <div className='flex items-center justify-center h-full text-gray-600'>
          No messages yet
        </div>
      )}
      {!loading && Array.isArray(messages) && messages.length > 0 && (
        <div className='space-y-4'>
          {messages.map((message, index) => (
            <div
              ref={messages.length === index + 1 ? lastMessageRef : null}
              key={message._id}
            >
              <Message message={message} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Messages;
