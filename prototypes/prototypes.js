// this is a simple example of creating a method inside arrays prototype object
//getEven is a function that accept a callback and return even element from the provided array and that value is passed to callback function
var List = [];
List.__proto__.getEven = function (callback){
    for(let i = 0; i<= this.length; i++){
		if(this[i] % 2 === 0){
			callback(this[i]);
		} 
	}
}

List = [1,2,3,4,5,6,7,8,9,10];
List.getEven(function(val){
    console.log(val);
})