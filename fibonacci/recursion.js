
const fibS = (n) => {
    if (n < 2) {
        return n
    }
    else {
        return fibS(n-1) + fibS(n-2)
    }

}

console.log(fibS(8))