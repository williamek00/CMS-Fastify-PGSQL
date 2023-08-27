const Handler = require("../handlers/handler");

function router(fastify, options, done) {
    fastify.get('/', Handler.getAllOrders);
    done();
}

module.exports = router;