-- The following user and database should be created before runing the sql script.

-- -- create messenger_user, password is 123456
-- create user messenger_admin
-- with password '123456';

-- -- create database named messenger;
-- CREATE DATABASE messenger with owner
-- messenger_admin;

-- ------------------------------------------------------------------------

-- Use the following command to run the initialization sql script:
-- psql -h localhost -d messenger -U messenger_admin -f [rootpath]/server/config/scripts/database.init.sql;
-- where, [rootpath] is the root directory of the messenger project

-- create schemas
CREATE SCHEMA
IF NOT EXISTS users;
CREATE SCHEMA
IF NOT EXISTS messages;

-- create table users
CREATE TABLE
IF NOT EXISTS users.users
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

-- create table contacts
CREATE TABLE
IF NOT EXISTS users.contacts
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER not null,
    contact_user_id INTEGER not null,
    contact_status INTEGER not null,
    createdat TIMESTAMP not null,
    updatedat TIMESTAMP not null
);

-- create table messages
CREATE TABLE
IF NOT EXISTS messages.messages
(
    id SERIAL PRIMARY KEY,
    from_user_id INTEGER not null,
    to_user_id INTEGER not null,
    message_type INTEGER not null,
    content  TEXT,
    createdat TIMESTAMP not null,
    updatedat TIMESTAMP not null
);