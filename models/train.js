const db = require('../db').train

const Station = require('./station')

const stations = ['Downtown', 'Elm Street', 'Forest Gardens', 'Annex', '10th Ave', 'Waterfront', 'Colosseum', 'Central Station', 'Parkside', 'Grand Boulevard', 'Monument Valley', 'Museum Isle']

module.exports = class Train {
  constructor(options){
    this.id = options.id || 0
    this._capacity = options.capacity || 200
    this._passengers = options.passengers || []
    this._stationIndex = options.stationIndex || 0

    db.updateTrain({
      id: this.id,
      capacity: this._capacity,
      passengers: this._passengers,
      stationIndex: this._stationIndex
    })
  }

  get capacity() {
    return this._capacity
  }

  get passengers() {
    return this._passengers
  }

  get stationIndex() {
    return this._stationIndex
  }

  set capacity (value) {
    this._capacity = value

    db.updateTrain({id: this.id, capacity: this._capacity})
  }

  set passengers (value) {
    this._passengers = value

    db.updateTrain({id: this.id, passengers: this._passengers})
  }

  set stationIndex (value) {
    this._stationIndex = value

    db.updateTrain({id: this.id, stationIndex: this._stationIndex})
  }

  get number() {
    return this.id
  }

  get station() {
    return Station.find({id: this.stationIndex})
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
    this.passengers = this.passengers.filter(passenger => {
      return passenger.destination !== this.stationIndex
    })
  }

  onboard() {
    let passengersAtCurrentStation = [{id:0}, {id:1}]

    const remainingCapacity = this.capacity - this.passengers.length

    const newPassengers = passengersAtCurrentStation.splice(0, remainingCapacity)

    this.passengers = this.passengers.concat(newPassengers)
  }

  delete() {
    db.deleteTrain({id: this.id})
  }

  static find(trainNumber) {
    const trainObject = db.getTrainByNumber(trainNumber)
    return new Train(trainObject)
  }
}
