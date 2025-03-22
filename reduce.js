const MySum = (...n) => {
	return n.reduce ((t,i) => t=t+i)  //reduce is used for seperate each elements without using foreach
}
console.log(MySum(4,5,6,12,78))