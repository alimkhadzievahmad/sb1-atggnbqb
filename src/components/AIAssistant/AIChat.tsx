import React, { useState } from 'react';
import { Bot, X, Minimize2, Maximize2 } from 'lucide-react';
import { AIMessage } from './AIMessage';
import { MessageInput } from './MessageInput';
import { useAIChat } from '../../hooks/useAIChat';

export function AIChat() {
  const { messages, isLoading, sendMessage } = useAIChat();
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-colors ${isMinimized ? 'w-80' : ''}`}>
      {/* Header */}
      <div className="p-3 flex items-center justify-between rounded-lg">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-blue-500" />
          <h2 className="text-sm font-medium text-gray-900 dark:text-white">
            Математический ассистент
          </h2>
          <span className="text-xs text-gray-400 dark:text-gray-500">5 сек</span>
        </div>
        <div className="flex items-center space-x-1">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            ) : (
              <Minimize2 className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            )}
          </button>
          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
            <X className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="border-t border-gray-200 dark:border-gray-700">
          {/* Messages */}
          <div className="h-[300px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <AIMessage key={index} message={message} />
            ))}
          </div>

          {/* Input */}
          <MessageInput onSend={sendMessage} disabled={isLoading} />
        </div>
      )}
    </div>
  );
}