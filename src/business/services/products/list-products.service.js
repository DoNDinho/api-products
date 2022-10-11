'use strict'
const productRepository = require('../../../data/repository/products.repository')
const { productConverter } = require('../../converter/product.converter')

const execute = async () => {
	try {
		const productData = await listProducts()
		const products = productData.map((product) => productConverter(product))
		return products
	} catch (error) {
		throw error
	}
}

const listProducts = async () => {
	try {
		const result = await productRepository.listProducts()
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
