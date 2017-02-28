const Koa = require('koa'),
    views = require('koa-views'),
    serve = require('koa-static'),
    rootRoutes = require('./routes/index'),
    bodyParser = require('koa-bodyparser');
const app = new Koa()

app.use(views(`${__dirname}/views`, { extension: 'jade' }));
app.use(serve(`${__dirname}/public`));
app.use(bodyParser());
app.use(rootRoutes.routes());
app.use(rootRoutes.allowedMethods());

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})

modules.exports =  app;
