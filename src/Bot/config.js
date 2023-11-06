import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import LearningOptions from '../components/Option/LearningOption';

const config = {
    botName: "Restaurant Bot",
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
            widget: "learningOptions",
        })
    ],
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
};

export default config;