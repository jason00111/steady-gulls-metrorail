const knexconfig = require('../knexfile');
const knex = require('knex')(knexconfig[process.env.NODE_ENV])

function updateTrain (options) {
  knex('trains')
    .where('number', options.number)
    .then(result => {
      if(result.length === 0){
        return knex('trains')
          .insert(options)
      } else{
        return knex('trains').where('number', options.number).update(options)
      }
    }).catch(error => console.log('ERROR:', error))
}

function deleteTrain (options){
  knex('trains')
    .where('number', options.number).del()
    .catch(error => console.log('ERROR:', error))
}

function getTrain (options){
  return knex('trains').where('number', options.number)
    .catch(error => console.log('ERROR:', error))
}

module.exports = { updateTrain, deleteTrain, getTrain }
