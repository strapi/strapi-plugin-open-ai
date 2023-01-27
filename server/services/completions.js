'use strict';

const fetch = require('node-fetch');

module.exports = ({ strapi }) => {
  const createCompletion = async ({ model, prompt, temperature, maxTokens }) => {
    try {
      const response = await fetch(`https://api.openai.com/v1/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${strapi
            .plugin('open-ai')
            .config('API_TOKEN')}`,
        },
        body: JSON.stringify({ model, prompt, temperature, max_tokens: maxTokens }),
      });

      const res = await response.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createCompletion,
  };
};
