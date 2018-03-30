drop database if exists oauth_test;

create database oauth_test;

\connect oauth_test;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS facebook;
DROP TABLE IF EXISTS twitter;
DROP TABLE IF EXISTS google;

CREATE TABLE IF NOT EXISTS users (
    id              SERIAL,
    username        VARCHAR(100),
    password        VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS google (
    id              SERIAL,
    token           VARCHAR(100) NOT NULL,
    google_id       VARCHAR(100) UNIQUE,
    email           VARCHAR(100),
    name            VARCHAR(100),
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES users
    ON DELETE CASCADE
    ON UPDATE CASCADE
);