function sumOfNumbers (input) {
    let firstNumber = Number(input[0]);
    let index = 1;
    let numbers = Number(input[index]);
    let sum = 0;
    while (sum < firstNumber) {
        sum += numbers;
        index++;
    }
    console.log(sum);
}

sumOfNumbers(["100",
"10",
"20",
"30",
"40"]);