const test = require('tape')
const Train = require('../../models').Train

test('get the number of a particular train', function(t) {
  const myTrain = Train.find({id: 0})

  t.equal(myTrain.number, 0)

  t.end()
})

test('get the capacity for passengers of a particular train', function(t) {
  const myTrain = Train.find({id: 0})

  t.equal(myTrain.capacity, 200)

  t.end()
})

test('get the passengers of a particular train', function(t) {
  const myTrain = Train.find({id: 0})

  t.deepEqual(myTrain.passengers, [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}])

  t.end()
})

test('determine whether a particular train is full (at capacity) or not', function(t) {

  const myTrain = Train.find({id: 0})
  const myFullTrain = Train.find({id: 1})

  t.equal(myTrain.isFull(), false)
  t.equal(myFullTrain.isFull(), true)

  t.end()
})

test('determine the current station of a particular train', function(t) {
  const myTrain = Train.find({id: 0})

  myTrain.station.then(
    stationInstance => t.equal(stationInstance.location, 'Downtown'))

  t.equal(myTrain.station.location, 'Downtown')

  t.end()
})

test('determine the next station of a particular train', function(t) {
  const myTrain = Train.find({id: 0})

  t.equal(myTrain.nextStation.location, 'Elm Street')

  t.end()
})

test('determine which train is arriving next at a particular station',
  function(t) {
    t.equal(Train.nextArrivalAt({id: 2}).id, 1)
    t.equal(Train.nextArrivalAt({name: 'Forest Gardens'}).id, 1)

    t.end()
  }
)

test('move a train to its next station', function(t) {
  const myTrain = Train.find({id: 3})

  t.equal(myTrain.station, 'Annex')

  myTrain.moveToNextStation()

  t.equal(myTrain.station, '10th Ave')

  t.end()
})

test('offboard passengers whose destination is a train\'s current station', function(t) {

  t.end()
})

test('onboard passengers of a train at the current station', function(t) {

  t.end()
})

test('find a train by its number', function(t) {
  const myTrain = Train.find({id: 0})

  t.equal(myTrain.number, 0)

  t.end()
})

test('create a new train', function(t) {
  t.equal(Train.find({id: 7}), null)

  const myTrain = new Train({id: 7})

  t.notEqual(Train.find({id: 7}), null)

  t.end()
})

test('save new trains to the database', function(t) {
  t.equal(Train.find({id: 7}), null)

  const myTrain = new Train({id: 7})

  t.notEqual(Train.find({id: 7}), null)

  t.end()
})

test('update existing trains in the database', function(t) {
  const myTrain = Train.find({id: 0})

  t.equal(myTrain.capacity, 200)

  myTrain.capacity = 100

  t.equal(Train.find({id: 0}).capacity, 100)

  t.end()
})

test('delete a train from the database', function(t) {
  const myTrain = Train.find({id: 0})

  t.notEqual(Train.find({id: 0}), null)

  myTrain.delete()

  t.equal(Train.find({id: 0}), null)

  t.end()
})
