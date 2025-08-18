## Variables
- **Mutable variable**
	Variables you can reassign or modify objects/arrays. **let** is used for mutable variables
		```let age = 30; // 'age' is initialized with the value 30
		age = 31;     // The value of 'age' is changed to 31``` 
	When a variable holds a reference to an object or an array, the variable itself might not be reassigned, but the _contents_ of the object or array it points to can be modified. This is also a form of mutability.
		
		```
		let person = {
	  name: "Gustavo", //properties of the object "person"
	  age: 25
		};
	
		person.age = 26; // The 'age' property is changed
		person.city = "New York"; // A new property is added
	
		let colors = ["red", "green"];
		colors.push("blue"); // A new element is added to the 'colors' array
		colors[0] = "orange"; 

## Functions

- **Asynchronous Functions**
	An `async` function allows you to write code that waits for asynchronous operations (like data loading or API calls) using `await`, making it look and behave more like synchronous code.
	`async function fetchData() {`
	  `let response = await fetch("https://api.example.com/data"); // pauses here until the fetch completes`
	  `let data = await response.json(); // waits for JSON conversion`
	  `console.log(data); // only runs after the data is ready`
	`}`
		
	`await` can only be used inside an `async` function. It tells JavaScript to "pause here" until the promise resolves.