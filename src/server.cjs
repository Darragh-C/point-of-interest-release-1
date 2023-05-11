const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Hapi = require('@hapi/hapi');
const Cookie = require('@hapi/cookie');
const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');
const jwt = require('hapi-auth-jwt2');
const HapiSwagger = require('hapi-swagger');
const { fileURLToPath } = require('url');
const Handlebars = require('handlebars');
const { webRoutes } = require('./web-routes.js');
const { db } = require('./models/db.js');
const { accountsController } = require('./controllers/accounts-controller.js');
const { validate } = require('./api/jwt-utils.js');
const { apiRoutes } = require('./api-routes.js');

/*const __filename = fileURLToPath(import.meta.url);*/
/*const __dirname = path.dirname(__filename);*/

const result = dotenv.config();
if (result.error) {
  console.log(result.error.message);
  process.exit(1);
}

const swaggerOptions = {
  info: {
    title: 'POI API',
    version: '0.1',
  },
  securityDefinitions: {
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  security: [{ jwt: [] }],
};

async function init() {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
  });

  await server.register(Inert);
  await server.register(Vision);
  await server.register(Cookie);
  await server.register(jwt);

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  server.validator(Joi);

  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: './views',
    layoutPath: './views/layouts',
    partialsPath: './views/partials',
    layout: true,
    isCached: false,
  });

  server.auth.strategy('session', 'cookie', {
    cookie: {
      name: process.env.COOKIE_NAME,
      password: process.env.COOKIE_PASSWORD,
      isSecure: false,
    },
    redirectTo: '/',
    validate: accountsController.validate,
  });
  server.auth.strategy('jwt', 'jwt', {
    key: process.env.COOKIE_PASSWORD,
    validate: validate,
    verifyOptions: { algorithms: ['HS256'] }
  });
  server.auth.default('session');

  db.init('mongo');
  server.route(webRoutes);
  server.route(apiRoutes);
  await server.start();
  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();