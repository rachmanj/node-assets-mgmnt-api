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
    objekperbaikan: allRights,
  },
  user: {
    profile: {
      'read:own': ['*', '!password', '!_id'],
      'update:own': ['*'],
    },
    objekperbaikan: {
      'read:any': ['*'],
      'create:any': ['*'],
    },
  },
};

const roles = new AccessControl(grantsObject);

module.exports = { roles };
