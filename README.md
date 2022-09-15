# Social Network API - NoSQL

## Description
* As a social media startup, an API for social network that uses a NoSQL database, so that website can handle large amounts of unstructured data.

## Table to contents

-[Description](#description)

-[Acceptance Criteria](#acceptance-criteria)

-[Installation Steps](#installation-steps)

-[Demo](#demo)

## Acceptance-criteria

* Given a Social network API,
* WHEN user enters gthe command to invoke the application (node server.js), THEN server is started and the Mongoose models are synced to the MongoDB database.
* When user open the API GET routes in Postman for users and thoughts, THEN the data for each of these routes is displayed in a formatted JSON.
* When user test API POST, PUT, DELETE routes in postman, THEN user will be able to successfully create, update and delete users and thoughts in database. 
* WHEN I test API POST and DELETE routes in postman, THEN user will be able to successfully create and delete reactions to thougghts and add/remove friends to a user's friend list.

## Installation steps

* install the following:
npm init ,
npm install express,
npm install mongoose,
mpm install mongoDb,
mpm install node

* To invoke, in terminal give command - node server.js 


## Demo
https://drive.google.com/file/d/1eJRZrS8V-gnIgeqvYM_h_KjoMOyM6iie/view

* additional  demo shows that explains below
- how thought id is removed from users collection, when thought is deleted
- how all associated thoughts are deleted when user is deleted
https://drive.google.com/file/d/1W0_rQg7IlzJL5SKNLCZhERb9UdWfNEDi/view


### Github URL: 

https://github.com/Sivaparam/social-network-api




