
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Correct initialization as per guidelines using process.env.API_KEY directly
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getChatResponse(message: string, history: { role: string, parts: { text: string }[] }[]) {
    try {
      // Use ai.models.generateContent directly with model name and contents
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ role: h.role === 'model' ? 'model' : 'user', parts: h.parts })),
          { role: 'user', parts: [{ text: `User message: ${message}` }] }
        ],
        config: {
          systemInstruction: "You are ZarkBot, the official AI assistant for ZARKOBIT SALON. ZARKOBIT is a global on-demand salon marketplace. You help users with bookings, vision, and technology questions. GPSN Vishal is the Founder and Ramu Goswami is CEO/CTO. The platform is global and works like Uber for salons. Keep responses concise, professional, and helpful.",
        }
      });
      // Accessing .text property instead of calling .text() method
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having trouble connecting to my brain right now. Please try again later!";
    }
  }
}

export const geminiService = new GeminiService();
