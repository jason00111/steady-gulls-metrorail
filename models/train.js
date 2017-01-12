const db = require('../db').train

const stations = ['Downtown', 'Elm Street', 'Forest Gardens', 'Annex', '10th Ave', 'Waterfront', 'Colosseum', 'Central Station', 'Parkside', 'Grand Boulevard', 'Monument Valley', 'Museum Isle']

module.exports = class Train {
  constructor(options){
    this.id = options.id || 0
    this.capacity = options.capacity || 200
    this.passengers = options.passengers || []
    this.stationIndex = options.stationIndex || 0

    db.updateTrain({
      id: this.id,
      capacity: this.capacity,
      passengers: this.passengers,
      stationIndex: this.stationIndex
    })
  }

  get number() {
    return this.id
  }

  isFull() {
    return this.passengers.length >= this.capacity
  }

  moveToNextStation() {
    this.stationIndex = (this.stationIndex + 1) % stations.length

    db.updateTrain({stationIndex: this.stationIndex})
  }

  get station() {
    return stations[this.stationIndex]
  }

  get nextStation() {
    return stations[(this.stationIndex + 1) % stations.length]
  }

  offboard() {
    this.passengers = this.passengers.filter(passenger => {
      return passenger.destination !== this.stationIndex
    })

    db.updateTrain({passengers: this.passengers})
  }

  onboard() {
    let passengersAtCurrentStation = [{id:0}, {id:1}]

    const remainingCapacity = this.capacity - this.passengers.length

    const newPassengers = passengersAtCurrentStation.splice(0, remainingCapacity)

    this.passengers = this.passengers.concat(newPassengers)

    db.updateTrain({passengers: this.passengers})
  }

  delete() {
    // delete the instance???
    db.deleteTrain({id: this.id})
  }

  static find(trainNumber) {
    const trainObject = db.getTrainByNumber(trainNumber)
    return new Train(trainObject)
  }
}
