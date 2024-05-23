'use strict';

module.exports = ({ strapi }) => {
  const getPluginStore = () => {
    return strapi.store({
      environment: '',
      type: 'plugin',
      name: 'open-ai',
    });
  };

  // Create default settings
  const createDefaultConfig = async () => {
    const pluginStore = getPluginStore();
    const value = {
      model: '',
      temperature: 1,
      maxTokens: 16,
      models: [
        'dall-e-3',
        'whisper-1',
        'davinci-002',
        'babbage-002',
        'dall-e-2',
        'gpt-3.5-turbo-16k',
        'tts-1-hd-1106',
        'tts-1-hd',
        'gpt-3.5-turbo-1106',
        'gpt-3.5-turbo-instruct-0914',
        'gpt-3.5-turbo-instruct',
        'tts-1',
        'gpt-3.5-turbo-0301',
        'tts-1-1106',
        'gpt-3.5-turbo-0125',
        'text-embedding-3-large',
        'gpt-3.5-turbo',
        'text-embedding-3-small',
        'gpt-3.5-turbo-0613',
        'text-embedding-ada-002',
        'gpt-3.5-turbo-16k-0613',
      ],
    };
    await pluginStore.set({ key: 'settings', value });
    return pluginStore.get({ key: 'settings' });
  };
  const createConfigFromData = async (settings) => {
    const value = settings;
    const pluginStore = getPluginStore();
    await pluginStore.set({ key: 'settings', value });
    return pluginStore.get({ key: 'settings' });
  };
  const getSettings = async () => {
    const pluginStore = getPluginStore();
    let config = await pluginStore.get({ key: 'settings' });
    if (!config) {
      config = await createDefaultConfig();
    }
    return config;
  };
  const setSettings = async (data) => {
    return createConfigFromData(data);
  };
  return {
    getSettings,
    setSettings,
  };
};
