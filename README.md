# NASA Rover Interface


Overview
========
NASA just dropped yet another Rover on Mars: The Avi3000. Nasa now needs your help to develop an interface to help them display all the data that the Avi3000 is sending back.

NOTE: a Sol is a Martian day.

Setup
=====

`git fork` and `git clone` this repo onto your computer.

Run `npm install && npm start` in your terminal to start the React application.

DB
--
The API is implemented using `json-server`. The data is stored in the `db.json` file.

Run `json-server --watch db.json --port 4000` in your terminal to start the server on port 4000 (so you can run React on port 3000 simultaneously).

Endpoints:
1. GET /logs
2. GET /manifest


Deliverables
============

All the required components and styling have already been built by NASA.

Here's an example of how the finished product should look.

Deliverable #1
-------------
Render all the rover positions on the grid based on the coordinates fetched from the `/logs` endpoint regardless of where the slider is. Each cell should have a rover if the rover has an object with those x and y coordinates.

Deliverable 2
-------------
Refactor to display all the rover positions up to and including the selected sol day. The selected sol day is set by the slider. The min value of the slider should be 1 and the max value on the slider should be passed in from the `plannedSolDuration` attribute fetched from the `/manifest`.

For example, if the `plannedSolDuration` is 50 and you slide the slider halfway, then you should see rovers for cells for half of the locations provided.

Deliverable 3
-------------
As the slider moves, the Sol day and images in the `Sol` component should be moving with it. For example, if the slider is halfway on a 50 Sol timeline, then the image displayed should be the one associated with that object matching that Sol from the `/logs` and the Sol day displayed should be `Sol 25`. Furthermore, the Status and Camera should be reflected based on the object.
