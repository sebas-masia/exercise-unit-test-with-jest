// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// From Euro to Dollar
const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

// From Dollar to Yen
const fromDollarToYen = (dollar) => {
    return (1 / oneEuroIs.USD) * oneEuroIs.JPY * dollar;
}

// From Yen to Pound
const fromYenToPound = (yen) => {
    return (1 / oneEuroIs.JPY) * oneEuroIs.GBP * yen;
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };