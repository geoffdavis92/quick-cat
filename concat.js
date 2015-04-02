// concat.js module => combineJS
str = ""
prt = function(txt){
	console.log(txt)
}

module.exports = function concat(arg){
	if(arg){
		array = arg.slice()
		for(i=0;i<array.length;i++){
			str += array[i] + " "
		}
		prt(str)
	} else {
		console.log("ERROR => text(!arg)")
	}
	
} // end > module.exports

/* OLD

	//function con(array){
			array = arg.slice()
			for(i=0;i<array.length;i++){
				str += array[i] + " "
			}
			// returning string
			//return str
		//}
		// var join = con(arg)
		// console.log("OUTPUT: "+join);

	*/