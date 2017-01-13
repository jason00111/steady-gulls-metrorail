exports.up = function (knex) {
  return knex.schema.createTable('passengers', (table) => {
    table.integer('id')
    table.string('name')
    table.json('ticket')
    table.integer('train')
    table.string('station')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('passengers')
}
