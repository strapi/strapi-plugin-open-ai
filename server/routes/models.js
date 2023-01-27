module.exports = {
  // accessible only from admin UI
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/models',
      handler: 'models.getModels',
      config: { policies: [] },
    },
  ],
};
