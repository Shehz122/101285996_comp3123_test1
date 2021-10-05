// Shehzad Contractor - 101285996

function lowerCaseWords(array){
    return new Promise((resolve, reject) => {
        try {
            // Filtering the string from array
            var intialArray = array.filter(item => typeof item == "string")
            
            var lowerStrArray = intialArray.map(
                // Coverting it to lower case
                x => x.toLowerCase()) 

            resolve(lowerStrArray)
        } catch (errorMessage) {
            reject(errorMessage.message)
        }
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const output = async() => {
    var output = await lowerCaseWords(mixedArray)
    console.log("Question 1 Completed")
    console.log("----------------------")
    // Filtered output from the non-strings and lower case the remaining words

    console.log(output)
}
output()