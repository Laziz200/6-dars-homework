let str=prompt("string kiriting:");
function sting() {
    let result="";
    for (let i = 0; i < str.length; i++) {
        if (i<=1) {
            result+=str[i];
        }
    }
    return result;
}
console.log(sting(str));