import { request } from '@strapi/helper-plugin';

const settings = {
  get: async () => {
    const data = await request(`/open-ai/settings`, {
      method: 'GET',
    });
    return data;
  },
  set: async (data) => {
    return await request(`/open-ai/settings`, {
      method: 'POST',
      body: data,
    });
  }
};
export default settings;
