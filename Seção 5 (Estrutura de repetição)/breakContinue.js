const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log("Break")
console.log("")

for(x in nums){

    if(x == 5) break;
    console.log(`posicao[${x}] = ${nums[x]}`)
}

console.log("")
console.log("Continue")
console.log("")

for(y in  nums){
    if(y == 5) continue;
    console.log(`${y}) = ${nums[y]}`)
}


