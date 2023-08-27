const fastify = require('fastify')({
    logger: true
})

fastify.register(require('./routes/router'))

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})

