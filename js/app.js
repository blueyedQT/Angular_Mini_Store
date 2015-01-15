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
miniStore.factory('CustomerFactory', function(){
	var errors = {};
	var factory = {};
	factory.getCustomers = function(){
		return customers;
	};
	factory.addCustomer = function(info){
		for(var i=0; i<customers.length; i++){
			if(customers[i].name === info.name){
				errors.message = 'The name already exisits in our system';
				return false;
			}
		}
		customers.push({
			name: info.name,
			created_date: Date.now()
		});
		errors.message = '';
	};
	factory.getErrors = function(){
		return errors;
	};
	factory.removeCustomer = function(name){
		for(var i = 0; i<customers.length; i++){
			if(customers[i].name === name) {
				customers.splice(i, 1);
			}
		}
	};
	return factory;
});

miniStore.factory('OrderFactory', function(){
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
	var factory = {};
	factory.getCustomers = function(){
		return customers;
	};
	factory.getProducts = function(){
		return products;
	};
	factory.getOrders = function(){
		return orders;
	};
	factory.addOrder = function(info){
		console.log(info);
		orders.push({
			customer_name: info.name,
			product: info.product,
			quantity: info.quantity,
			date: Date.now()
		});
	};
	return factory;
});

miniStore.controller('Customers', function($scope, CustomerFactory){
	$scope.customers = CustomerFactory.getCustomers();
	$scope.addCustomer = function(){
		CustomerFactory.addCustomer($scope.new_customer);
	};
	$scope.errors = CustomerFactory.getErrors();
	$scope.removeCustomer = function(name){
		CustomerFactory.removeCustomer(name);
	};
});

miniStore.controller('Orders', function($scope, OrderFactory){
	$scope.customers = OrderFactory.getCustomers();
	$scope.products = OrderFactory.getProducts();
	$scope.orders = OrderFactory.getOrders();
	$scope.addOrder = function(){
		OrderFactory.addOrder($scope.new_order);
	};
});