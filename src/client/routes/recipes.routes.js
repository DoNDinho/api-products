const express = require('express')
const insertRecipeService = require('../../business/services/recipes/insert-recipes.service')
const deleteRecipesService = require('../../business/services/recipes/delete-recipe.service')
const updateRecipesService = require('../../business/services/recipes/update-recipe.service')
const router = express.Router()

router.post(`/Products/v1/menu/:idMenu/recipes`, async (req, res, next) => {
	try {
		const errors = await insertRecipeService.execute(req.body.recipe, req.params.idMenu)
		const message = 'Ingredientes registrados con exito'
		const response = { message, errors }
		logger.info({ message, data: JSON.stringify(response) })
		res.status(201).json(response)
	} catch (error) {
		console.log('error: ', error.message)
		next(error)
	}
})

router.patch('/Products/v1/recipes/:id', async (req, res, next) => {
	try {
		await updateRecipesService.execute(req.body.recipe, req.params.id)
		const message = 'Ingrediente modificado con exito'
		const response = { message }
		logger.info({ message, data: JSON.stringify(response) })
		res.json(response)
	} catch (error) {
		next(error)
	}
})

router.delete('/Products/v1/recipes/:id', async (req, res, next) => {
	try {
		await deleteRecipesService.execute(req.params.id)
		const message = 'Ingrediente eliminado con exito'
		const response = { message }
		logger.info({ message, data: JSON.stringify(response) })
		res.json(response)
	} catch (error) {
		next(error)
	}
})

module.exports = router
