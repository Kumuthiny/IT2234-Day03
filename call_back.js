
//call back function(a function call in another function)
//a function passed as an argument
const myName = (name) => {console.log("My name is "+name)}

const greet = (msg, fun) =>{
	console.log ("Hi.."+msg)
	fun()
}
greet("Good morning",()=> {console.log("My name is David")})



const multitwo = (n) => n*2
const myarr = (mul,...n) => {
	n.forEach((i) => console.log(mul(i)))
}
myarr(multitwo,4,5,6,8,2) //each elements multi by 2 if n*3 each are multi by 3