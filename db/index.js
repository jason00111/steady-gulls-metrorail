const { updateRecord, deleteRecord, getRecord, getAllRecords } = require('./record')

module.exports = {
  passenger: {
    updatePassenger: updateRecord.bind(null, 'passengers'),
    deletePassenger: deleteRecord.bind(null, 'passengers'),
    getPassenger: getRecord.bind(null, 'passengers'),
    getAllPassengers: getAllRecords.bind(null, 'passengers'),
  },
  train: {
    updateTrain: updateRecord.bind(null, 'trains'),
    deleteTrain: deleteRecord.bind(null, 'trains'),
    getTrain: getRecord.bind(null, 'trains'),
    getAllTrains: getAllRecords.bind(null, 'trains'),
  },
  station: {
    updateStation: updateRecord.bind(null, 'stations'),
    deleteStation: deleteRecord.bind(null, 'stations'),
    getStation: getRecord.bind(null, 'stations'),
    getAllStations: getAllRecords.bind(null, 'stations'),
  },
}
