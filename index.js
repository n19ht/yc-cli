#!/usr/bin/env node
const {helpOptions, program}=require('./lib/utils/help')
const {createCommands}=require('./lib/core/create')
helpOptions()
createCommands()
program.parse(process.argv)//帮助和可选信息
const options = program.opts();