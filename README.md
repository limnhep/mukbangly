# **Mukbangly - An Asian Fusion Food Discovery App**

## **About** ##

Mukbangly is a PERN full-stack application. This app was created with the intention to help others discover local Asian fusion food. It also allows users to comment, like, and share their favorite restaurants.

## **Table of Contents**

- [Client Demo](#demo)
- [Getting Started](#development)
- [Getting Deployed](#usage)
- [Database Schema Design](#PostgreSQL)

## **Demo**

<p align="center">
<img src="https://media.giphy.com/media/6XCLT3mz5EpdgKy7Iz/giphy.gif" width="50%"></p>

<p align="center">
<img src="https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/static-images/mukbangly-img2.png" width="50%"></p>

<p align="center">
<img src="https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/static-images/mukbangly-img1.png" width="50%"></p>

## **Technologies / Frameworks Used** ##

- PostgreSQL
- Express.js
- React
- Node.js
- Styled Components

## **Development**

Install the dependencies by running `npm install --save` at the root directory.

## **Usage**

To deploy, run `npm start` and `npm run react-dev`. Run locally on [http://localhost:3000](http://localhost:3000) on your local browser to view the app.

## **Database Schema Design**

### **PostgreSQL**:

```
CREATE DATABASE live_streaming;

\c live_streaming;

CREATE TABLE navigation (
  navigation_id SERIAL PRIMARY KEY,
  logo_url logo
);

CREATE TABLE homepage (
  homepage_id SERIAL PRIMARY KEY,
  user_name varchar(50) NOT NULL,
  business_name varchar(100) NOT NULL,
  logo_url text,
  photo_url text [],
  photo_caption varchar(150) NOT NULL,
  user_comment varchar(150),
  comment_icon boolean NOT NULL,
  heart_icon boolean NOT NULL,
  share_icon boolean NOT NULL,
  num_review varchar(5) NOT NULL
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name varchar(50) NOT NULL,
  homepage_id int NOT NULL REFERENCES homepage(homepage_id)
);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  user_comment varchar(150) NOT NULL,
  heart_comment boolean NOT NULL,
  delete_comment boolean NOT NULL,
  user_id int NOT NULL REFERENCES users(user_id),
  homepage_id int NOT NULL REFERENCES homepage(homepage_id)
);

CREATE TABLE live (
  live_id SERIAL PRIMARY KEY,
  user_name varchar(50),
  logo_url text,
  navigation_id int NOT NULL REFERENCES navigation(navigation_id),
  homepage_id int NOT NULL REFERENCES homepage(homepage_id),
  PRIMARY KEY (live_id)
);
```


