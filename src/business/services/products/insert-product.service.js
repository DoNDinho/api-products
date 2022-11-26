'use strict'
const productRepository = require('../../../data/repository/products.repository')
const { createAlert } = require('../../../data/repository/alerts.repository')

const execute = async (product) => {
	try {
		await insertProduct(product)
		createAlert()
	} catch (error) {
		throw error
	}
}

const insertProduct = async (product) => {
	try {
		const result = await productRepository.insertProduct(product)
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
