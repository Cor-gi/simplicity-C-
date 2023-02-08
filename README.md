# simplicity-C-

> Package providing multiple supplementaries in JavaScript

> Note: This package is in early development

## Installation

``` bash
$ npm install simplicity-c
```

## Implementation

``` javascript
const { log, getLine } = require('simplicity-c')
```

# Functions


### Log:
Better log system containing multiple types and line positioning
```javascript
// Syntax
log(message, type)
```
``` javascript
log('Hello World!')
//  $ [ Log: Hello World! ] at {Call Position}

log('Hello World!' 'log')
//  $ [ Log: Hello World! ] at {Call Position}

log('This is an error', 'error')
// $ [ Error: This is an error ] at {Call Position}

log('Hello World!' 'info')
//  $ [ Info: Hello World! ] at {Call Position}
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