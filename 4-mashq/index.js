// let text="zip codes of 5 consecutive digits";
// let numbers = text.match(/\d+/g);
// let num=parseInt(numbers);
// if (num>10) {
//     console.log(true);
// }
// else{
//     console.log(false);
// }
let text=prompt("text kiriting:");
function big() {
    let numbers = text.match(/\d+/g);
    let num=parseInt(numbers);
    if (num>10) {
        return true;
    }
    else{
        return false;
    }
}
console.log(big(text));