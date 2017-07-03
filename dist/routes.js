/**
 * Created by dragos on 02/07/2017.
 */

'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Router = require('koa-router');
var router = new Router();
var send = require('koa-send');
var config = require('./config/default');

router.get('/api/' + config.apiVersion + '/test', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        ctx.body = { success: true, result: "This is data from server side api" };

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}());

//reply with the index file from the distribution
router.get('*', function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log(ctx.path);

                        if (!(ctx.path.indexOf(".js") > -1 || ctx.path.indexOf(".css") > -1)) {
                            _context2.next = 6;
                            break;
                        }

                        _context2.next = 4;
                        return send(ctx, ctx.path);

                    case 4:
                        _context2.next = 8;
                        break;

                    case 6:
                        _context2.next = 8;
                        return send(ctx, '/index.html');

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x2) {
        return _ref2.apply(this, arguments);
    };
}());

module.exports = router;