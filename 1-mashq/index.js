let text = "23javascript12";
let text1="2javascript12"

let numbers = text.match(/\d+/g);
let numbers1 = text1.match(/\d+/g);

if (numbers && numbers.length >=2) {
    let num1=parseInt(numbers[0]);
    let num2=parseInt(numbers[numbers.length-1]);
    if (num1>num2) {
        text=`++${text}++`;
    }
    else{
        text=`--${text}--`;
    }
}
console.log(text);

if (numbers1 && numbers1.length >=2) {
    let num1=parseInt(numbers1[0]);
    let num2=parseInt(numbers1[numbers1.length-1]);
    if (num1>num2) {
        text1=`++${text1}++`;
    }
    else{
        text1=`--${text1}--`;
    }
}
console.log(text1);
// console.log(numbers); // ["3", "5"]
