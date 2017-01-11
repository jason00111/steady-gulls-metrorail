const stations = [
  {id: 0, location: 'Downtown'},
  {id: 1, location: 'Elm Street'},
  {id: 2, location: 'Forest Gardens'},
  {id: 3, location: 'Annex'},
  {id: 4, location: '10th Ave'},
  {id: 5, location: 'Waterfront'},
  {id: 6, location: 'Colosseum'},
  {id: 7, location: 'Central Station'},
  {id: 8, location: 'Parkside'},
  {id: 9, location: 'Grand Boulevard'},
  {id: 10, location: 'Monument Valley'},
  {id: 11, location: 'Museum Isle'}
]

module.exports = class Stations{
  constructor(options){
    this.id = options.id
    this.passengers = options.passengers

    db.updateStation({
      id: this.id,
      passengers: this.passengers
    })
  }

  get location(){
    return station[this.index].location
  }

  getPreviousStation(){
    const previousIndex = ((this.index + stations.length - 1) % stations.length)
    const prevLocation = station[previousIndex].location
    const stationObject = db.getStation({location: nextLocation})
    return new Station(stationObject)
  }

  getNextStation(){
    const nextIndex = ((this.index + 1) % stations.length)
    const nextLocation = station[nextIndex].location
    const stationObject = db.getStation({location: nextLocation})
    return new Station(stationObject)
  }

  static find(indentifier){
    const stationObject = db.getStation(identifier)
    return new Station(stationObject)
  }

  delete(){
    db.deleteStation({id: this.id})
  }

}
