/**
 * Created by dragos on 02/07/2017.
 */

'use strict';

const Router = require('koa-router');
const router = new Router();
const send = require('koa-send');
const config = require('./config/default');


router.get(`/api/${config.apiVersion}/test`, async (ctx) => {
    ctx.body = {success: true, result: "This is data from server side api"};
});

//reply with the index file from the distribution
router.get('*', async (ctx) => {
    console.log(ctx.path);
    if (ctx.path.indexOf(".js") > -1 || ctx.path.indexOf(".css") > -1) {
        await send(ctx, ctx.path);
    }
    else {
        await send(ctx, '/index.html');
    }

});


module.exports = router;

