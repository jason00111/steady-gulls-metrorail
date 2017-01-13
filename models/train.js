const db = require('../db')

const Station = require('./station')
const Passenger = require('./passenger')

const stations = [
  'Downtown', 'Elm Street', 'Forest Gardens', 'Annex', '10th Ave',
  'Waterfront', 'Colosseum', 'Central Station', 'Parkside', 'Grand Boulevard',
  'Monument Valley', 'Museum Isle',
]

module.exports = class Train {
  constructor(options) {
    this.id = options.id || 0
    this.__capacity__ = options.capacity || 200
    this.__passengers__ = options.passengers || []
    this.__stationIndex__ = options.stationIndex || 0

    db.train.updateTrain({
      id: this.id,
      capacity: this.__capacity__,
      passengers: this.__passengers__,
      stationIndex: this.__stationIndex__,
    })
  }

  get capacity() {
    return this.__capacity__
  }

  get passengers() {
    return db.passenger.getAllPassengers()
      .then(array =>
        array.map(passengerObject =>
          new Passenger(passengerObject)
        )
      )
  }

  get stationIndex() {
    return this.__stationIndex__
  }

  set capacity(value) {
    this.__capacity__ = value

    db.train.updateTrain({ id: this.id, capacity: this.__capacity__ })
  }

  set passengers(value) {
    this.__passengers__ = value

    db.train.updateTrain({ id: this.id, passengers: this.__passengers__ })
  }

  set stationIndex(value) {
    this.__stationIndex__ = value

    db.train.updateTrain({ id: this.id, stationIndex: this.__stationIndex__ })
  }

  get number() {
    return this.id
  }

  get station() {
    return Station.find({ id: this.stationIndex })
  }

  get nextStation() {
    return stations[(this.stationIndex + 1) % stations.length]
  }

  isFull() {
    return this.passengers.length >= this.capacity
  }

  moveToNextStation() {
    this.stationIndex = (this.stationIndex + 1) % stations.length
  }

  offboard() {
    this.passengers = this.passengers.filter(
      passenger => passenger.destination !== this.stationIndex
    )
  }

  onboard() {
    const passengersAtCurrentStation = [{ id: 0 }, { id: 1 }]

    const remainingCapacity = this.capacity - this.passengers.length

    const newPassengers = passengersAtCurrentStation
                            .splice(0, remainingCapacity)

    this.passengers = this.passengers.concat(newPassengers)
  }

  delete() {
    db.train.deleteTrain({ id: this.id })
  }

  static find(trainNumber) {
    return db.train.getTrain(trainNumber)
    .then(returnArray => new Train(Object.assign(
        {},
        returnArray[0],
        { passengers: returnArray[0].passengers.passengers }
      )))
  }

  static nextToArriveAt(station) {
    return db.train.getAllTrains()
  }
}
