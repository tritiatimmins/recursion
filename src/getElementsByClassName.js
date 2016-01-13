// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here

  //store the lil nodies in here
  var nodeList = [];
  	//have a function within the function
  	//takes node as a param.
  	function test(node) {
  		//build base case
  		//if the classlist of the node is true
  		if(node.classList) {
  			//if the node.classlist.contains(the class name parameter)
  			if(node.classList.contains(className)) {
  				//then push the node that meets the criterion into the node list
  				nodeList.push(node);
  			}
  		}
  		//loop through the child nodes
  		for (var i = 0; i < node.childNodes.length; i ++) {
  			//recursive case with the index of childNodes of node as the parameter
  			test(node.childNodes[i]);
  		}
  	}
  		//make document body a parameter of test
  		//test function goes through the document.body
  		test(document.body);
  		//return the array fo elements by class name
  		return nodeList;
};
