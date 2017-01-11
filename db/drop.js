const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1'
  }
})

const environment = process.env.NODE_ENV
console.log(environment);
const database = `metrorail_${environment}`
console.log(database);

knex.raw(`DROP DATABASE IF EXISTS ${database};`).catch(error => console.log(error)).then( process.exit )
