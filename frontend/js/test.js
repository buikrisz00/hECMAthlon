getMaxValue = (input) => {
    return input.split(",").reduce((previousNum, currentNum) => (parseInt(previousNum) > parseInt(currentNum)) ? previousNum : currentNum)
}

console.log(getMaxValue("10,600,5,4000,5000"));