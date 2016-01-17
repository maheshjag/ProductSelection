/**
 * Created by maheshjagadeesan on 17/01/16.
 */
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var APP_PORT = 9000;

var LocationService = require('./services/location-service/');
var locationService = new LocationService();
var CatalogueService = require('./services/catalogue-service/');
var catalogueService = new CatalogueService();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/login', function (req, res) {
	// do something here
});

app.get('/clocs/v1.0/:customerId([a-zA-Z0-9]*)', locationService.getLocationForCustomer);
app.get('/pros/v1.0/:locationId([a-zA-Z]*)', catalogueService.getProductsForLocation);

app.listen(APP_PORT, function () {
    console.log('Product Selection app listening on port ' + APP_PORT);
});
