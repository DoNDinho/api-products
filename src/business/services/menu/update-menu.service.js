'use strict'
const menuRepository = require('../../../data/repository/menu.repository')

const execute = async (menu, id) => {
	try {
		// TODO agregar llamado a blob storage para guardar imagen
		await updateMenu(menu, parseInt(id), null)
	} catch (error) {
		throw error
	}
}

const updateMenu = async (menu, id, image) => {
	try {
		const result = await menuRepository.updateMenu(menu, id, image)
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
