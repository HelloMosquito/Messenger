In the following guide, [rootpath] is the root directory of Messenger project.

# Database initialization

1. Create admin for database "messenger":
   CREATE USER messenger_admin with password '123456';

2. Create postgresql database named "messenger":
   CREATE DATABASE messenger with owner messenger_admin;

3. Initialize db with database.init.sql:
   psql -h localhost -d messenger -U messenger_admin -f [rootpath]/server/public/scripts/database.init.sql;

4. Enter the password of messenger_admin:
   123456

5. PostgreSQL messenger database initialization finished.

# Express Starter

This starter repo will be used for building applications using React, Material-UI, React-Router, Node, & Express.js.

1. Start server:
   Change current directory path to [rootpath]/server, use command "npm run start" to start the server
2. Start client:
   Open another terminal, change the current directory path to [rootpath]/client, use command "npm run start" to start the client

## Getting started

The project is broken down into a client and server folder.
