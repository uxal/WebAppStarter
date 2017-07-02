/**
 * Created by dragos on 02/07/2017.
 */

'use strict';

const Router = require('koa-router');
const router = new Router();
const send = require('koa-send');



router.get(`/test`, async (ctx) => {
    console.log("aici1");
    ctx.body = {success: true, result: "This is data from server side api"};
});

//reply with the index file from the distribution
router.get('*', async (ctx) => {
    console.log("aici2");
    await send(ctx, ctx.path, {root: __dirname + '/index.html'});
});


module.exports = router;

