const express = require('express')
const insertMenuService = require('../../business/services/menu/insert-menu.service')
const listMenuService = require('../../business/services/menu/list-menu.service')
const listMenuByIdService = require('../../business/services/menu/list-menu-by-id.service')
const deleteMenuService = require('../../business/services/menu/delete-menu.service')
const updateMenuService = require('../../business/services/menu/update-menu.service')
const router = express.Router()

router.post(`/Products/v1/menu`, async (req, res, next) => {
  try {
    await insertMenuService.execute(req.body.menu)
    const message = 'Menu registrado con exito'
    const response = { message }
    logger.info({ message, data: JSON.stringify(response) })
    res.status(201).json(response)
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.get('/Products/v1/menu', async (req, res, next) => {
  try {
    const categoryId = req.query.category ? parseInt(req.query.category) : null
    const menu = await listMenuService.execute(categoryId)
    const response = { menu }
    logger.info({ message: 'Menu obtenido', data: JSON.stringify(response) })
    res.json(response)
  } catch (error) {
    next(error)
  }
})

router.get('/Products/v1/menu/:id', async (req, res, next) => {
  try {
    const menu = await listMenuByIdService.execute(req.params.id)
    const response = { menu }
    logger.info({ message: 'Menu obtenido', data: JSON.stringify(response) })
    res.json(response)
  } catch (error) {
    next(error)
  }
})

router.patch('/Products/v1/menu/:id', async (req, res, next) => {
  try {
    await updateMenuService.execute(req.body.menu, req.params.id)
    const message = 'Menu modificado con exito'
    const response = { message }
    logger.info({ message, data: JSON.stringify(response) })
    res.json(response)
  } catch (error) {
    next(error)
  }
})

router.delete('/Products/v1/menu/:id', async (req, res, next) => {
  try {
    await deleteMenuService.execute(req.params.id)
    const message = 'Menu eliminado con exito'
    const response = { message }
    logger.info({ message, data: JSON.stringify(response) })
    res.json(response)
  } catch (error) {
    next(error)
  }
})

module.exports = router
