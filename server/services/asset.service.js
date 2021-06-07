const { Asset } = require('../models/asset');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');

const addAsset = async (assetName, category) => {
  try {
    const asset = new Asset({
      assetName,
      category,
    });
    await asset.save();
    return asset;
  } catch (error) {
    throw error;
  }
};

const getAssetById = async id => {
  try {
    const asset = await Asset.findById(id);
    if (!asset) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Asset Not Found');
    }
    return asset;
  } catch (error) {
    throw error;
  }
};

const deleteAssetById = async id => {
  try {
    const asset = await Asset.findByIdAndRemove(id);
    return asset;
  } catch (error) {
    throw error;
  }
};

const getAll = async args => {
  try {
    let order = args.order ? args.order : 'desc';
    let limit = args.limit ? args.limit : 10;

    const assets = await Asset.find({})
      .sort([['_id', order]])
      .limit(limit);
    if (!assets) {
      throw new ApiError(httpStatus.NOT_FOUND, 'No Assets found');
    }
    return assets;
  } catch (error) {
    throw error;
  }
};

const paginateAll = async req => {
  try {
    let aggQueryArray = [];

    if (req.body.keywords && req.body.keywords != '') {
      const re = new RegExp(`${req.body.keywords}`, 'gi');
      aggQueryArray.push({
        $match: { assetName: { $regex: re } },
      });
    }

    let aggQuery = Asset.aggregate(aggQueryArray);
    const options = {
      page: req.body.page,
      limit: 5,
      sort: { date: 'desc' },
    };
    const assets = await Asset.aggregatePaginate(aggQuery, options);
    return assets;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addAsset,
  getAssetById,
  deleteAssetById,
  getAll,
  paginateAll,
};
