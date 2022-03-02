getMaxValue = (input) => {
    return input.split(",").reduce((previousNum, currentNum) => (parseInt(previousNum) > parseInt(currentNum)) ? parseInt(previousNum) : parseInt(currentNum))
}

getGreaterThan = (input) => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num > parseInt(input))
}

fizzBuzz = (input) => {
    return Array(parseInt(input)).fill(1).map((num, index) => {
        if ((index+1) % 5 === 0 && (index+1) % 3 === 0) {
            return "FizzBuzz";
        } else if ((index+1) % 5 === 0) {
            return "Buzz";
        } else if ((index+1) % 3 === 0) {
            return "Fizz";
        } else {
            num += index;
            return num
        }
    })
    
}

function getOutput(output) {
    /* let returnValue = ["The function starts"];
    for(let i = 0; i < output.length; i++){
        returnValue.push(output[i]);
    }
    returnValue.push("The function ends");
    return returnValue; */
    return ["The function starts", ...output, "The function ends"]
}

/* console.log(getMaxValue("10,600,5,4000,5000"));
console.log(getGreaterThan("8"));
console.log(fizzBuzz("16")); */
console.log(getOutput([500, 15, 900]));
