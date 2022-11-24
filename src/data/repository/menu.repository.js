'use strict'
const MySqlClient = require('../database/my-sql/client')
const MySqlRunner = require('../database/my-sql/runner')
const sqlProcedures = require('../database/my-sql/sql_procedures')

const insertMenu = async (menu) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.insertMenu(menu)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const listMenu = async () => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.listMenu()
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const listMenuById = async (id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.listMenuById(id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const updateMenu = async (menu, id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.updateMenu(menu, id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

const deleteMenu = async (id) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.deleteMenu(id)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

module.exports = { insertMenu, listMenu, listMenuById, updateMenu, deleteMenu }
