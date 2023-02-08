const getLine = () => {
    let obj = {};
    Error.captureStackTrace(obj);
    let pos = obj.stack.search('Object.')
    let fin = obj.stack.slice(pos);
    let finpos = fin.search('at Module._compile')
    return fin.slice(0, finpos)
  };

const log = (message, type) => {
    if (type === 'log') {
        console.log('[ Log: ' + message + ' ]' + '\n at ' + getLine())
    } else if (type === 'error') {
        console.error('[ Error: ' + message + ' ]' + '\n at ' + getLine())
    } else if (type === 'info') {
        console.info('[ Info: ' + message + ' ]' + '\n at ' + getLine())
    } else if (type === undefined) {
        console.log('[ Log: ' + message + ' ]' + '\n at ' + getLine())
    } else {
        console.error('Unknown log type at \n' + getLine())
    }
}


module.exports = {log, getLine}