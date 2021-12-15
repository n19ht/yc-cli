const { program } = require('../utils/help')
const { createProjectActions, createCpmponents } = require('./actions')
const createCommands = () => {
    program
        .command('create <project> [others...]')
        .description('a create description')
        .action(createProjectActions);
    program
        .command('addcpn <name>')
        .description('create a component ')
        .action((name) => {
            createCpmponents(name, program.dist||"./test")
        });
}
module.exports = {
    createCommands,
    createCpmponents
}