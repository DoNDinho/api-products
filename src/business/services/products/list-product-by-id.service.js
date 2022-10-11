'use strict'
const productRepository = require('../../../data/repository/products.repository')
const { productConverter } = require('../../converter/product.converter')

const execute = async (id) => {
	try {
		const productData = await listProductById(parseInt(id))
		const product = productConverter(productData[0])
		return product
	} catch (error) {
		throw error
	}
}

const listProductById = async (id) => {
	try {
		const result = await productRepository.listProductById(id)
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
