// Express application
import express from 'express';

// configuration
const cfg = {
  port: process.env.PORT || 3000
};

// initialize Express
const app = express();

// home page route
app.get('/:name?', (req, res) => {
  res.send(`Hello aa ${ req.params.name || 'World' }!`);
});

// start server
app.listen(cfg.port, () => {
  console.log(`server listening at http://localhost:${ cfg.port }`);
});