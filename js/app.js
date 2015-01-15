var miniStore = angular.module('miniStore', ['ngRoute']);
miniStore.config(function($routeProvider){
	$routeProvider
	.when('/orders', {templateUrl: 'partials/orders.html'})
	.when('/customers', {templateUrl: 'partials/customers.html'});
});

var customers =[
	{name: 'Katrina', created_date: 'April 23 2015'},
	{name: 'Timothy', created_date: 'June 23 2015'},
	{name: 'Justin', created_date: 'July 23 2015'},
	{name: 'Zachary', created_date: 'August 23 2015'}
];
var products =[
	{name: 'Nike Shoes'},
	{name: 'Black Belts'},
	{name: 'Ice Cream'},
	{name: 'Candies'}
];
var orders = [
	{customer_name: 'Katrina', product: 'Nike Shoes', quantity: 2, date: 'December 17 2014'},
	{customer_name: 'Joey', product: 'Ice Creams', quantity: 4, date: 'January 1 2015'}
];