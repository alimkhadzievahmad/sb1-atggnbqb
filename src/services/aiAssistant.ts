import OpenAI from 'openai';
import { getFallbackResponse } from './fallbackResponses';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const SYSTEM_PROMPT = `Ты - математический ассистент. Помогаешь решать задачи по математике и объясняешь математические концепции.
Отвечай на русском языке. Используй формулы и примеры где это уместно.`;

export async function getAIResponse(userMessage: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    return completion.choices[0].message.content || 'Извините, я не смог сформулировать ответ.';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return getFallbackResponse(userMessage);
  }
}