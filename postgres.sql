-- Setting up Postgres Schema for a A Live Streaming Food Discovery Page

DROP DATABASE IF EXISTS live_streaming;

CREATE DATABASE live_streaming;

\c live_streaming;

-- CREATE TABLE navigation (
--   navigation_id SERIAL PRIMARY KEY,
--   logo_url logo
-- );

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

-- navigation_id int NOT NULL REFERENCES navigation(navigation_id),
-- CREATE TABLE live (
--   live_id SERIAL PRIMARY KEY,
--   user_name varchar(50),
--   logo_url text,
--   navigation_id int NOT NULL REFERENCES navigation(navigation_id),
--   homepage_id int NOT NULL REFERENCES homepage(homepage_id),
--   PRIMARY KEY (live_id)
-- );

COPY homepage (homepage_id, user_name, business_name, logo_url, photo_url, photo_caption, user_comment, comment_icon, heart_icon, share_icon, num_review) FROM '/Users/limnhep/Desktop/1. SEI Aug Immersive/MVP/hrsf130-mvp/database-postgres/csv_file/homepage.csv' WITH CSV HEADER DELIMITER ',';
