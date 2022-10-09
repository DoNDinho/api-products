'use strict'
const recipeRepository = require('../../../data/repository/recipes.repository')

const execute = async (recipe, id) => {
	try {
		await updateRecipe(recipe, parseInt(id))
	} catch (error) {
		throw error
	}
}

const updateRecipe = async (recipe, id) => {
	try {
		const result = await recipeRepository.updateRecipe(recipe, id)
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
