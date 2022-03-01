class hECMAthlonClass {

    getMaxValue(input) {
        return input.split(",").reduce((previousNum, currentNum) => (previousNum > currentNum) ? previousNum : currentNum)
    }

    getGreaterThan(input) {
        const greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let greaterNums = [];
        for(let j = 0; j < greaterValues.length; j++) {
            if (greaterValues[j] > parseInt(input)) {
                greaterNums.push(greaterValues[j]);
            }
        }
        return greaterNums;
    }

    fizzBuzz(input) {
        let output = [];
        for (let k = 1; k <= parseInt(input); k++) {
            let value;
            if(k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
            else if(k % 3 === 0) value = "Fizz";
            else if(k % 5 === 0) value = "Buzz";
            else value = k;
            output.push(value);
        }
        return output;
    }
}

let hECMAthlon = new hECMAthlonClass();
export default hECMAthlon;