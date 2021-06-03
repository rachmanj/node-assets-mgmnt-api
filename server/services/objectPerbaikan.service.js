const { Objectperbaikan } = require('../models/objectPerbaikan');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');

const addObjectPerbaikan = async objectName => {
  try {
    const objectPerbaikan = new Objectperbaikan({
      objectName: objectName,
    });
    await objectPerbaikan.save();
    return objectPerbaikan;
  } catch (error) {
    throw error;
  }
};

const getObjectPerbaikanById = async id => {
  try {
    const objectPerbaikan = await Objectperbaikan.findById(id);
    if (!objectPerbaikan) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Object Perbaikan Not Found');
    }
    return objectPerbaikan;
  } catch (error) {
    throw error;
  }
};

const deleteObjectPerbById = async id => {
  try {
    const objectPerbaikan = await Objectperbaikan.findByIdAndRemove(id);
    return objectPerbaikan;
  } catch (error) {
    throw error;
  }
};

const getAll = async args => {
  try {
    let order = args.order ? args.order : 'desc';
    let limit = args.limit ? args.limit : 5;

    const objectPerbaikans = await Objectperbaikan.find({})
      .sort([['_id', order]])
      .limit(limit);
    if (!objectPerbaikans) {
      throw new ApiError(httpStatus.NOT_FOUND, 'No brands found');
    }
    return objectPerbaikans;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addObjectPerbaikan,
  getObjectPerbaikanById,
  deleteObjectPerbById,
  getAll,
};
