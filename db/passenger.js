const knexconfig = require('../knexfile');
const knex = require('knex')(knexconfig[process.env.NODE_ENV])

function updatePassenger (options) {
  knex('passengers')
    .where('id', options.id)
    .then(result => {
      if(result.length === 0){
        return knex('passengers')
          .insert(options)
      } else{
        return knex('passengers').where('id', options.id).update(options)
      }
    }).catch(error => console.log('ERROR:', error))
}

function deletePassenger (options){
  knex('passengers')
    .where('id', options.id).del()
    .catch(error => console.log('ERROR:', error))
}

function getPassenger (options){
  return knex('passengers').where('id', options.id)
    .catch(error => console.log('ERROR:', error))
}

module.exports = { updatePassenger, deletePassenger, getPassenger }
