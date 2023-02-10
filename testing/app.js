const { log, getLine, dumArr, capitalize } = require('simplicity-c')

let a = 'hello world'
console.log(a.charAt(0).toUpperCase() + a.slice(1))

log(capitalize(a))

log('Test', null, 'yes')