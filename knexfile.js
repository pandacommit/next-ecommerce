// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/db.sqlite',
    },
    migrations: {
      directory: './db/migrations',
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './db/test.sqlite',
    },
    migrations: {
      directory: './db/migrations',
    },
    useNullAsDefault: true,
  },
};
