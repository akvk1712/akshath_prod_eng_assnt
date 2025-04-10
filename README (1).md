# Product Engineer Assignment - Meme Generator with GenAI APIs

## Assignment Overview

This project is part of my **Product Engineer assignment** at Crio.Do. The task is to demonstrate how to integrate multiple APIs into a single workflow using **Generative AI (GenAI)**. In this case, the workflow is for creating a meme that combines three key components:

1. **Caption Generation**: Using OpenAI's GPT model to generate a meme caption.
2. **Image Generation**: Using a text-to-image API like Stability AI or DALL-E to create an image based on the caption.
3. **Voiceover Generation**: Using a Text-to-Speech (TTS) API like ElevenLabs to create a voiceover for the meme.
4. **Downloadable Meme**: Combining the generated image and audio into a downloadable video file.

This assignment demonstrates the power of API integration and the versatility of GenAI in creating rich, multimodal experiences.

## Features

- **Meme Caption Generation**: Generate meme captions based on user input.
- **Image Generation**: Convert the generated caption into a relevant image.
- **Voiceover Generation**: Convert the caption into a speech (voiceover).
- **Meme Creation**: Combine the image and voiceover into a downloadable video file.
- **Retry Mechanism**: Implement retry logic for API failures to ensure robustness.

## Learning Objectives

- Understand the importance of integrating multiple APIs into a seamless workflow.
- Learn how to interact with various GenAI APIs (e.g., OpenAI, Stability AI, ElevenLabs).
- Gain experience with implementing error handling and retry mechanisms.
- Understand how to format and parse structured API responses.
- Learn how to combine multimedia (image + voiceover) into a downloadable format.

## Setup Instructions

### Prerequisites

- **Node.js** and **npm** installed.
- API Keys for the following services:
  - [OpenAI API Key](https://platform.openai.com/signup) for meme caption generation.
  - [Stability AI API Key](https://stability.ai/) for image generation.
  - [ElevenLabs API Key](https://elevenlabs.io/) for generating voiceovers.

### Installation Steps

1. Clone the repository:
   
   ```bash
   git clone https://github.com/your-username/meme-generator.git
   cd meme-generator
