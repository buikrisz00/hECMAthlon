getMaxValue = (input) => {
    return input.split(",").reduce((previousNum, currentNum) => (previousNum > currentNum) ? previousNum : currentNum)
}

console.log(getMaxValue("10,100,150,200,15,2"));