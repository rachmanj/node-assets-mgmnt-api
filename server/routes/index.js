const express = require('express');
const authRoute = require('./auth.route');
const usersRoute = require('./users.route');
const objectPerbaikanRoute = require('./objectPerbaikan.route');
const router = express.Router();

const routesIndex = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: usersRoute,
  },
  {
    path: '/objectperbaikan',
    route: objectPerbaikanRoute,
  },
];

routesIndex.forEach(route => {
  router.use(route.path, route.route);
});

module.exports = router;
