const knexconfig = require('../knexfile');
const knex = require('knex')(knexconfig[process.env.NODE_ENV])
console.log(knexconfig);


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
    }).catch(error => console.log('ERROR!!!!>>>>!!!!>>>!>!>!>!>', error))
}

function deleteTrain (options){
  knex('trains')
    .where('number', options.number).del()
      .catch(error => console.log(error))
}

function getTrainByNumber (options){
  return knex('trains').where('number', options.number)
}

module.exports = { updateTrain, deleteTrain, getTrainByNumber }

//
//
// getTrainByNumber //change to getTrain
