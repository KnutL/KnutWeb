import React from 'react';
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

export const ChatBot = () => {
  return (
    <div className='wrapper'>
      <header>
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}