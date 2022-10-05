'use strict'
const menuRepository = require('../../../data/repository/menu.repository')
const { recipeConverter } = require('../../converter/recipe.converter')
const { menuConverter } = require('../../converter/menu.converter')

const execute = async (id) => {
	try {
		const menuData = await listMenuById(parseInt(id))
		const recipeData = createRecipe(menuData)
		return menuConverter(menuData[0], recipeData)
	} catch (error) {
		throw error
	}
}

const listMenuById = async (id) => {
	try {
		const result = await menuRepository.listMenuById(id)
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

const createRecipe = (menuData) => {
	if (!menuData[0].ID_RECETA) {
		return null
	}
	return menuData.map((recipe) => recipeConverter(recipe))
}

module.exports = { execute }
