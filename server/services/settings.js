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
        'babbage',
        'ada',
        'davinci',
        'text-embedding-ada-002',
        'babbage-code-search-code',
        'text-similarity-babbage-001',
        'text-davinci-001',
        'curie-instruct-beta',
        'babbage-code-search-text',
        'babbage-similarity',
        'curie-search-query',
        'code-search-babbage-text-001',
        'code-cushman-001',
        'code-search-babbage-code-001',
        'code-davinci-002',
        'text-ada-001',
        'text-similarity-ada-001',
        'text-davinci-insert-002',
        'ada-code-search-code',
        'text-davinci-002',
        'ada-similarity',
        'text-davinci-003',
        'code-search-ada-text-001',
        'text-search-ada-query-001',
        'text-curie-001',
        'text-davinci-edit-001',
        'davinci-search-document',
        'ada-code-search-text',
        'text-search-ada-doc-001',
        'code-davinci-edit-001',
        'davinci-instruct-beta',
        'text-babbage-001',
        'text-similarity-curie-001',
        'code-search-ada-code-001',
        'ada-search-query',
        'text-search-davinci-query-001',
        'curie-similarity',
        'davinci-search-query',
        'text-davinci-insert-001',
        'babbage-search-document',
        'ada-search-document',
        'curie',
        'text-search-babbage-doc-001',
        'text-search-curie-doc-001',
        'text-search-curie-query-001',
        'babbage-search-query',
        'text-search-davinci-doc-001',
        'text-search-babbage-query-001',
        'curie-search-document',
        'text-similarity-davinci-001',
        'audio-transcribe-001',
        'davinci-similarity',
        'cushman:2020-05-03',
        'ada:2020-05-03',
        'babbage:2020-05-03',
        'curie:2020-05-03',
        'davinci:2020-05-03',
        'if-davinci-v2',
        'if-curie-v2',
        'if-davinci:3.0.0',
        'davinci-if:3.0.0',
        'davinci-instruct-beta:2.0.0',
        'text-ada:001',
        'text-davinci:001',
        'text-curie:001',
        'text-babbage:001',
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
