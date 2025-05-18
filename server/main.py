from fastapi import FastAPI, Request
from pydantic import BaseModel
from transformers import pipeline
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_methods=["*"],
    allow_headers=["*"],
)

summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

class TextRequest(BaseModel):
    text: str

@app.post("/summarize")
async def summarize(request: TextRequest):
    result = summarizer(request.text, max_length=130, min_length=30, do_sample=False)
    return {"summary": result[0]["summary_text"]}
