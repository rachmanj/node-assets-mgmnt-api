const AccessControl = require('accesscontrol');

const allRights = {
  'create:any': ['*'],
  'read:any': ['*'],
  'update:any': ['*'],
  'delete:any': ['*'],
};

let grantsObject = {
  admin: {
    profile: allRights,
    assets: allRights,
  },
  user: {
    profile: {
      'read:own': ['*', '!password', '!_id'],
      'update:own': ['*'],
    },
    assets: {
      'read:any': ['*'],
      'create:any': ['*'],
    },
  },
};

const roles = new AccessControl(grantsObject);

module.exports = { roles };
