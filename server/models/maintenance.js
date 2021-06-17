const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const maintenanceSchema = mongoose.Schema({
  date: { type: Date, default: Date.now() },
  asset: {
    type: Schema.Types.ObjectId,
    ref: 'Asset',
    required: true,
  },
  detailPerbaikan: { type: Array, default: [] },
  pihakPelaksana: { type: String, default: 'Internal' }, //internal atau eksternal
  requestor: { type: String, default: '' },
  requestDate: { type: Date, default: Date.now() },
  approver: { type: String, default: '' },
  approveDate: { type: Date, default: Date.now() },
  followedUpBy: { type: String, default: '' },
  followedupDate: { type: Date, default: Date.now() },
  diserahkanBy: { type: String, default: '' },
  diserahkanDate: { type: Date, default: Date.now() },
  receivedBy: { type: String, default: '' },
  receivedDate: { type: Date, default: Date.now() },
});

maintenanceSchema.plugin(aggregatePaginate);

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);
module.exports = { Maintenance };
