// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
let fs = require('fs')
let bigfilename = 'prime10e6.js'

const allPrimes = fs.readFileSync(bigfilename, 'utf-8', (err) => {
    if (err) throw err
}).split(',')

let target = 600851475143

function reduce(currentVal) {
    let factors = []
    for (let x = 0; x < allPrimes.length; x++) {
        if (currentVal % allPrimes[x] === 0) {
            let intermediate = currentVal / allPrimes[x]
            factors.push(allPrimes[x])
            reduce(intermediate)
        }
    }
    return factors
}

let primeFactors = reduce(target)

console.log(`Prime factors of ${ target } are ${ primeFactors }`)