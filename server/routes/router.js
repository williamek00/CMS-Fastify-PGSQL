const Order = require("../handlers/orderHandler");
const Memo = require("../handlers/memoHandler")
function router(fastify, options, done) {
    fastify.get('/', Order.getAllOrders);
    fastify.delete('/order/:id', Order.removeOrder);
    fastify.post('/order', Order.addNewOrder);
    fastify.get('/memo', Memo.getAllMemos);
    done();
}

module.exports = router;