const userNumber = parseFloat(prompt('What position of Fibonacci sequence to find? Please, enter a number:')); 
const fibonacciSequence = [1, 1];
while (userNumber > 0) {
    const sumOfNeighboringNumbers = fibonacciSequence[fibonacciSequence.length-1] + fibonacciSequence[fibonacciSequence.length-2];
    fibonacciSequence.push(sumOfNeighboringNumbers);
    if (userNumber === fibonacciSequence.length)
        break;
}
alert('Your number is ' + fibonacciSequence[fibonacciSequence.length-1]);