const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const userDataGen = (start, end) => {

  const userData = [];

  for (let i = start; i <= end; i++) {

    const userName = faker.internet.userName();
    const homepageId = faker.random.number({ min: 1, max: 50 });

    const userEntry = {
      user_id: i,
      user_name: userName,
      homepage_id: homepageId
    };
    userData.push(userEntry);
  };
  return userData;
};

const csvWriter = createCsvWriter({
  path: "./csv_file/user.csv",
  header: [
    { id: "user_id", title: "user_id" },
    { id: "user_name", title: "user_name" },
    { id: "homepage_id", title: "homepage_id" }
  ]
});

const userData = userDataGen(1, 75);

csvWriter.writeRecords(userData)
  .then(() => {
    console.log("seedUser.js Seeded!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });
