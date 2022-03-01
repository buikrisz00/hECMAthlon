class hECMAthlonClass {

    getMaxValue(input) { // In case of single input, it returns the result in separate rows 
        return input.split(",").reduce((previousNum, currentNum) => (parseInt(previousNum) > parseInt(currentNum)) ? [previousNum] : [currentNum])
    }

    getGreaterThan(input) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num > parseInt(input))
    }

    fizzBuzz(input) {
        return Array(parseInt(input)).fill(1).map((num, index) => {
            if ((index+1) % 5 === 0 && (index+1) % 3 === 0) {
                return "FizzBuzz";
            } else if ((index+1) % 5 === 0) {
                return "Buzz";
            } else if ((index+1) % 3 === 0) {
                return "Fizz";
            } else {
                num += index;
                return num;
            }
        })
    }
}

let hECMAthlon = new hECMAthlonClass();
export default hECMAthlon;