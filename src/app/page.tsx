'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pusherClient from '@/lib/pusher-client';

const ChatComponent = () => {
  const [messages, setMessages] = useState<{ user: string; message: string }[]>([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('User1'); // Default user name

  // Initialize Pusher to listen for new messages
  useEffect(() => {

    const channel = pusherClient.subscribe('chat-channel');
    channel.bind('new-message', (data: { message: string; user: string }) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      pusherClient.unsubscribe('chat-channel');
    };
  }, []);

  // Handle sending the message
  const sendMessage = async () => {
    if (message.trim() === '') return;

    try {
      await axios.post('/api/pusher', {
        message,
        user,
      });
      setMessage(''); // Clear the message input
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
