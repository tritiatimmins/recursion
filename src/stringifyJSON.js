// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //save the objects into this thing

  var storage = [];
  // if object is a boolean
  	if (typeof obj === "boolean") {
  	//then return true or false
  		if (obj === true) {
  			return "true";
  		} if (obj === false) {
  			return "false";
  		}

  	//can also do return obj ? "true" : "false"
  } if (typeof obj === "number") {
  		//toString() makes something a string
  	return obj.toString();
  
  	//if the object is a string then return the object 
  } if (typeof obj === "string") {
  	
  	//add a set of quotations around the obj
  	return '"' + obj + '"';
  
  } if (typeof === null); {
  	return "null";

  	//if it's an array
  	//if array.isarray of object
  }	if (Array.isArray(obj)); {

  	//overwrite the value of storage
  	storage = "["
  	//loop through the object
  	for (var i = 0; obj.length; i ++) {
  		//now overwrite the value of storage again
  		//call it recursively 
  		storage += stringifyJSON(obj[i]);
  		
  		//if i is less than the last position in the length of the obj, it will add commas to every value except the last one

  		if (i < obj.length - 1) {
  			storage += ","
  		}

  	} 
  	//use plus equal because this will add it and not override the value of storage
  		return storage += "]";

  		//stringify objects
  	} else {

  		//make a new array and put the object into the array
  		var objectCommaArray = [];

  		storage = "{";

  		for (var key in obj) {
  			//if the obj[key] is not undefined or a function then we must push it into the storage [];

  			if (obj[key] !== undefined && typeof obj[key] !== "function") {
  				//push recursive function
  				objectCommaArray.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
  			}
  		}

  		for (var i = 0; i < objectCommaArray.length; i ++) {

  			storage += objectCommaArray[i];
  			//if you're not at the last value don't add a comma
  			if(i < objectCommaArray.length - 1) {
  				storage += ","
  			}
  		}
  			return storage += "}";
  	} 	
};
