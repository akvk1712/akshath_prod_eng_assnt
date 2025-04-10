// File: retryWrapper.js
import axios from 'axios';

async function fetchWithRetry(url, data, headers, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (err) {
      if (i === retries - 1) throw err;
      console.warn(`Retry ${i + 1} failed, retrying...`);
      await new Promise(res => setTimeout(res, 1000));
    }
  }
}
