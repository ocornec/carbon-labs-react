import {createComponent} from '@lit/react';
import React from 'react';
import CLABSChat from '@carbon-labs/ai-chat/es/components/chat/chat.js';

export const Chat = createComponent({

  tagName: 'clabs-chat',

  elementClass: CLABSChat,

  react: React,

  events: {

  },

});
