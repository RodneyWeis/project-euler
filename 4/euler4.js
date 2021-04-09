/*  A palindromic number reads the same both ways. 
    The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product of two 3-digit numbers.

    NOTE:  My solution is going to exhaustively calculate each combination of two 3-digit numbers.
    This is neither efficient nor the quickest way to reach the answer, but it is thorough.
*/

let largestPalindrome = 0
let largestFactors = {}

function isPalindrome(value) {
    let reversedValue = value.split('').reverse().join('')
    return (value === reversedValue)
}

const min = 100
const max = 999

function calculate() {
    for (x = min; x <= max; x++) {
        for (y = min; y <= max; y++) {
            let product = x * y
            if (isPalindrome(product.toString())) {
                if (product > largestPalindrome) {
                    largestPalindrome = product
                    console.log('largest is now ' + largestPalindrome)
                }
            }
        }
    }
}

calculate()
console.log(`The largest palindrome is ${largestPalindrome}`)

