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
  	return obj;
  }

};
