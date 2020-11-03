const client = require('../database-postgres/index.js');

const getFeeds = (req, res) => {

  const statement = `SELECT * FROM homepage LIMIT 12`;
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
};

const getFeed = (req, res) => {

  const { business_name } = req.query

  const statement = `SELECT * FROM homepage WHERE LOWER(business_name) ILIKE '%${business_name || ""}%' LIMIT 12`
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
}

module.exports = {
  getFeed,
  getFeeds
}