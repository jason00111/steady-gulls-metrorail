const test = require('tape')
const Station = require('../../models').Station

test('get the ID of a particular station.', function(t) {
  Station.find({location: 'Downtown'})
    .then(stationInstance => {
      t.equal(stationInstance.id, 0)
      t.end()
    })
})

test('get the location of a particular station.', function(t) {
  Station.find({id: 0})
    .then(stationInstance => {
      t.equal(stationInstance.location, 'Downtown')
      t.end()
    })
})

test('get the passengers waiting for a train at a particular station.', function(t) {
  Station.find({id: 11})
    .then(stationInstanceArray => {
      let passengerIds = stationInstanceArray.passengers.map(
        stationInstance => stationInstance.id
      )

      t.true(passengerIds.includes(18))
      t.true(passengerIds.includes(19))
      t.end()
    })
})

test('get the passengers who have tickets at a particular station.', function(t) {
  Station.find({id: 11})
    .then(stationInstanceArray => {
      let passengerIds = stationInstanceArray.passengers.map(
        stationInstance => stationInstance.id
      )

      t.true(passengerIds.includes(18))
      t.true(passengerIds.includes(19))
      t.end()
    })
})

test('get the previous station on the line for a particular station.', function(t) {
  Station.find({id: 11})
    .then(stationInstance => {
      t.equal(stationInstance.previousStation.id, 10)
      t.end()
    }
})

test('get the next station on the line for a particular station.', function(t) {
  Station.find({id: 11})
    .then(stationInstance => {
      t.equal(stationInstance.nextStation.id, 0)
      t.end()
    }
})

test('determine which is the next train arriving at a particular station.', function(t) {
  Station.find({id: 11})
    .then(stationInstance => {
      t.equal(stationInstance.nextTrain.id, 3)
      t.end()
    }
})

test('find a station by its ID.', function(t) {
  Station.find({id: 0})
    .then(stationInstance => {
      t.equal(stationInstance.location, 'Downtown')
      t.end()
    })
})

test('find a station by its location.', function(t) {
  Station.find({location: 'Downtown'})
    .then(stationInstance => {
      t.equal(stationInstance.id, 0)
      t.end()
    })
})

test('create a new station.', function(t) {
  const newStation = new Station({id: 12, location: 'Oakland'})

  Station.find({location: 'Oakland'})
    .then(stationInstance => {
      t.equal(stationInstance.id, 12)
      t.end()
    })
})

test('save new stations to the database.', function(t) {
  const newStation = new Station({id: 12, location: 'Oakland'})

  Station.find({location: 'Oakland'})
    .then(stationInstance => {
      t.equal(stationInstance.id, 12)
      t.end()
    })
})

test('update existing stations in the database.', function(t) {
  Station.find({id: 0})
    .then(stationInstance => {
      stationInstance.location = 'San Francisco'
    })
    .then(() => {
      Station.find({id: 0})
        .then(otherStationInstance => {
          t.equal(otherStationInstance.location, 'San Francisco')
          t.end()
        })
    })


})

test('delete a station from the database.', function(t) {
  Station.find({id: 0})
    .then(stationInstance => {
      t.equal(stationInstance.id, 0)

      stationInstance.delete()
    })
    .then(() => {
      Station.find({id: 0})
        .then(otherStationInstance => {
          t.equal(otherStationInstance, null)
        })
    })
})
