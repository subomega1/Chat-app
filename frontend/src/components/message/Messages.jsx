import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      
    }, 50);
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading && [...Array(3)].map((_, index) => (
        <MessageSkeleton key={index} />
      ))}
      {!loading && messages.length === 0 && (
        <div className='flex items-center justify-center h-full text-gray-600'>
          No messages yet
        </div>
      )}
      {!loading && messages.length > 0 && (
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
