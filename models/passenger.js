const db = require('../db.passenger')

module.exports = class Passenger {
  constructor(options) {
    this.id = options.id || 0
    this.name = options.name || 'Jon Doe'
    this.ticket = options.ticket || null
    this.station = options.station || 'Downtown'
    this.train = options.train || null

    db.passenger.updatePassenger({
      id: this.id,
      name: this.name,
      ticket: this.ticket,
      station: this.station,
      train: this.train,
    })
  }

  buyTicket(destination) {
    this.ticket = {
      destination,
      used: false,
    }

    db.passenger.updatePassenger({
      ticket: this.ticket,
    })
  }

  useTicket() {
    this.ticket.used = true

    db.passenger.updatePassenger({
      ticket: this.ticket,
    })
  }

  static find(identifier) {
    return switch (Object.keys(identifier)[0]) {
      case 'id':
      case 'name': {
        const passengerObject = db.passenger.getPassenger(identifier)
        return new Passenger(passengerObject)
        break
      }
      case 'id':
      case 'name': {
        const passengerArray = db.passenger.getPassengers(identifier)
        return passengerArray.map(passengerObject => new Passenger(passengerObject))
        break
      }
      default:
        return null
    }
  }

  delete() {
    db.passenger.deletePassenger({ id: this.id })
  }
}
