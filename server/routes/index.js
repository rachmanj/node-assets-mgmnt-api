const express = require('express');
const authRoute = require('./auth.route');
const usersRoute = require('./users.route');
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
];

routesIndex.forEach(route => {
  router.use(route.path, route.route);
});

module.exports = router;
