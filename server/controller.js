const client = require('../database-postgres/index.js');

const getFeeds = (req, res) => {

  const statement = `SELECT * FROM homepage LIMIT 12;`
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

  const statement = `SELECT * FROM homepage WHERE LOWER(business_name) ILIKE '%${business_name || ""}%' LIMIT 12;`
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
}

const getComments = (req, res) => {

  const homepageId = req.params.homepageId;

  const statement = `SELECT u.user_id, u.user_name, u.homepage_id, c.comment_id, c.user_comment, c.heart_comment, c.delete_comment, c.user_id commentuserid, c.homepage_id commenthomepageid FROM users u JOIN comments c ON u.user_id=c.user_id WHERE c.homepage_id=${homepageId};`
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
}

const getUsers = (req, res) => {

  const statement = `SELECT * FROM users ORDER BY 1;`
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
};

const postComment = (req, res) => {
  console.log('postcomment')
  const { comment_id, user_comment, heart_comment, delete_comment, user_id } = req.body;
  const { homepageId, commentId } = req.params;

  const statement = `INSERT INTO comments(comment_id, user_comment, heart_comment, delete_comment, user_id, homepage_id) VALUES (${commentId},'${user_comment}', '${heart_comment}', '${delete_comment}', ${user_id}, ${homepageId})`
  client
    .query(statement)
    .then(response => {
      console.log(response)
      res.status(200).send('Success')
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
};

const getTotalComments = (req, res) => {

  const statement = `SELECT * FROM comments ORDER BY 1;`
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows)
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
};

const getLastCommentId = (req, res) => {

  const statement = `SELECT comment_id FROM comments WHERE comment_id=(
    SELECT MAX(comment_id) FROM comments);`
  client
    .query(statement)
    .then(response => {
      res.status(200).send(response.rows[0])
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
};

const updateHeart = (req, res) => {

  const { homepageId } = req.params;
  const { heart_comment, comment_id } = req.body;

  const statement = `UPDATE comments SET heart_comment=${heart_comment} WHERE homepage_id=${homepageId} AND comment_id=${comment_id};`
  client
    .query(statement)
    .then(response => {
      res.status(200).send("Success")
    })
    .catch(error => {
      res.status(400).send(error.stack)
    })
}

const deleteComment = (req, res) => {

  const { homepageId } = req.params;
  const { comment_id } = req.body;

  const statement = `DELETE FROM comments WHERE homepage_id=${homepageId} AND comment_id=${comment_id};`
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
  getFeeds,
  getComments,
  getUsers,
  getTotalComments,
  getLastCommentId,
  postComment,
  deleteComment,
  updateHeart
}