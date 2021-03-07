-- The following user and database should be created before runing the sql script.

-- -- create messenger_user, password is 123456
-- create user messenger_admin
-- with password '123456';

-- -- create database named messenger;
-- CREATE DATABASE messenger with owner
-- messenger_admin;

-- ------------------------------------------------------------------------

-- Use the following command to run the initialization sql script:
-- psql -h localhost -d messenger -U messenger_admin -f [rootpath]/server/public/scripts/database.init.sql;
-- where, [rootpath] is the root directory of the messenger project

-- create schemas
CREATE SCHEMA
IF NOT EXISTS users;
CREATE SCHEMA
IF NOT EXISTS messenger;

-- create table users
CREATE TABLE users.users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR
    (50) NOT NULL,
    email VARCHAR
    (50) NOT NULL UNIQUE,
    passwd VARCHAR
    (255) NOT NULL,
    createdat TIMESTAMP not null,
    updatedat TIMESTAMP not null
);