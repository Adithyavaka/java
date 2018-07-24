var array1 = [5,12,8,130,44];
 var found = array1.find(function(element){
 	return element >10;
 	 
 });
document.write(found);

//this is first large number
var array2=[5,12,8,130,44];
function findFirstLargeNumber(element){
	return element > 13;
}
document.write(array2.findIndex(findFirstLargeNumber));
//
