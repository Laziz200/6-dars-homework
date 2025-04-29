let str=prompt("string kiriting:");
function string(str) {
    let result="";
    for (let i = 0; i < str.length; i++) {
        result+=str[i];
        result+=str[i];
    }
    return result;
}
console.log(string(str));