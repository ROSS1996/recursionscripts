
const fibS = (value) => {
    const numbers = [0]
    let number = 1
    for (i = 0; i < value-1; i++) {
        numbers.push(number)
        number += numbers[i]
    }
    return numbers
}

console.log(fibS(8))