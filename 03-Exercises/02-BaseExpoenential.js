
const expo = (base, expoent) => {
    if (expoent == 0){
        return 1
    }
    let xp = 1;
    for (let i = 0; i < expoent; i++){
        xp *= base
    }
    return xp
}

console.log(expo(2, 2))
console.log(expo(10, 5))
console.log(expo(3, 4))