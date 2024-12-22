from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import g4f
from g4f.Provider import DeepAi, You
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    content: str

SYSTEM_PROMPT = """Ты - математический ассистент. Помогаешь решать задачи по математике и объясняешь математические концепции.
Отвечай на русском языке. Используй формулы и примеры где это уместно."""

@app.post("/api/chat")
async def chat(message: Message):
    try:
        # Try different providers in case some fail
        providers = [DeepAi, You]
        
        for Provider in providers:
            try:
                response = g4f.ChatCompletion.create(
                    model=g4f.models.gpt_35_turbo,
                    provider=Provider,
                    messages=[
                        {"role": "system", "content": SYSTEM_PROMPT},
                        {"role": "user", "content": message.content}
                    ],
                    stream=False
                )
                
                if response:
                    return {"content": response}
                    
            except Exception as e:
                continue
                
        raise HTTPException(status_code=503, detail="All providers failed")
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)