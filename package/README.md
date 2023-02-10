# simplicity-C

> Package providing multiple supplementaries in JavaScript

> Note: This package is in early development

## Installation

``` bash
$ npm install simplicity-c
```

## Implementation

``` javascript
const { log, error, getLine, dumArr, capitalize, filterNull, strHash } = require('simplicity-c')
```

# Functions


### Log:
Better log system with line positioning
```javascript
// Syntax
log(message, info)
```
``` javascript
log('Hello World!')
//  $ [ Log: Hello World! ]

log('Hello World!', 'y')
//  $ [ Log: Hello World! ] at {Call Position}

log('Hello World!', 'yes')
//  $ [ Log: Hello World! ] at {Call Position}
```

### Error:
Better error system with line positioning
```javascript
// Syntax
error(message, info)
```
``` javascript
error('Hello World!')
//  $ [ Error: Hello World! ]

error('Hello World!', 'y')
//  $ [ Error: Hello World! ] at {Call Position}

error('Hello World!', 'yes')
//  $ [ Error: Hello World! ] at {Call Position}
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