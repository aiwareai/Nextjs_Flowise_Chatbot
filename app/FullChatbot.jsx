'use client'

import { useEffect } from 'react';

const FullChatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    script.async = true;
    script.onload = () => {
      window.Chatbot.initFull({
        chatflowid: '05a1a081-1abb-4a1d-9e58-0f0789285207',
        apiHost: 'https://piotrmacai-flowise.hf.space',
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <flowise-fullchatbot />;
};

export default FullChatbot;