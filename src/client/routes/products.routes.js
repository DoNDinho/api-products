const express = require('express')
const insertProductService = require('../../business/services/products/insert-product.service')
const listProductService = require('../../business/services/products/list-products.service')
const lisProductByIdService = require('../../business/services/products/list-product-by-id.service')
const deleteProductService = require('../../business/services/products/delete-product.service')
const updateProductService = require('../../business/services/products/update-product.service')
const router = express.Router()

router.post(`/Products/v1/products`, async (req, res, next) => {
	try {
		await insertProductService.execute(req.body.menu)
		const message = 'Producto registrado con exito'
		const response = { message }
		logger.info({ message, data: JSON.stringify(response) })
		res.status(201).json(response)
	} catch (error) {
		console.log('error: ', error.message)
		next(error)
	}
})

router.get('/Products/v1/products', async (req, res, next) => {
	try {
		const products = await listProductService.execute()
		const response = { products }
		logger.info({ message: 'Productos obtenidos', data: JSON.stringify(response) })
		res.json(response)
	} catch (error) {
		next(error)
	}
})

router.get('/Products/v1/products/:id', async (req, res, next) => {
	try {
		const product = await lisProductByIdService.execute(req.params.id)
		const response = { product }
		logger.info({ message: 'Producto obtenido', data: JSON.stringify(response) })
		res.json(response)
	} catch (error) {
		next(error)
	}
})

router.patch('/Products/v1/products/:id', async (req, res, next) => {
	try {
		await updateProductService.execute(req.body.menu, req.params.id)
		const message = 'Producto modificado con exito'
		const response = { message }
		logger.info({ message, data: JSON.stringify(response) })
		res.json(response)
	} catch (error) {
		next(error)
	}
})

router.delete('/Products/v1/products/:id', async (req, res, next) => {
	try {
		await deleteProductService.execute(req.params.id)
		const message = 'Producto eliminado con exito'
		const response = { message }
		logger.info({ message, data: JSON.stringify(response) })
		res.json(response)
	} catch (error) {
		next(error)
	}
})

module.exports = router
