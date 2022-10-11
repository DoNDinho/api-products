'use strict'
const parseCategoriesResponse = (categoryData) => {
	return {
		code: categoryData.ID_CATEGORIA,
		name: categoryData.DESCRIPCION,
		image: categoryData.IMAGEN ?? null
	}
}

module.exports = { parseCategoriesResponse }
