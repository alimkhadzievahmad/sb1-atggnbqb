import { LlamaModel, LlamaContext, LlamaChatSession } from 'node-llama-cpp';

let model: LlamaModel | null = null;
let context: LlamaContext | null = null;
let session: LlamaChatSession | null = null;

const SYSTEM_PROMPT = `Ты - математический ассистент. Ты помогаешь решать задачи по математике и объясняешь математические концепции.
Отвечай кратко и по существу. Используй формулы и примеры где это уместно.`;

export async function initLlama() {
  try {
    // Инициализация модели
    model = new LlamaModel({
      modelPath: './models/llama-2-7b-chat.gguf',
      contextSize: 2048,
      threads: 4
    });
    
    context = new LlamaContext({ model });
    session = new LlamaChatSession({ context });
    
    // Установка системного промпта
    await session.prompt(SYSTEM_PROMPT);
    
    return true;
  } catch (error) {
    console.error('Failed to initialize LLaMA:', error);
    return false;
  }
}

export async function getLlamaResponse(message: string): Promise<string> {
  if (!session) {
    throw new Error('LLaMA не инициализирована');
  }

  try {
    const response = await session.prompt(message);
    return response;
  } catch (error) {
    console.error('LLaMA error:', error);
    throw new Error('Не удалось получить ответ от модели');
  }
}