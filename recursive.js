
//write recursive function to print numbers from 1-n
function number(n){
	//let n=10
	if(n>10)	
		return;
	console.log(n);
	number(n+1);
}
number(1)
