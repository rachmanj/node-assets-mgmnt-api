const express = require('express');
const authRoute = require('./auth.route');
const usersRoute = require('./users.route');
const assetRoute = require('./asset.route');
const maintenanceRoute = require('./maintenance.route');
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
    path: '/assets',
    route: assetRoute,
  },
  {
    path: '/maintenance',
    route: maintenanceRoute,
  },
];

routesIndex.forEach(route => {
  router.use(route.path, route.route);
});

module.exports = router;
