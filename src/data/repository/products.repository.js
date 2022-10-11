'use strict'
const MySqlClient = require('../database/my-sql/client')
const MySqlRunner = require('../database/my-sql/runner')
const sqlProcedures = require('../database/my-sql/sql_procedures')

const insertProduct = async (product) => {
	try {
		const mySqlClient = await MySqlClient.getInstance()
		const procedure = sqlProcedures.insertProduct(product)
		const sqlRunner = new MySqlRunner(mySqlClient)
		const result = await sqlRunner.runProcedure(procedure)
		console.log(JSON.stringify(result))
		return result.pop()[0]
	} catch (error) {
		throw error
	}
}

const listProducts = async () => {
	try {
		const mySqlClient = await MySqlClient.getInstance()
		const procedure = sqlProcedures.listProducts()
		const sqlRunner = new MySqlRunner(mySqlClient)
		const result = await sqlRunner.runProcedure(procedure)
		console.log(JSON.stringify(result))
		return result.pop()[0]
	} catch (error) {
		throw error
	}
}

const listProductById = async (id) => {
	try {
		const mySqlClient = await MySqlClient.getInstance()
		const procedure = sqlProcedures.listProductById(id)
		const sqlRunner = new MySqlRunner(mySqlClient)
		const result = await sqlRunner.runProcedure(procedure)
		console.log(JSON.stringify(result))
		return result.pop()[0]
	} catch (error) {
		throw error
	}
}

const updateProduct = async (product, id) => {
	try {
		const mySqlClient = await MySqlClient.getInstance()
		const procedure = sqlProcedures.updateProduct(product, id)
		const sqlRunner = new MySqlRunner(mySqlClient)
		const result = await sqlRunner.runProcedure(procedure)
		console.log(JSON.stringify(result))
		return result.pop()[0]
	} catch (error) {
		throw error
	}
}

const deleteProduct = async (id) => {
	try {
		const mySqlClient = await MySqlClient.getInstance()
		const procedure = sqlProcedures.deleteProduct(id)
		const sqlRunner = new MySqlRunner(mySqlClient)
		const result = await sqlRunner.runProcedure(procedure)
		console.log(JSON.stringify(result))
		return result.pop()[0]
	} catch (error) {
		throw error
	}
}

module.exports = { insertProduct, listProducts, listProductById, updateProduct, deleteProduct }
