import OpenAI from 'openai';
import { Message } from '../types';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getChatCompletion(messages: Message[]): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 1000
    });

    return completion.choices[0].message.content || 'Извините, я не смог сформулировать ответ.';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Не удалось получить ответ от ассистента');
  }
}