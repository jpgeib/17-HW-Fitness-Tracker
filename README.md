# HW 17 Fitness-Tracker

## Functionality

The fitnesss tracker assignment required creating an empty schema in MongoDB meant to contain data sent from the pre-made front-end to the back-end, and subsequently retrieve data from the back-end to be displayed on the front-end. From there, all that was needed was to wire up the back-end to the front-end utilizing html and api routes folders with express.

The application itself allows the user to track their exercises by entering in the following data:

- type
- name
- duration
- weight
- reps
- sets
- distance

(Data entered will vary depending on the exercise type selected.)

From there, the user will add the exercise to their log, which can then be viewed on the dashboard tab, detailing their exercise history for the past week.

## Technology Used

- HTML5
- Javascript
- MongoDB/Mongoose
- Express
- Morgan
- Node.js/Nodemon

## Running the App

In order to properly run the fitness tracker, make sure to install the following npms into the root folder:

```
npm i mongoose
npm i express
npm i morgan
```

Then, once everything is installed, in the root folder, enter:
```
node server.js
```
Or:
```
nodemon server.js