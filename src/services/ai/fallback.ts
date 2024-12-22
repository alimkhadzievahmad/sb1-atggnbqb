import { mathTopics } from './topics/mathTopics';
import { AIResponse } from './types';

export function getFallbackResponse(message: string): AIResponse {
  const lowercaseMessage = message.toLowerCase();
  
  const matchedTopic = mathTopics.find(topic => 
    topic.keywords.some(keyword => lowercaseMessage.includes(keyword))
  );

  return {
    content: matchedTopic?.response || 
      'Извините, в данный момент я работаю в автономном режиме и могу предоставить только базовые ответы. Попробуйте задать вопрос позже или уточните его, используя математические термины.',
    isOffline: true
  };
}