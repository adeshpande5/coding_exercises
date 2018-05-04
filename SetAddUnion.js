/*problem statement
	Set A={"A", "B", "C", "D"}
	Set B = 

	1) write add function
	for add function don't overwrite, add it only if it doesnt exist
	var A = new Set();
	A.add("A").add("B")...

	var B = new Set();
	B.add("A").add("C").
	
	2) write union function
	should show all the elements from A & B (don't repeat common ones)
	
	var C = A.union(B);
*/

	function Set(elements){
		var that = {};

	    that.elements = elements || {};	    

		that.add = function(ele){
    		var exists = that.elements && that.elements[ele];
			if(!exists){
				that.elements[ele] = ele;
			}
			return that;
		};

		that.union = function(anotherSet){			
			//efficiently merge 2 objects
			var resultSet = Set();
			function addInLoop(members){
				for(var ele in members){
					resultSet.add(ele);
				}
			}
			addInLoop(that.elements);
			addInLoop(anotherSet.elements);
			return resultSet;
		}
		return that;
	}
	
	//add function
	var a = Set();
	a.add("A");
	a.add("B");
	a.add("A");
	a.add("C");
	a.add("D");
	a.add("B");

	console.log('Set A ='+ Object.keys(a.elements));
	
	var b = Set();
	b.add("A");
	b.add("B");
	b.add("G");
	b.add("C");
	b.add("M");
	b.add("C");
	b.add("T");
	b.add("R");

	console.log('Set B ='+ Object.keys(b.elements));

	//union function
	var c = a.union(b);

	console.log('Set C ='+ Object.keys(c.elements));