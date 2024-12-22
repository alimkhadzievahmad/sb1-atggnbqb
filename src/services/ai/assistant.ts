import { openai, SYSTEM_PROMPT, AI_CONFIG, BACKEND_API } from './config';
import { getFallbackResponse } from './fallback';
import { handleAIError } from './errors';
import { AIResponse } from './types';

async function getGPT4FreeResponse(message: string): Promise<string> {
  const response = await fetch(BACKEND_API.chat, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: message })
  });

  if (!response.ok) {
    throw new Error('GPT4Free API failed');
  }

  const data = await response.json();
  return data.content;
}

export async function getAIResponse(userMessage: string): Promise<AIResponse> {
  // First try OpenAI
  try {
    const completion = await openai.chat.completions.create({
      ...AI_CONFIG,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage }
      ]
    });

    return {
      content: completion.choices[0].message.content || 
        'Извините, я не смог сформулировать ответ.'
    };
  } catch (openaiError) {
    console.warn('OpenAI API failed, trying GPT4Free:', openaiError);

    // Then try GPT4Free
    try {
      const gpt4freeResponse = await getGPT4FreeResponse(userMessage);
      return {
        content: gpt4freeResponse,
        isOffline: false
      };
    } catch (gpt4freeError) {
      console.error('GPT4Free API failed:', gpt4freeError);
      
      // Finally, use fallback
      const aiError = handleAIError(gpt4freeError);
      const fallback = getFallbackResponse(userMessage);
      
      return {
        ...fallback,
        error: aiError
      };
    }
  }
}