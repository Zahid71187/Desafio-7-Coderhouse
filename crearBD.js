let knex

    knex = require('knex')({
        client: 'mysql',
        connection: {
            host: 'localhost',
            user : 'root',
            password: '12345',
            database: 'Productos'
        }
    })

    knex.schema.createTable('productos', table => {
        table.increments('id').primary()
        table.string('title', 100).notNullable()
        table.float('price').notNullable()
        table.string('thumbnail', 500).notNullable()

    }).then(() => console.log('Tabla creada'))
    .catch(err => console.log('Error: ', err))
    .finally(() => knex.destroy())


    knex = require('knex')({
        client: 'sqlite3',
        connection: { filename: './chatDB.sqlite' },
      })

knex.schema.createTable('mensajes', table => {
    table.increments('id').primary()
    table.string('autor', 100).notNullable()
    table.text('texto').notNullable()
    table.date('fyh').notNullable()

}).then(() => console.log('Tabla creada'))
  .catch(err => console.log('Error: ', err))
  .finally(() => knex.destroy())

