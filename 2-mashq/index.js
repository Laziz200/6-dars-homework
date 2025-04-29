let num1=Number(prompt("1-sonni kiriting:"));
let num2=Number(prompt("2-sonni kiriting:"));
function nums() {
    if (num1==10 || num2==10 || num1+num2==10) {
        return true;
    }
    else{
        return false;
    }
}
console.log(nums());