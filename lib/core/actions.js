const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const { vueRepo } = require('../config/repo-config')
const { commanderSpawn } = require('../utils/terminal')
const { compile, writeToFile } = require('../utils/utils')
const open = require('open')
const path=require('path')

const createProjectActions = async (project, others) => {
    console.log('正在clone项目......');
    await download(vueRepo, project, { clone: true })
    console.log('正在安装依赖......');
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commanderSpawn(command, ['install'], { cwd: `./${project}` })
    open('http://127.0.0.1:8080')
    await commanderSpawn(command, ['run', 'serve'], { cwd: `./${project}` })

}
const createCpmponents = async (project,dist) => {
    const res = await compile('temp.vue.ejs', { name: project})
    const targetPath = path.resolve(dist, `${project}.vue`)
    writeToFile(targetPath,res)
}
module.exports = {
    createProjectActions,
    createCpmponents
} 