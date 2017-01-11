// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'metrorail_development',
      host: '127.0.0.1'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'metrorail_development',
      host: '127.0.0.1'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'metrorail_development',
      host: '127.0.0.1'
    }
  }

};
