const path = require("path")

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    pool: { /*executa no momento que exuta o banco de dados*/
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb) /*ativa o delete em cascata*/
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true
  }
};
