const sumNumbers = (number) => {
    let sum = 0;
    for (let i = 0; i < number.toString().length; i++) {
        sum += parseInt(number[i]);
    }
    return sum;

}
var nums = '12345';
console.log(sumNumbers(nums));