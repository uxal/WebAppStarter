/**
 * Created by dragos on 02/07/2017.
 */
module.exports = {
    port: process.env.PORT || 3000,
    apiVersion: 1,
    db:{
        url:'mongodb://localhost:27017/koaTest'
    },
    auth:{
        clientSecret:'adasd13adfsdfasdasd',
    }
}