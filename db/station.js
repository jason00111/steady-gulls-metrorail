const knexconfig = require('../knexfile');
const knex = require('knex')(knexconfig[process.env.NODE_ENV])

function updateStation (options) {
  knex('stations')
    .where('id', options.id)
    .then(result => {
      if(result.length === 0){
        return knex('stations')
          .insert(options)
      } else{
        return knex('stations').where('id', options.id).update(options)
      }
    }).catch(error => console.log('ERROR:', error))
}

function deleteStation (options){
  knex('stations')
    .where('id', options.id).del()
    .catch(error => console.log('ERROR:', error))
}

function getStation (options){
  return knex('stations').where('id', options.id)
    .catch(error => console.log('ERROR:', error))
}

module.exports = { updateStation, deleteStation, getStation }
