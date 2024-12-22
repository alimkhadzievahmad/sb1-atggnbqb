import OpenAI from 'openai';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});

export const SYSTEM_PROMPT = `Ты - математический ассистент. Помогаешь решать задачи по математике и объясняешь математические концепции.
Отвечай на русском языке. Используй формулы и примеры где это уместно.`;

export const AI_CONFIG = {
  model: 'gpt-3.5-turbo',
  temperature: 0.7,
  max_tokens: 1000
} as const;

export const BACKEND_API = {
  chat: `${BACKEND_URL}/api/chat`
};