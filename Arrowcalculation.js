
//write a arrow function to sum 2 numbers
const Sum =()=>{return console.log(2+5)}
Sum()

const add = (a,b) =>
{
	return a+b
}
console.log(add(5,8))

//default parameter
const multi = (a,b=2) =>
{
	return a*b
}
console.log(multi(5,8))
console.log(multi(4)) //defaulty assign 2 for b