let upvotes=Number(prompt("upvotesni kiriting:"));
let downvotes=Number(prompt("downvotesni kiriting:"));
function num() {
    let result=upvotes-downvotes;
    return result;
}
console.log(num(upvotes,downvotes));