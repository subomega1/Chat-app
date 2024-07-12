import { useState, useEffect } from 'react';
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
  const { messages, setMessages, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedConversation) return;

    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await response.json();
        setMessages(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setMessages([]); // Ensure messages is an array even if fetch fails
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [selectedConversation, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
