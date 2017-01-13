const db = require('../db').station

const stations = [
  { id: 0, location: 'Downtown' },
  { id: 1, location: 'Elm Street' },
  { id: 2, location: 'Forest Gardens' },
  { id: 3, location: 'Annex' },
  { id: 4, location: '10th Ave' },
  { id: 5, location: 'Waterfront' },
  { id: 6, location: 'Colosseum' },
  { id: 7, location: 'Central Station' },
  { id: 8, location: 'Parkside' },
  { id: 9, location: 'Grand Boulevard' },
  { id: 10, location: 'Monument Valley' },
  { id: 11, location: 'Museum Isle' },
]

module.exports = class Station {
  constructor(options) {
    this.id = options.id
    this.passengers = options.passengers || []

    db.updateStation({
      id: this.id,
      passengers: this.passengers,
    })
  }

  get location() {
    return stations[this.id].location
  }

  getPreviousStation() {
    const previousIndex = ((this.id + (stations.length - 1)) % stations.length)
    return db.getStation({ id: previousIndex })
    .catch(error => console.log('db call error', error))
  }

  getNextStation() {
    const nextIndex = ((this.id + 1) % stations.length)
    const stationObject = db.getStation({ id: nextIndex })
    return new Station(stationObject)
  }

  static find(identifier) {
    return db.getStation(identifier)
      .then(stationObject => new Station(stationObject))
  }

  delete() {
    db.deleteStation({ id: this.id })
  }

}
