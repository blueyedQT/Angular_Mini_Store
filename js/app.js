var miniStore = angular.module('miniStore', ['ngRoute']);
miniStore.config(function($routeProvider){
	$routeProvider
	.when('/orders', {templateUrl: 'partials/orders.html'})
	.when('/customers', {templateUrl: 'partials/customers.html'});
});
miniStore.factory('CustomerFactory', function(){
	var errors = {};
	var customers =[
		{name: 'Katrina', created_date: 'April 23 2015'},
		{name: 'Timothy', created_date: 'June 23 2015'},
		{name: 'Justin', created_date: 'July 23 2015'},
		{name: 'Zachary', created_date: 'August 23 2015'}
	];
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
miniStore.controller('Customers', function($scope, CustomerFactory){
	$scope.customers = CustomerFactory.getCustomers();
	$scope.addCustomer = function(){
		CustomerFactory.addCustomer($scope.new_customer);
	};
	$scope.errors = CustomerFactory.getErrors();
	$scope.removeCustomer = function(name){
		CustomerFactory.removeCustomer(name);
	}
});