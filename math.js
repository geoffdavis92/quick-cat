// math.js module => combineJS
sum = 0
prd = 0
prt = function(txt){
	console.log(txt)
}

module.exports = function math(arg){
	if(arg){
		// Argument is passed from combine.js
		if(arg[0] === "add"){
			for(i=1;i<arg.length;i++){
				num = parseInt(arg[i])
				sum += num
			}
			prt(sum)
		}
		else if(arg[0] === "sub"){
			for(i=1;i<arg.length;i++){
				num = parseInt(arg[i])
				if(i===1){
					sum = num
				} else{
					sum -= num
				}
			}
			prt(sum)
		}
		else if(arg[0] === "mul"){
			for(i=1;i<arg.length;i++){
				num = parseInt(arg[i])
				prd *= num
			}
			prt(prd)
		}
		else if(arg[0] === "div"){
			for(i=1;i<arg.length;i++){
				num = parseInt(arg[i])
				if(i===1){
					prd = num
				} else{
					prd /= num
				}
			}
			shorten = function stringify(num){
				num = num.toString()
				num = num.substring(0,4)
				return num
			}
			prt(shorten(prd))
		} else{
			prt("ERROR : numArray index[0] error")
		}
	} else {
		// No argument passed from combine.js
		console.log("ERROR => math(!arg)")
	}
}