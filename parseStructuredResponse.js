// File: parseStructuredResponse.js
import axios from 'axios';

const structuredPrompt = `Return a JSON with { topText, bottomText } for a meme about a programmer debugging.`;

const response = await axios.post('https://api.openai.com/v1/completions', {
  model: 'text-davinci-003',
  prompt: structuredPrompt,
  max_tokens: 100
}, {
  headers: {
    'Authorization': `Bearer YOUR_API_KEY`
  }
});

const memeData = JSON.parse(response.data.choices[0].text);

console.log("Top:", memeData.topText);
console.log("Bottom:", memeData.bottomText);
