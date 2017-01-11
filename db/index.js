const {updateRecord, deleteRecord, getRecord} = require('./record')

module.exports = {
  passenger: {
    updatePassenger: updateRecord.bind(this, 'passengers'),
    deletePassenger: deleteRecord.bind(this, 'passengers'),
    getPassenger: getRecord.bind(this, 'passengers')
  },
  train: {
    updateTrain: updateRecord.bind(this, 'trains'),
    deleteTrain: deleteRecord.bind(this, 'trains'),
    getTrain: getRecord.bind(this, 'trains')
  },
  station: {
    updateStation: updateRecord.bind(this, 'stations'),
    deleteStation: deleteRecord.bind(this, 'stations'),
    getStation: getRecord.bind(this, 'stations')
  }
}
