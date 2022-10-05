'use strict'
const MySqlClient = require('../database/my-sql/client')
const MySqlRunner = require('../database/my-sql/runner')
const sqlProcedures = require('../database/my-sql/sql_procedures')

const listCategories = async () => {
	try {
		const mySqlClient = await MySqlClient.getInstance()
		const procedure = sqlProcedures.listCategories()
		const sqlRunner = new MySqlRunner(mySqlClient)
		const result = await sqlRunner.runProcedure(procedure)
		console.log(JSON.stringify(result))
		return result.pop()[0]
	} catch (error) {
		throw error
	}
}

module.exports = { listCategories }
