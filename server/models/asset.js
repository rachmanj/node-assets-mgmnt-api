const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const assetSchema = mongoose.Schema({
  assetName: {
    type: String,
    unique: 1,
    maxlength: 200,
    required: [true, 'This field is required'],
  },
  category: {
    //peralatan, kendaraan, bangunan
    type: String,
    default: '',
  },
});

assetSchema.plugin(aggregatePaginate);

const Asset = mongoose.model('Asset', assetSchema);
module.exports = { Asset };
