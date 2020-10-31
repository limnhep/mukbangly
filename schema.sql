-- Setting Postgres Schema for a Food Live Streaming service application

DROP DATABASE IF EXISTS live_streaming;

CREATE DATABASE live_streaming;

USE live_streaming;

CREATE TABLE navigation (
  navigation_id int NOT NULL AUTO_INCREMENT,
  logo_url logo,
  PRIMARY KEY(navigation_id)
);

CREATE TABLE homepage (
  homepage_id int NOT NULL AUTO_INCREMENT,
  user_name varchar(50) NOT NULL
  logo_url text,
  photo_url text,
  photo_caption varchar(150) NOT NULL,
  user_comment varchar(150) NOT NULL,
  heart_icon boolean NOT NULL,
  share_icon boolean NOT NULL,
  navigation_id int NOT NULL REFERENCES navigation(navigation_id),
  PRIMARY KEY (homepage_id)
);

CREATE TABLE live (
  live_id int NOT NULL AUTO_INCREMENT,
  user_name varchar(50),
  logo_url text,
  navigation_id int NOT NULL REFERENCES navigation(navigation_id),
  homepage_id int NOT NULL REFERENCES homepage(homepage_id),
  PRIMARY KEY (live_id)
);

