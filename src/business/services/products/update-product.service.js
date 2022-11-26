'use strict'
const productRepository = require('../../../data/repository/products.repository')
const { createAlert } = require('../../../data/repository/alerts.repository')

const execute = async (product, id) => {
	try {
		await updateProduct(product, parseInt(id))
		createAlert(1)
	} catch (error) {
		throw error
	}
}

const updateProduct = async (product, id) => {
	try {
		const result = await productRepository.updateProduct(product, id)
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
