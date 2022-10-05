'use strict'
const menuRepository = require('../../../data/repository/menu.repository')

const execute = async (id) => {
	try {
		await deleteMenu(parseInt(id))
	} catch (error) {
		throw error
	}
}

const deleteMenu = async (id) => {
	try {
		const result = await menuRepository.deleteMenu(id)
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
