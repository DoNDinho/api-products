'use strict'
const recipeConverter = (menuData) => {
	const recipe = {
		id: menuData.ID_RECETA,
		product: {
			id: menuData.ID_PRODUCTO,
			name: menuData.NOMBRE_PRODUCTO
		},
		quantity: {
			value: menuData.CANTIDAD,
			measure: {
				code: menuData.ID_MEDIDA,
				name: menuData.DESCRIPCION_MEDIDA
			}
		}
	}
	return recipe
}

module.exports = { recipeConverter }
