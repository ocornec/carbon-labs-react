import {createComponent} from '@lit/react';
import React from 'react';
import Chat from '@carbon-labs/ai-chat/es/components/chat/chat.js';

export const CLABSChat = createComponent({

  tagName: 'clabs-chat',

  elementClass: Chat,

  react: React,

  events: {

  },

});
