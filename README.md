# simplicity-C

> Package providing multiple supplementaries in JavaScript

> Note: This package is in early development

## Installation

``` bash
$ npm install simplicity-c
```

## Implementation

``` javascript
const { log, getLine, dumArr, capitalize, filterNull, strHash } = require('simplicity-c')
```

# Functions


### Log:
Better log system containing multiple types and line positioning
```javascript
// Syntax
log(message, type, info)
```
``` javascript
log('Hello World!')
//  $ [ Log: Hello World! ]

log('Hello World!', 'log')
//  $ [ Log: Hello World! ]

log('This is an error', 'error')
// $ [ Error: This is an error ]

log('Hello World!', 'info')
//  $ [ Info: Hello World! ]

log('Hello World!', 'log', 'yes')
//  $ [ Info: Hello World! ] at {Call position}

log('Hello World!', null, 'yes')
//  $ [ Info: Hello World! ]  at {Call position}
```

### GetLine:
Function that returns line data from the called position
``` javascript
// Syntax
getLine()
```
``` javascript
console.log(getLine())
//  $ {Call Position And Info}
```

### DumArr:
Makes a dummy array with custom content and  custom length
``` javascript
// Syntax
dumArr(content, count)
```
``` javascript
console.log(dumArr('Item', 5))
//  $ ['item', 'item', 'item', 'item', 'item']
```

### Capitalize
Capitalizes a set string
``` javascript
// Syntax
capitalize(message)
```
``` javascript
const a = 'hello world'
console.log(capitalize(a))
//  $ Hello world
```

### FilterNull
Filters undefined and null out of an array
``` javascript
// Syntax
filterNull(input)
```
``` javascript
const a = [undefined, null, 'Hello', 5, null, 'Hola']
console.log(filterNull(a))
//  $ [Hello, 5, Hola]
```

### StrHash
Hashes a certain portion of a string with a custom hash
**Reminder:** *This function uses Zero-Based numbering*
``` javascript
// Syntax
strHash(str, hash, start, end)
```
``` javascript
console.log(strHash('This is a test!', '*', 10, 13))
//  $ This is a ****!
```