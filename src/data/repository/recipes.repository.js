'use strict'
const MySqlClient = require('../database/my-sql/client')
const MySqlRunner = require('../database/my-sql/runner')
const sqlProcedures = require('../database/my-sql/sql_procedures')

const insertRecipe = async (recipe, idMenu) => {
	try {
		const mySqlClient = await MySqlClient.getInstance()
		const procedure = sqlProcedures.insertRecipe(recipe, idMenu)
		const sqlRunner = new MySqlRunner(mySqlClient)
		const result = await sqlRunner.runProcedure(procedure)
		console.log(JSON.stringify(result))
		return result.pop()[0]
	} catch (error) {
		throw error
	}
}

const updateRecipe = async (recipe, id) => {
	try {
		const mySqlClient = await MySqlClient.getInstance()
		const procedure = sqlProcedures.updateRecipe(recipe, id)
		const sqlRunner = new MySqlRunner(mySqlClient)
		const result = await sqlRunner.runProcedure(procedure)
		console.log(JSON.stringify(result))
		return result.pop()[0]
	} catch (error) {
		throw error
	}
}

const deleteRecipe = async (id) => {
	try {
		const mySqlClient = await MySqlClient.getInstance()
		const procedure = sqlProcedures.deleteRecipe(id)
		const sqlRunner = new MySqlRunner(mySqlClient)
		const result = await sqlRunner.runProcedure(procedure)
		console.log(JSON.stringify(result))
		return result.pop()[0]
	} catch (error) {
		throw error
	}
}

module.exports = { insertRecipe, updateRecipe, deleteRecipe }
