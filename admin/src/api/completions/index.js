import { request } from '@strapi/helper-plugin';

const completions = {
  create: async ({ model, prompt, temperature, maxTokens }) => {
    const data = await request(`/open-ai/completions`, {
      method: 'POST',
      body: { model, prompt, temperature, maxTokens },
    });
    return data;
  },
};
export default completions;
