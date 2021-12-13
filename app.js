console.log('Running on port 3000!');
function add(num1, num2, showResult, resultPhrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Addition Of two Number is: ";
add(number1, number2, printResult, resultPhrase);
