const express = require('express');
const app = express();
const { conn, Item } = require('./db');


app.get('/api/items', async(req, res, next)=> {
  try {
    res.send(await Item.findAll());
  }
  catch(ex){
    next(ex);
  }
});


const setup = async()=> {
  try {
    await conn.sync({ force: true });
    await Promise.all([
      Item.create({ data: 1}),
      Item.create({ data: 2}),
      Item.create({ data: 3}),
    ]);
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));

  }
  catch(ex){
    console.log(ex);
  }
};

setup();
