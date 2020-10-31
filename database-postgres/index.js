const { Client } = require('pg')
const client = new Client({
  host: 'localhost',
  user: 'mvp_user',
  password: 'hackreactor',
  database: 'live_streaming'
})

client
  .connect()
  .then(() => console.log('PostgreSQL is now connected'))
  .catch(err => console.error('connection error', err.stack))

module.exports = client;