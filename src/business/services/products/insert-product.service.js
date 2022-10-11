'use strict'
const productRepository = require('../../../data/repository/products.repository')

const execute = async (product) => {
	try {
		await insertProduct(product)
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
