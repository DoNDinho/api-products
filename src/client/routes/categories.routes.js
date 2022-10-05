const express = require('express')
const listCategoriesService = require('../../business/services/categories/list-categories.service')
const router = express.Router()

router.get(`/Products/v1/categories`, async (req, res, next) => {
	try {
		const response = await listCategoriesService.execute()
		logger.info({ message: 'Categorias listadas', data: JSON.stringify(response) })
		res.json(response)
	} catch (error) {
		console.log('error: ', error.message)
		next(error)
	}
})
module.exports = router
