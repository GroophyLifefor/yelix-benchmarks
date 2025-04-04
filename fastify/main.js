// Import the framework and instantiate it
const fastify = require('fastify')()

// Declare a route
fastify.get('/api/hello', function (request, reply) {
  reply.send("Hello World!")
})

fastify.listen({ port: 3034 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

