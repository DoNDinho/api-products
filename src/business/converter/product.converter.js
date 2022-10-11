'use strict'
const productConverter = (productData) => {
	const product = {
		id: productData.ID_PRODUCTO,
		name: productData.NOMBRE,
		stock: productData.STOCK
	}
	return product
}

module.exports = { productConverter }
