getMaxValue = (input) => {
    return input.split(",").reduce((previousNum, currentNum) => (parseInt(previousNum) > parseInt(currentNum)) ? parseInt(previousNum) : parseInt(currentNum))
}

getGreaterThan = (input) => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num > parseInt(input))
}

console.log(getMaxValue("10,600,5,4000,5000"));
console.log(getGreaterThan("8"));