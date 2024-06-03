// knexfile.js

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/recipes.db'
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done); // Ensures foreign key constraints are enabled for SQLite
        }
      }
    }
  };
  