module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'metrorail_development',
      host: '127.0.0.1'
    }
  },

  testing: {
    client: 'pg',
    connection: {
      database: 'metrorail_testing',
      host: '127.0.0.1'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'metrorail_production',
      host: '127.0.0.1'
    }
  }

};
