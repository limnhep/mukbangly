const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database-postgres/index.js');
const controller = require('./controller.js');

const app = express();

app.use('/', express.static(path.join(__dirname, '../react-client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello Express');
});
app.get('/feed', controller.getFeed);
app.get('/feeds', controller.getFeeds);
app.get('/feed/:homepageId/comments', controller.getComments);
app.get('/users', controller.getUsers);
app.get('/comments', controller.getTotalComments);
app.get('/lastCommentId', controller.getLastCommentId);
app.post('/feed/:homepageId/comments/:commentId', controller.postComment);
app.patch('/feed/:homepageId/comment', controller.updateHeart);
app.delete('/feed/:homepageId/comment', controller.deleteComment);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});