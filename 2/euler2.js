// euler2.js
// 20200612
// Find the sum of the even-valued terms of the Fibonacci sequence whose values do not exceed 4 million

let sum = 0
let limit = 4000000

let previousTerm = 1
let currentTerm = 2
let transitionTerm = 0

function fibonacci(firstTerm, secondTerm) {
    return firstTerm + secondTerm
}

function accumulate(previousTerm, currentTerm) {
    if (currentTerm > limit) {
        return sum
    }
    if (currentTerm % 2 === 0) {
        sum += currentTerm
        console.log('sum is: ' + sum)
    }
    transitionTerm = currentTerm

    currentTerm = fibonacci(previousTerm, currentTerm)
    console.log('current fibonacci is: ' + currentTerm)

    accumulate(transitionTerm, currentTerm)
}

accumulate(previousTerm, currentTerm)


