// const stations = [
//   {id: 0, location: 'Downtown'},
//   {id: 1, location: 'Elm Street'},
//   {id: 2, location: 'Forest Gardens'},
//   {id: 3, location: 'Annex'},
//   {id: 4, location: '10th Ave'},
//   {id: 5, location: 'Waterfront'},
//   {id: 6, location: 'Colosseum'},
//   {id: 7, location: 'Central Station'},
//   {id: 8, location: 'Parkside'},
//   {id: 9, location: 'Grand Boulevard'},
//   {id: 10, location: 'Monument Valley'},
//   {id: 11, location: 'Museum Isle'}
// ]

module.exports = class Passenger {
  constructor(options) {
    this.id = options.id || 0
    this.name = options.name || 'Jon Doe'
    this.ticket = options.ticket || null
    this.station = options.station || 'Downtown'
    this.train = options.train || null

    db.updatePassenger({
      id: this.id,
      name: this.name,
      ticket: this.ticket,
      station: this.station,
      train: this.train
    })
  }

  buyTicket(destination) {
    this.ticket = {
      destination: destination,
      used: false
    }

    db.updatePassenger({
      ticket: this.ticket
    })
  }

  useTicket() {
    this.ticket.used = true

    db.updatePassenger({
      ticket: this.ticket
    })
  }

  static find(identifier) {
    switch (Object.keys(identifier)[0]) {
      case id:
      case name:
        const passengerObject = db.getPassenger(identifier)
        return new Passenger(passengerObject)
        break;
      case id:
      case name:
        const passengerArray = db.getPassengers(identifier)
        return passengerArray.map(passengerObject => {
          return new Passenger(passengerObject)
        })
        break;
    }
  }

  delete() {
    db.deletePassenger({id: this.id})
  }
}
