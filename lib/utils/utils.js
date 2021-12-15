const ejs = require('ejs')
const fs=require('fs')
const path = require('path')
const compile = (template, data) => {
    return new Promise((resolve, reject) => {
        const templatePosition = `../templates/${template}`
        const templatePath = path.resolve(__dirname, templatePosition)
        ejs.renderFile(templatePath, { data }, {}, (err, res) => {
            if (err) {
                console.log(err)
                reject(err)
                return
            };
            resolve(res)
        })
    })
}
const writeToFile=(path,content) => {
    return fs.promises.writeFile(path, content)
}
module.exports = {
    compile,
    writeToFile
}