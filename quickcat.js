// CombineJS => combine input from CL args via math/concat

conText = require('./concat')
math = require('./math')

prt = function(txt){
	console.log(txt)
}

// Send command line Input to var CLI
var cli = process.argv
// Send number of elements in cli[] to var clNum 
var clNum = parseInt(cli.length)

// Check arguments for options/correct syntax
var opt = function challenge(){
	var option = cli[2]
	// If there is an argument...
	if(option){
		// TEXT
		if(option === "-t" || option === "--text"){
			prt("TEXT")
			// Check if there is a second argument
			if(cli[3] !== undefined){
				// Send next arg to string
				second = cli[3].toString()
				// Check if second arg is another option
				if(second.search('-') === 0){
					option = cli[3]
					// Check if second option is -f/--file
					if(option === "-f" || option === "--file"){
						// Require filesystem library
						fs = require('fs')
						file = cli[4]
						if(file){
							buf = fs.readFileSync(file)
							fileStr = buf.toString()
							split = fileStr.split(' ');
							txtArray = []
							for(i=0;i<split.length;i++){
								el = split[i]
								txtArray.push(el)
								// Send to #FUNNEL
							}
						} else { // No file path
							console.log('ERROR : no file selected')
							process.exit()
						}
					} else { // No valid option
						console.log('ERROR : not a valid option [text]')
						process.exit()
					}
				} else {
				// Construct array for text Input
				var txtArray = []
				// Start loop after option 
				for(i=3;i<clNum;i++){
					// Store each text input into scoped var el
					var el = cli[i]
					// Push el text into txtArray
					txtArray.push(el)
				}
			} // End of secondary option search
			// #FUNNEL => ALL -t [-f] GO THROUGH HERE
				// Send txtArray to conText()
				conText(txtArray)
			}
		} 
		// MATH
		else if(option === "-m" || option === "--math"){
			prt("MATH")
			// Check if there is a second argument
			if(cli[3] !== undefined){
				// Send next arg to string
				second = cli[3].toString()
				// Check if second arg is another option
				if(second.search('-') === 0){
					option = cli[3]
					numArray = []
					// Check if second option is...
					if(option === "-a" || option === "--add"){
						prt('add')
						numArray.push('add')
						for(i=4;i<clNum;i++){
							el = cli[i]
							numArray.push(el)
						}
					} else if(option === "-s" || option === "--subtract"){
						prt('subtract')
						numArray.push('sub')
						for(i=4;i<clNum;i++){
							if(clNum >= 7){
								prt("ERROR : Only two numbers allowed for this operation")
								process.exit()
							} else{
								el = cli[i]
								numArray.push(el)
							}
						}
					} else if(option === "-m" || option === "--multiply"){
						prt('multiply')
						numArray.push('mul')
						for(i=4;i<clNum;i++){
							el = cli[i]
							numArray.push(el)
						}
					} else if(option === "-d" || option === "--divide"){
						prt('divide')
						numArray.push('div')
						for(i=4;i<clNum;i++){
							if(clNum > 6){
								prt("ERROR : Only two numbers allowed for this operation")
								process.exit()
							} else{
								if(i === 5){
									if(cli[i] == 0){
										prt("ERROR : Cannot divide by 0 [zero]")
										process.exit()
									} else{
										el = cli[i]
										numArray.push(el)
									}
								} else{
									el = cli[i]
									numArray.push(el)
								}
							}
						}
					} else { // No valid option
						console.log('ERROR : Not a valid option')
						process.exit()
					}
				} else {
					prt('ERROR : Not a valid input')
					process.exit()
				}
				// Send EL to math.js
				prt(numArray)
				math(numArray)
			} else {
				prt('ERROR : No option selected')
				process.exit()
			}
		}
		// HELP
		else if (option === "-h" || option === "--help"){
				// Help option
				prt("HELP")
				// Put help code here ie math, text, etc
				code = ""
			// #FUNNEL => ALL -h GO THROUGH HERE
				help(code)
			} else {
				console.log("ERROR : Unsupported option.")
				process.exit()
			}
		} else {
		console.log("  ERROR : No option selected.") 
		console.log("      [-t, --text] => concatenate input text")
		console.log("      [-m, --math] => math operations")
	}
}

opt()