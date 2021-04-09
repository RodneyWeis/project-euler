// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
let fs = require('fs')

let filename = 'prime10e3.js'
let bigfilename = 'prime10e6.js'

function generatePrimes(limit) {
    let arr = []
    for (let x = 2; x < limit; x++) {
        arr.push(x)
    }

    let primes = []

    while(arr[0] < limit) {
        let x = arr[0]
        primes.push(x)
        for(item of arr) {
            if (item % x === 0) {
                let y = arr.indexOf(item)
                arr.splice(y, 1)
            }
        }
    }
    return primes
}

let primeList = generatePrimes(1000)

// primeList.toString()
console.log(primeList)

fs.writeFile(filename, JSON.stringify(primeList), (err) => {
    if (err) throw err;
    console.log('File ', filename, ' has been saved')
})

const allPrimes = fs.readFileSync(bigfilename, 'utf-8', (err) => {
    if (err) throw err
}).split(',')

let target = 600851475143

function reduce(currentVal) {
    let factors = []
    // begin loop
    for (let x = 0; x < allPrimes.length; x++) {
        if (currentVal % allPrimes[x] === 0) {
            let intermediate = currentVal / allPrimes[x]
            factors.push(allPrimes[x])
            reduce(intermediate)
        }
    }
    factors.sort()
    console.log(factors)
}

let highestPrimeFactor = reduce(target)

console.log(`Highest prime factor is ${ highestPrimeFactor }`)