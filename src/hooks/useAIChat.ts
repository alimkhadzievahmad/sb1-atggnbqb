import { useState, useCallback } from 'react';
import { Message } from '../types';
import { getAIResponse } from '../services/ai/assistant';

const INITIAL_MESSAGE = {
  role: 'assistant' as const,
  content: 'Привет! Я математический ассистент. Как я могу помочь вам?'
};

export function useAIChat() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await getAIResponse(content);
      setIsOffline(!!response.isOffline);
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response.content
      }]);
      
      if (response.error) {
        console.warn('AI Assistant Warning:', response.error.message);
      }
    } catch (error) {
      console.error('AI Assistant error:', error);
      setIsOffline(true);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Извините, произошла ошибка. Я сейчас работаю в автономном режиме и могу отвечать только на базовые вопросы.'
      }]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { messages, isLoading, isOffline, sendMessage };
}