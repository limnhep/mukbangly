const client = require('../database-postgres/index.js');

const getFeeds = (req, res) => {

  const statement = `SELECT * FROM homepage limit 12`;
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
};

module.exports = {
  getFeeds
}