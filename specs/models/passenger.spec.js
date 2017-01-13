const test = require('tape')
const {Passenger, Station, Train} = require('../../models')

test('get the ID of a particular passenger.', function(t) {
  Passenger.find({name: 'Cara'})
    .then(passengerInstance => {
      t.equal(passengerInstance.id, 0)
      t.end()
    })
}

test('get the name of a particular passenger.', function(t) {
  Passenger.find({id: 0})
    .then(passengerInstance => {
      t.equal(passengerInstance.name, 'Cara')
      t.end()
    })
}

test('get a particular passenger\'s ticket.', function(t) {
  Passenger.find({id: 0})
    .then(passengerInstance => {
      t.equal(passengerInstance.ticket.destination, 'Waterfront')
      t.end()
    })
}

test('set the current station of a particular passenger.', function(t) {
  Passenger.find({id: 0})
    .then(passengerInstance => {
      t.notEqual(passengerInstance.station.name, 'Waterfront')

      passengerInstance.station = Station.find({name: 'Waterfront'})

      t.equal(passengerInstance.station.name, 'Waterfront')
      t.end()
    })
}

test('buy a ticket for a particular passenger from their current station to another specified station.', function(t) {

  Passenger.find({id: 1})
    .then(passengerInstance => {
      t.equal(passengerInstance.ticket, null)

      passengerInstance.buyTicket(Station.find({name: 'Waterfront'}))

      t.equal(passengerInstance.ticket.destination, 'Waterfront')
      t.end()
    })
}

test('use a ticket for a particular passenger.', function(t) {
  Passenger.find({id: 2})
    .then(passengerInstance => {
      passengerInstance.buyTicket(Station.find({name: 'Waterfront'}))

      passengerInstance.useTicket()

      t.equal(passengerInstance.ticket, null)
      t.end()
    })
}

test('determine the current train for a particular passenger.', function(t) {
  Passenger.find({id: 3})
    .then(passengerInstance => {
      t.equal(passengerInstance.train.id, 0)
      t.end()
    })
}

test('determine the current station for a particular passenger.', function(t) {
  Passenger.find({id: 19})
    .then(passengerInstance => {
      t.equal(passengerInstance.station.name, 'Museum Isle')
      t.end()
    })
}

test('find a passenger by their ID.', function(t) {
  Passenger.find({id: 19})
    .then(passengerInstance => {
      t.equal(passengerInstance.name, 'Chadwick')
      t.end()
    })
}

test('find a passenger by their name.', function(t) {
  Passenger.find({name: 'Chadwick'})
    .then(passengerInstance => {
      t.equal(passengerInstance.id, 19)
      t.end()
    })
}

test('find all passengers at a station.', function(t) {
  Station.find({id: 11})
    .then(stationInstance => {
      Passenger.find(stationInstance)
        .then(passengerInstanceArray => {
          let passengerIdArray = passengerInstanceArray.map(
            passengerInstance => passengerInstance.id
          )

          t.true(passengerIdArray.includes(18))
          t.true(passengerIdArray.includes(19))
          t.end()
        })
    })
}

test('find all passengers on a train.', function(t) {
  Train.find({id: 1})
    .then(trainInstance => {
      Passenger.find(trainInstance)
        .then(passengerInstanceArray => {
          let passengerIdArray = passengerInstanceArray.map(
            passengerInstance => passengerInstance.id
          )

          t.true(passengerIdArray.includes(5))
          t.true(passengerIdArray.includes(6))
          t.true(passengerIdArray.includes(7))
          t.true(passengerIdArray.includes(8))
          t.true(passengerIdArray.includes(9))
          t.end()
        })
    })
}

test('create a new passenger.', function(t) {
  const newPassenger = new Passenger({id: 20, name: 'Henry'})

  t.equal(Passenger.find({id: 20}).name, 'Henry')

  t.end()
}

test('save new passengers to the database.', function(t) {
  const newPassenger = new Passenger({id: 20, name: 'Henry'})

  t.equal(Passenger.find({id: 20}).name, 'Henry')

  t.end()
}

test('update existing passengers in the database.', function(t) {
  Passenger.find({id: 12})
    .then(passengerInstance => {
      t.equal(passengerInstance.name, 'Rueben')
      passengerInstance.name = 'Pastrami'

      Passenger.find({id: 12})
        .then(newPassengerInstance => {
          t.equal(newPassengerInstance.name, 'Pastrami')
          t.end()
        })
    })
}

test('delete a passenger from the database.', function(t) {
  Passenger.find({id: 13})
    .then(passengerInstance => {
      t.equal(passengerInstance.name, 'Bridgette')
      passengerInstance.delete()

      Passenger.find({id: 13})
        .then(newPassengerInstance => {
          t.equal(newPassengerInstance, null)
          t.end()
        })
    })
}
