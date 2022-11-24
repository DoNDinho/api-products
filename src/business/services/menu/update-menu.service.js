'use strict'
const menuRepository = require('../../../data/repository/menu.repository')

const execute = async (menu, id) => {
	try {
		await updateMenu(menu, parseInt(id))
	} catch (error) {
		throw error
	}
}

const updateMenu = async (menu, id) => {
	try {
		const result = await menuRepository.updateMenu(menu, id)
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
