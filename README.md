# deepCopy
Deep copy of on object in pure javascript

## Sample
# Using <script> tag 

{

	var personA = {
	  name: 'John',
	  age: 32
	}

	var personB = clone(objectA);

	console.log(personB.name, personB.age);

}

## RequireJs
{

	define(['./clone'], function(deepCopy){

		// Do your code ...

		var personA = { 
			name: 'John Doe', 
			age: 35
		};

		var personB = deepCopy.clone(personA);

		// Do your code ...

	})
	
}

## CommonJS
{

	module.import('./clone').then(function (deepCopy) {

		// Do your code ...

		var personA = { 
			name: 'John Doe', 
			age: 35
		};

		var personB = deepCopy.clone(personA);

		// Do your code ...

	})
	
}
