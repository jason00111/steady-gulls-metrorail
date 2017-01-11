
exports.up = function(knex, Promise) {
  return knex.schema.createTable('passengers', table => {
    table.integer('id')
    table.string('name')
    table.json('ticket')
    table.integer('train')
    table.string('station')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.drioTable('passengers')
};
