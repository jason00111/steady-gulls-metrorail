
exports.up = (knex, Promise) => {
  return knex.schema.createTable('trains', table => {
    table.integer('id')
    table.integer('capacity')
    table.json('passengers')
    table.integer('stationIndex')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trains')
};
