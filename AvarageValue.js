
var arr = [5,5,5,5];
var sum = 0;


for(var i = 0; i < arr.length; i++){
	var k = sum += arr[i];
	var v = k/arr.length;
}

console.log(v);