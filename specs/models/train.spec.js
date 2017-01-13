const test = require('tape')

const Train = require('../../models').Train

test('get the number of a particular train', (t) => {
  Train.find({ id: 0 }).then((train) => {
    t.equal(train.number, 0)
  })

  t.end()
})

test('get the capacity for passengers of a particular train', (t) => {
  Train.find({ id: 0 }).then((train) => {
    t.equal(train.capacity, 200)
  })

  t.end()
})

test.only('get the passengers of a particular train', (t) => {
  Train.find({ id: 0 }).then((train) => {
    t.equal(train.passengers[0].id, 0)
    t.equal(train.passengers[1].id, 1)
    t.equal(train.passengers[2].id, 2)
    t.equal(train.passengers[3].id, 3)

    t.equal(train.passengers[0].name, 'Cara')
    t.equal(train.passengers[1].name, 'Marlo')
    t.equal(train.passengers[2].name, 'Lester')
    t.equal(train.passengers[3].name, 'France')
    t.end()
  })
})

test('determine whether a particular train is full (at capacity) or not', (t) => {
  Train.find({ id: 0 }).then((train) => {
    t.equal(train.isFull(), false)
  })

  Train.find({ id: 1 }).then((train) => {
    t.equal(train.isFull(), true)
  })

  t.end()
})

test('determine the current station of a particular train', (t) => {
  Train.find({ id: 0 }).then((train) => {
    train.station.then(
      stationInstance => t.equal(stationInstance.location, 'Downtown'))
  })

  t.end()
})

test('determine the next station of a particular train', (t) => {
  Train.find({ id: 0 }).then((train) => {
    t.equal(train.nextStation.location, 'Elm Street')
  })


  t.end()
})

test('determine which train is arriving next at a particular station', (t) => {
  t.equal(Train.nextToArriveAt({ id: 2 }).id, 1)
  t.equal(Train.nextToArriveAt({ name: 'Forest Gardens' }).id, 1)

  t.end()
},
)

test('move a train to its next station', (t) => {
  Train.find({ id: 3 }).then((train) => {
    t.equal(train.station.location, 'Annex')

    train.moveToNextStation()

    t.equal(train.station.location, '10th Ave')
  })

  t.end()
})

test('offboard passengers whose destination is a train\'s current station', (t) => {
  t.end()
})

test('onboard passengers of a train at the current station', (t) => {
  t.end()
})

test('find a train by its number', (t) => {
  const myTrain = Train.find({ id: 0 })

  t.equal(myTrain.number, 0)

  t.end()
})

test('create a new train', (t) => {
  t.equal(Train.find({ id: 7 }), null)

  t.notEqual(Train.find({ id: 7 }), null)

  t.end()
})

test('save new trains to the database', (t) => {
  t.equal(Train.find({ id: 7 }), null)

  t.notEqual(Train.find({ id: 7 }), null)

  t.end()
})

test('update existing trains in the database', (t) => {
  const myTrain = Train.find({ id: 0 })

  t.equal(myTrain.capacity, 200)

  myTrain.capacity = 100

  t.equal(Train.find({ id: 0 }).capacity, 100)

  t.end()
})

test('delete a train from the database', (t) => {
  Train.find({ id: 0 }).then((train) => {
    t.notEqual(train, null)

    train.delete()

    Train.find({ id: 0 }).then((nullTrain) => {
      t.equal(nullTrain, null)
    })
  })

  t.end()
})
