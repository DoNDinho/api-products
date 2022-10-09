'use strict'
const recipeRepository = require('../../../data/repository/recipes.repository')

const execute = async (id) => {
	try {
		await deleteRecipe(parseInt(id))
	} catch (error) {
		throw error
	}
}

const deleteRecipe = async (id) => {
	try {
		const result = await recipeRepository.deleteRecipe(id)
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
