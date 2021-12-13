console.log('Running on port 3000!');

function add(num1:number, num2: number, showResult: boolean, resultPhrase: string): number{
    const result = num1 + num2;
    if(showResult){
        console.log(resultPhrase + result);
    }else{
        return result;
    }
}

const number1: number = 5;
const number2: number = 2.8;
const printResult: boolean = true;
const resultPhrase: string = "Addition Of two Number is: ";

add(number1, number2, printResult, resultPhrase);