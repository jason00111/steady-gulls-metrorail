updateTrain(options){
  knex('trains')
    .where('number', options.number)
    .update(options)
}


deleteTrain
getTrainByNumber //change to getTrain
