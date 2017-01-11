const stations = ['Downtown', 'Elm Street', 'Forest Gardens', 'Annex', '10th Ave', 'Waterfront', 'Colosseum', 'Central Station', 'Parkside', 'Grand Boulevard', 'Monument Valley', 'Museum Isle']

export default class Train {
  constructor(options){
    this.number = options.number || 0
    this.capacity = options.capacity || 200
    this.passengers = options.passengers || [{id: 00, destination: 3}]
    this.currentStationIndex = options.currentStationIndex || 0

    db.updateTrain({
      number: this.number,
      capacity: this.capacity,
      passengers: this.passengers,
      currentStationIndex: this.currentStationIndex
    })
  }

  isFull() {
    return this.passengers.length >= this.capacity
  }

  moveToNextStation() {
    this.currentStationIndex = (this.currentStationIndex + 1) % stations.length

    db.updateTrain({currentStationIndex: this.currentStationIndex})
  }

  get currentStation() {
    return stations[this.currentStationIndex]
  }

  get nextStation() {
    return stations[(this.currentStationIndex + 1) % stations.length]
  }

  offboard() {
    this.passengers = this.passengers.filter(passenger => {
      return passenger.destination !== this.currentStationIndex
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
    db.deleteTrain({number: this.number})
  }

  static find(trainNumber) {
    const trainObject = db.getTrainByNumber(trainNumber)
    return new Train(trainObject)
  }


}
