const knex = require('knex')

function updateTrain (options) {
  knex('trains')
    .where('number', options.number)

  knex('trains')
    .where('number', options.number)
    .update(options)
}






module.exports = {updateTrain}

//
// deleteTrain
// getTrainByNumber //change to getTrain
