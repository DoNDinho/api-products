const express = require('express')
const listMeasureService = require('../../business/services/measures/list-measures.service')
const router = express.Router()

router.get(`/Products/v1/measures`, async (req, res, next) => {
	try {
		const response = await listMeasureService.execute()
		logger.info({ message: 'Medidas listadas', data: JSON.stringify(response) })
		res.json(response)
	} catch (error) {
		console.log('error: ', error.message)
		next(error)
	}
})
module.exports = router
