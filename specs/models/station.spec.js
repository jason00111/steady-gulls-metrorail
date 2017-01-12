const test = require('tape')
const Station = require('../../models').Station

test('get the ID of a particular station.', function(t) {
  const myStation = Station.find({id: 0})

  t.equal(myStation.id, 0)
})

test('get the location of a particular station.', function(t) {
  const myStation = Station.find({id: 0})

  t.equal(myStation.location, 'Downtown')
})

test('get the passengers waiting for a train at a particular station.', function(t) {

})

test('get the passengers who have tickets at a particular station.', function(t) {

})

test('get the previous station on the line for a particular station.', function(t) {

})

test('get the next station on the line for a particular station.', function(t) {

})

test('determine which is the next train arriving at a particular station.', function(t) {

})

test('find a station by its ID.', function(t) {

})

test('find a station by its location.', function(t) {

})

test('create a new station.', function(t) {

})

test('save new stations to the database.', function(t) {

})

test('update existing stations in the database.', function(t) {

})

test('delete a station from the database.', function(t) {

})
