/**
 * Created by dragos on 02/07/2017.
 */

'use strict';

/**
 * Created by dragos on 06/06/2017.
 */

'use strict';

require("babel-polyfill");
const Koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const mount = require('koa-mount');
const bodyParser = require('koa-bodyparser');
const config = require('./config/default');
const mongoose = require('mongoose');
const cors = require('koa2-cors');

//const errorHandling = require('./src/middlewares/handleErrors');
//load the routes defined in separate file in src folder
const routes = require('./routes');

//const passport = require('./src/auth');

const isInProduction = process.env.NODE_ENV === "production";

const app = new Koa();

if (isInProduction) {
    app.use(serve('/'));

}

//include server routes as middleware
app.use(mount(`/api/${config.apiVersion}`, (ctx) => {
    require('./routes').routes()(ctx)
}));

//anything else is returning the index file


//logger
app.use(logger());

//use cors
app.use(cors());

//custom error handling
//app.use(errorHandling());

//body parser
app.use(bodyParser());

//routes, from separate file
app.use(routes.routes());

//initilize passport
//app.use(passport.initialize());

//start the app with mongoose

app.listen(config.port, () => {
    console.info(`Application started on port ${config.port}`);
});
/**
 mongoose.Promise = global.Promise;
 mongoose
 .connect(config.db.url)
 .then(() => {
        app.listen(config.port, () => {
            console.info(`Application started on port ${config.port}`);
        });
    })
 .catch((err) => {
        console.error('Error:', err);
    });
 **/


