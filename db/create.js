const knex = require('knex')({
  client: 'pg',
  host: ''
})

const database = process.env.NODE_ENV === 'production' ? 'MetroRail' : 'MetroRail-development'

knex.raw(`CREATE DATABASE IF NOT EXISTS ${database};`)
