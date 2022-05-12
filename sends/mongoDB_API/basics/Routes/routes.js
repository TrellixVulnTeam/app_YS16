module.exports = (app) => {
  const items = require('../create_collection');
  
  app.post('/items', items.create);
  app.get('/items', items.findAll);
  app.get('/items/:itemsId', items.findOne);
}