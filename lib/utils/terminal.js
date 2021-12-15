const { spawn } = require('child_process')
const commanderSpawn = (...arg) => {
    return new Promise((resolve, reject) => {
        const chilrenProcess = spawn(...arg)
        chilrenProcess.stdout.pipe(process.stdout)
        chilrenProcess.stderr.pipe(process.stderr)
        chilrenProcess.on('close', () => { resolve() })
    })
}
module.exports = {
    commanderSpawn
}