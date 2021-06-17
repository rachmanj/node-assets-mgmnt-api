const { Maintenance } = require('../models/maintenance');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');

const addMaintenance = async body => {
  try {
    const maintenance = new Maintenance({
      ...body,
    });
    await maintenance.save();
    return maintenance;
  } catch (error) {
    throw error;
  }
};

const allMaintenances = async req => {
  try {
    const maintenances = await Maintenance.find({})
      .populate('assets')
      .sort([[req.query.sortBy, req.query.order]])
      .limit(parseInt(req.query.limit));
    return maintenances;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addMaintenance,
  allMaintenances,
};
