class hECMAthlonClass {

    getMaxValue(input) {
        /* const maxValues = input.split(",");
        let maxValue = 0;
        for(let i = 0; i < maxValues.length; i++){
            const tempValue = parseInt(maxValues[i]);
            if (tempValue > maxValue) {
                maxValue = tempValue;
            }
        }
        return [maxValue]; */
        return input.split(",").reduce((previousNum, currentNum) => (parseInt(previousNum) > parseInt(currentNum)) ? [previousNum] : [currentNum])
    }

    getGreaterThan(input) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num > parseInt(input))
    }

    fizzBuzz(input) {
        /* let output = [];
        for (let k = 1; k <= parseInt(input); k++) {
            let value;
            if(k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
            else if(k % 3 === 0) value = "Fizz";
            else if(k % 5 === 0) value = "Buzz";
            else value = k;
            output.push(value);
        }
        return output; */
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