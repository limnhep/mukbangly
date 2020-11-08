const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const homepageDataGen = (startIndex, endIndex) => {

  const homepageData = [];

  for (let i = startIndex; i <= endIndex; i++) {

    const businessList = ['Chungchun Hotdogs', 'Buncker21', 'Flying Pa-Dak', 'Koko BBQ', 'Tang 88', 'The SmoKING Ribs', 'Grams BBQ', 'Kaju Tofu', 'Pho 45', 'Dry Noodle 168', 'Hue Oi', 'Tam Bien', 'Lien Hue', 'Bien Hen', 'Twinkle Boba', 'Sharetea', '7 Leaves Cafe', 'Kung Fu Tea', 'Gong Cha', 'Taste Tea Cafe', 'Tasty Noodle House', 'Ramen Zuru', 'Umaya Ramen', 'Tampopo', 'Niko Niko', 'Kabuki', 'Gyu-Kaku', 'Dip Shabu Shabu', 'Pepper Lunch', 'Yuzu Shabu', 'Geko Tei', 'Nine Seafood', 'Claws', 'Stinkin Crawfish', 'The Cajun Crab', 'Louisiana Chicken', 'Mezcalero', 'The Grasshopper', 'The Bamboo Club', 'NextDoor', 'District Wine', 'The Carvery', '555 East', 'King Fish House', 'The Crab Shack', 'Pier 76', 'Restauration', 'Simmzy', 'Crooked Duck', 'The Local Spot'];

    const userName = faker.internet.userName();
    const logoURL = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${i}a.jpg`;
    const photoURL1 = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${i}a.jpg`;
    const photoURL2 = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${i}b.jpg`;
    const photoURL3 = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${i}c.jpg`;
    const photoCaption = faker.lorem.sentence();
    const numOfReview = faker.random.number({ min: 3.5, max: 5, precision: .5 });


    const homepageEntry = {
      homepage_id: i,
      user_name: userName,
      business_name: businessList[i - 1],
      logo_url: logoURL,
      photo_url: `{${photoURL1}, ${photoURL2}, ${photoURL3}}`,
      photo_caption: photoCaption,
      user_comment: '',
      comment_icon: false,
      heart_icon: false,
      share_icon: false,
      num_review: numOfReview
    };
    homepageData.push(homepageEntry);
  };
  return homepageData;
};

const csvWriter = createCsvWriter({
  path: "./csv_file/homepage.csv",
  header: [
    { id: "homepage_id", title: "homepage_id" },
    { id: "user_name", title: "user_name" },
    { id: "business_name", title: "business_name" },
    { id: "logo_url", title: "logo_url" },
    { id: "photo_url", title: "photo_url" },
    { id: "photo_caption", title: "photo_caption" },
    { id: "user_comment", title: "user_comment" },
    { id: "comment_icon", title: "comment_icon" },
    { id: "heart_icon", title: "heart_icon" },
    { id: "share_icon", title: "share_icon" },
    { id: "num_review", title: "num_review" }
  ]
});


// startIndex and endIndex -> Must be from 1 to 50 due to photos URL constraints
const homepageData = homepageDataGen(1, 50);

csvWriter.writeRecords(homepageData)
  .then(() => {
    console.log("seedHomepage.js Seeded!");
  })
  .catch((error) => {
    console.log('Error Issues: ', error);
  });
