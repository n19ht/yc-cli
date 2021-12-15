const { Command } = require('commander');
const program = new Command()
const helpOptions=() => {
    program.version(require('../../package').version)
    program.option('-d, --dest <dest>', 'a destination,eg: .aa/bb');
    program.option('-f, --framework <framework>', 'a framework,eg: vue,react,angular');
}
module.exports = {
    helpOptions,
    program
}