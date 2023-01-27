import { request } from '@strapi/helper-plugin';

const models = {
  get: async () => {
    const data = await request(`/open-ai/models`, {
      method: 'GET',
    });
    return data;
  },
};
export default models;
