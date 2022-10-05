'use strict'
const categoriesRepository = require('../../../data/repository/categories.repository')
const categoryConverter = require('../../converter/category.converter')

const execute = async () => {
	try {
		const categoriesData = await listCategories()
		const categories = categoriesData.map((category) =>
			categoryConverter.parseCategoriesResponse(category)
		)
		return { categories }
	} catch (error) {
		throw error
	}
}

const listCategories = async () => {
	try {
		const result = await categoriesRepository.listCategories()
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
