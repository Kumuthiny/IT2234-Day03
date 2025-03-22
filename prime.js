
//write a boolean function to find a given number is prime
function prime(a){
	let is_prime = true
	
	if(a==0 || a==1)
		is_prime=false
	
	for(let i =2;i<a;i++){
		if(a%i==0)
			return false
	}	
	if(is_prime)
		console.log(a+"is prime")
	else
		console.log(a+"is not prime")
}
prime(5)
