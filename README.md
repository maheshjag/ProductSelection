# Installation
Run
````
npm install
````
from the command line (after installing [node.js](https://nodejs.org/) for your platform)

# Starting the application
After ensuring `npm install` completed successfully, you can start the app by running
````
npm start
````
from the command line. This will start `nodemon` so that the application restarts as soon as you make changes to it.

## Running the tests
---
There are two sets of tests available: server and client. For the server tests, enter
````
npm run server
````
from the command line. If you'd like to change the server code, then running
````
grunt w
````
will fire up a watcher task that will automatically run the tests after every change.

For the client tests, install karma globally using `npm install -g karma-cli` and then run
````
npm run client
````
from the command line. This will run the tests against Chrome and Safari on OSX. By default, I've set up karma to constantly monitor the files, so any changes you make will run the tests on both browsers.

These are the user stories that I wrote originally.

User stories
===

### Product Selection Page
---
As a customer, when I select or unselect a product, my shopping basket is updated so that:
* the shopping basket always shows my latest selection
* I can complete my purchase (check out) only when I've added at least one product to the basket
* I can opt to complete my purchase after adding one or more products

### Dev Criteria:
When the customer opts to complete the purchase, customer id and selected products are sent to the Confirmation Page

### Confirmation Page
---
As a customer, I want to see the products that I have chosen to purchase so that
* the confirmation page always shows me the products that I've purchased

## CustomerLocationService
---
As a customer, when I'm logged in, the website retrieves my stored location.

## CatalogueService
---
As a customer, my location is recognised so that:
* I'm shown Arsenal TV and Chelsea TV if my location is London
* I'm shown Liverpool TV if my location is Liverpool
* I'm always shown Sky News and Sky Sports News

#### Further ToDos
* Implement views as Backbone.Views