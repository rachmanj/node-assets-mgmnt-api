const { Maintenance } = require('../models/maintenance');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');
const mongoose = require('mongoose');

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

const paginateMaintenances = async req => {
  try {
    let aggQueryArray = [];

    if (req.body.asset && req.body.asset.length > 0) {
      let newAssetsArray = req.body.asset.map(item =>
        mongoose.Types.ObjectId(item)
      );
      aggQueryArray.push({
        $match: { asset: { $in: newAssetsArray } },
      });
    }

    //// add populate
    aggQueryArray.push(
      {
        $lookup: {
          from: 'assets',
          localField: 'asset',
          foreignField: '_id',
          as: 'asset',
        },
      },
      { $unwind: '$asset' }
    );

    let aggQuery = Maintenance.aggregate(aggQueryArray);
    const options = {
      page: req.body.page,
      limit: 6,
      sort: { date: 'desc' },
    };
    const maintenances = await Maintenance.aggregatePaginate(aggQuery, options);
    return maintenances;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addMaintenance,
  allMaintenances,
  paginateMaintenances,
};
