const knexconfig = require('../knexfile');
const knex = require('knex')(knexconfig[process.env.NODE_ENV])

function updateRecord (tableName, options) {
  knex(tableName)
    .where('id', options.id)
    .then(result => {
      if(result.length === 0){
        return knex(tableName)
          .insert(options)
      } else{
        return knex(tableName).where('id', options.id).update(options)
      }
    }).catch(error => console.log('ERROR:', error))
}

function deleteRecord (tableName, options){
  knex(tableName)
    .where('id', options.id).del()
    .catch(error => console.log('ERROR:', error))
}

function getRecord (tableName, options){
  return knex(tableName).where('id', options.id)
    .catch(error => console.log('ERROR:', error))
}

module.exports = { updateRecord, deleteRecord, getRecord }
