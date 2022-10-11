'use strict'
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
global.logger = require('./business/utils/configs/log4js.config')
const healthRoute = require('./client/routes/health')
const categoriesRoutes = require('./client/routes/categories.routes')
const menuRoutes = require('./client/routes/menu.routes')
const measureRoutes = require('./client/routes/measures.routes')
const recipesRoutes = require('./client/routes/recipes.routes')
const productsRoutes = require('./client/routes/products.routes')
const { errorHandler } = require('./client/middlewares/error-handler/error-handler')
const port = process.env.PORT

const app = express()

// Configurando middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configurando rutas
app.use(healthRoute)
app.use(categoriesRoutes)
app.use(menuRoutes)
app.use(measureRoutes)
app.use(recipesRoutes)
app.use(productsRoutes)

app.use(async (err, req, res, next) => {
	await errorHandler(err, res)
})

// Iniciando servidor
app.listen(port, () => {
	logger.info('Servidor en puerto', port)
})
