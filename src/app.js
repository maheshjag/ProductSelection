/**
 * Created by maheshjagadeesan on 17/01/16.
 */

"use strict";

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var compression = require('compression');

var APP_PORT = 9000;
var DEFAULT_CUSTOMER = 'test1';
var ALL_PRODUCTS_KEY = 'ALL';

// configuration start
// TODO: roll all of the configuration below into a config file
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(compression());
app.use(cookieParser());

app.use('/html', express.static('public/html', {
	extensions: ['htm', 'html']
}));
app.use('/css', express.static('public/css', {
	extensions: ['css']
}));
app.use('/scripts', express.static('public/scripts', {
	extensions: ['js']
}));
app.set('views', __dirname + '/../public/views');
app.set('view engine', 'ejs');
// configuration end

// Main app code here
var LocationService = require('./services/location-service/');
var locationService = new LocationService();
var CatalogueService = require('./services/catalogue-service/');
var catalogueService = new CatalogueService();
var confirmationService = require('./pages/order-confirmation');

function getCustomerId(req, res) {
	var cookies = req.cookies;
	var customerId = '';
	if (!cookies || (cookies && !cookies.customerId)) {
		console.log('cookies not found!');
		res.cookie('customerId', DEFAULT_CUSTOMER);
		customerId = DEFAULT_CUSTOMER;
	} else {
		customerId = cookies.customerId;
		console.log('cookies found, customerId:', customerId);
	}
	return customerId;
}

// Define routes and middleware
app.get('/', function(req, res) {
	var locationId;
	var customerId = getCustomerId(req, res);

	locationId = locationService.getLocationForCustomer(customerId);
	var products = catalogueService.getProductsForLocation(locationId);
	console.log('products:', products);
	res.render('products', {
		products: products,
		location: locationId,
		customer: customerId,
		news: ALL_PRODUCTS_KEY
	});
});

app.post('/confirm', function (req, res, next) {
	if (confirmationService.validateInputs(req.body)) {
		confirmationService.processInputs();
		next();
	} else {
		res.send('Sorry, there was an error processing your request. Please try again.');
	}
}, function (req, res) {
	res.render('confirmation');
});

/*
app.get('/clocs/v1.0/:customerId([a-zA-Z0-9]*)', function (req, res) {
	return locationService.getLocationForCustomer(req.params.customerId);
});
app.get('/pros/v1.0/:locationId([a-zA-Z]*)', function (req, res) {
	return catalogueService.getProductsForLocation(req.params.locationId);
});
*/
app.listen(APP_PORT, function() {
	console.log('Product Selection app listening on port ' + APP_PORT);
});
