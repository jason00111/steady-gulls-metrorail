exports.up = function(knex, Promise) {
  return knex.schema.createTable('stations', table => {
    table.integer('id')
    table.string('name')
    table.json('passengers')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stations')
};
