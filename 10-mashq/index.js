let num=Number(prompt("son kiriting:"));
let result=1;
for (let i = num; i >= 1; i--) {
    result*=i;
    console.log(i);
}
alert(`${num} ning factoriali=${result}`);