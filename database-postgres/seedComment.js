const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const commentDataGen = (start, end) => {

  const commentData = [];

  for (let i = start; i <= end; i++) {

    userComment = faker.lorem.sentence();
    userId = faker.random.number({ min: 1, max: 75 });
    homepageId = faker.random.number({ min: 1, max: 50 });

    const commentEntry = {
      comment_id: i,
      user_comment: userComment,
      heart_comment: false,
      delete_comment: false,
      user_id: userId,
      homepage_id: homepageId
    }
    commentData.push(commentEntry);
  }
  return commentData;
};

const csvWriter = createCsvWriter({
  path: "./csv_file/comment.csv",
  header: [
    { id: "comment_id", title: "comment_id" },
    { id: "user_comment", title: "user_comment" },
    { id: "heart_comment", title: "heart_comment" },
    { id: "delete_comment", title: "delete_comment" },
    { id: "user_id", title: "user_id" },
    { id: "homepage_id", title: "homepage_id" }
  ]
});

const commentData = commentDataGen(1, 150);

csvWriter.writeRecords(commentData)
  .then(() => {
    console.log("seedComment.js Seeded!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });