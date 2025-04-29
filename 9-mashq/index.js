alert("3 ta son kiriting:");
let num1=Number(prompt("1- sonni kiriting:"));
let num2=Number(prompt("2-sonni kiriting:"));
let num3=Number(prompt("3-sonni kiriting:"));
let result={}
function add() {
    let sum=num1+num2+num3;
    result.add=sum;
    return sum;
}
function devide() {
    let sum=num1/num2/num3;
    result.devide=sum;
    return sum;
}
function minus() {
    let sum=num1-num2-num3;
    result.minus=sum
    return sum;
}
function multy() {
    let sum=num1*num2*num3;
    result.multy=sum
    return sum;
}
add();
devide();
minus();
multy();
console.log(result);
// console.log(add(num1,num2,num3));
// console.log(devide(num1,num2,num3));
// console.log(minus(num1,num2,num3));
// console.log(multy(num1,num2,num3));