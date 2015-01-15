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