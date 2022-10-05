'use strict'
const parseCategoriesResponse = (categoryData) => {
	return {
		code: categoryData.ID_CATEGORIA,
		name: categoryData.DESCRIPCION
	}
}

module.exports = { parseCategoriesResponse }
