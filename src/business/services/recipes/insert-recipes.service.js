'use strict'
const recipeRepository = require('../../../data/repository/recipes.repository')

const execute = async (recipes, id) => {
	try {
		const errors = await insertRecipes(recipes, parseInt(id))
		return createErrors(errors)
	} catch (error) {
		throw error
	}
}

const insertRecipes = async (recipes, id) => {
	try {
		const results = await Promise.allSettled(
			recipes.map((recipe) => recipeRepository.insertRecipe(recipe, id))
		)
		const errors = results
			.filter((result) => result.status == 'rejected')
			.map((result) => result.reason.message)

		if (errors.length == results.length) {
			const error = new Error('No se pudo ingresar la receta')
			error.errors = createErrors(errors)
			throw error
		}
		return errors
	} catch (error) {
		throw { httpCode: 422, message: error.message, errors: error.errors ?? [] }
	}
}

const createErrors = (errors) => {
	if (errors.length != 0) {
		return errors.map((error) => {
			return { message: error }
		})
	}
	return []
}

module.exports = { execute }
