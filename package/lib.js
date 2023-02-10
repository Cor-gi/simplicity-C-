/**
 * @returns {string} {Called Line Info}
 */

const getLine = () => {
    let obj = {};
    Error.captureStackTrace(obj);
    let pos = obj.stack.search('Object.')
    let fin = obj.stack.slice(pos);
    let finpos = fin.search('at Module._compile')
    return fin.slice(0, finpos)
  };

/**
 * @param {any} message Info to display
 * @param {string} type Selects log type
 * @param {string} info Display line number {Use 'y'}
 * @returns {console.log} console.log
 */

const log = (message, type, info) => {
    if (info === null || info === undefined) {
        if (type === 'log') {
            console.log('[ Log: ' + message + ' ]')
        } else if (type === 'error') {
            console.error('[ Error: ' + message + ' ]')
        } else if (type === 'info') {
            console.info('[ Info: ' + message + ' ]')
        } else if (type === undefined || type === null) {
            console.log('[ Log: ' + message + ' ]')
        } else {
            console.error('Unknown log type at \n' + getLine())
        }
    } else if (info === 'y') {
        if (type === 'log') {
            console.log('[ Log: ' + message + ' ]' + '\n at ' + getLine())
        } else if (type === 'error') {
            console.error('[ Error: ' + message + ' ]' + '\n at ' + getLine())
        } else if (type === 'info') {
            console.info('[ Info: ' + message + ' ]' + '\n at ' + getLine())
        } else if (type === undefined || type === null) {
            console.log('[ Log: ' + message + ' ]' + '\n at ' + getLine())
        } else {
            console.error('Unknown log type at \n' + getLine())
        }
    }
}

/**
 * 
 * @param {any} content Item placed in each slot
 * @param {number} count Number of slots
 * @returns {Array} Dummy Array
 */

const dumArr = (content, count) => {
    return [...new Array(count).fill(content)]
}

/**
 * 
 * @param {string} message String to be capitalized
 * @returns {string} Capitalized String
 */

const capitalize = (message) => {
    const finPos = message.charAt(0)
    const fin = finPos.toUpperCase() + message.slice(1)
    return fin
}

/**
 * 
 * @param {Array} input Array to be filtered
 * @returns {Array} Filtered Array
 */

const filterNull = (input) => {
    return input.filter((v) => v)
}

/**
 * 
 * @param {string} str String to be hashed
 * @param {string} hash Character to use as hash
 * @param {number} start Hash Start
 * @param {number} end Hash End
 * @returns Hashed String
 */

const strHash= (str, hash, start, end) => {
    const pri = str.split("")
    const med = []
    for (let i = start; i <= end; i++) {
        med.push(i);
      }
      for (let i = 0; i < pri.length; i++) {
        if (med.includes(i)) {
            pri[i] = hash;
        }
    }
    const fin = pri.join("")
    return fin
}

module.exports = {log, getLine, dumArr, capitalize, filterNull, strHash}