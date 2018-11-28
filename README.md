# NASA Rover Interface

![alt main](https://cdn-images-1.medium.com/max/2000/1*BnjGd8N6zu9-Fe6stEJDEg.png)


Overview
========
NASA just dropped yet another Rover on Mars: The Avi3000. But it needs your help to create an interface to help manage all the data it's sending back. Your job will be to build an interface to display the locations the Rover has visited as well as information about each place.

NOTE: a Sol is a Martian day.

![alt map](https://i.imgur.com/mPo0UYQ.png)

Setup
=====

`git fork` and `git clone` this repo onto your computer.

Run `npm install && npm start` in your terminal to start the React application.

DB
--
The database is based on a db.json file in the repo. There will be no Posts or Patches, only Get requests.

Run `json-server --watch db.json --port 4000` in your terminal to start the server on port 4000 (so you can run React on port 3000 simultaneously).

Endpoints:
1. GET /logs
2. GET /manifest


Deliverables
============

The components and styling have already been given to you. It'll be your job to import the components in the right order to build the component tree correctly and add most of the logic. Any conditional styling will be given via changing classNames. For example, if styling on a button should be changed based on a click, you'll be given two classNames to swap in depending on what the current status of that button is.

Here's an example of how the finished product should look.

Deliverable 1
-------------
Build the component tree. The interface should be composed of the three containers given to you. Make sure you render them in the right places on the screen. Each container should render the appropriate components. See the image above for an example of what it should look like.

Render all the rover positions on the grid based on the coordinates fetched from the `/logs` endpoint regardless of where the slider is. Each cell should have a rover if the rover has an object with those x and y coordinates.

Deliverable 2
-------------
Refactor to have the slider show all log positions up until the position of the slider. The min value of the slider should be 1 and the max value on the slider should be passed in from the `plannedSolDuration` attribute fetched from the `/manifest`.

For example, if the `plannedSolDuration` is 50 and you slide the slider halfway, then you should see rovers for cells for half of the locations provided.

Deliverable 3
-------------
As the slider moves, the Sol day and images in the `Sol` component should be moving with it. For example, if the slider is halfway on a 50 Sol timeline, then the image displayed should be the one associated with that object matching that Sol from the `/logs` and the Sol day displayed should be `Sol 25`. Furthermore, the Status and Camera should be reflected based on the object.
