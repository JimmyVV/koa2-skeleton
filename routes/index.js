const Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
  await ctx.render('index')
})

router.get('/about', async ctx => {
  await ctx.render('about')
})

module.exports = router;
