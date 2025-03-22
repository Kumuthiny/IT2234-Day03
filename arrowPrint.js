
//arrow function
/*
function PrintMsg(){
	console.log("Hello JS")
}
*/
const msg = () => {return console.log("Hello JS")} // now msg is not a variable it is a function
//console.log(msg)  
msg()

const Msg = () => {return ("Hello JS")} // now msg is not a variable it is a function
console.log(Msg)  //output= [Function: Msg]
//msg()
