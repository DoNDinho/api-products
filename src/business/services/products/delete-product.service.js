'use strict'
const productRepository = require('../../../data/repository/products.repository')

const execute = async (id) => {
	try {
		const productData = await deleteProduct(parseInt(id))
		const product = productConverter(productData)
		return product
	} catch (error) {
		throw error
	}
}

const deleteProduct = async (id) => {
	try {
		const result = await productRepository.deleteProduct(id)
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
