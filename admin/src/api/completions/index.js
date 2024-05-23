import { request } from '@strapi/helper-plugin';

const completions = {
  create: async ({ model, messages, temperature, maxTokens }) => {
    const data = await request(`/open-ai/completions`, {
      method: 'POST',
      body: { model, messages, temperature, maxTokens },
    });
    return data;
  },
};
export default completions;
