'use strict'
const menuRepository = require('../../../data/repository/menu.repository')

const execute = async (menu) => {
  try {
    // TODO agregar llamado a blob storage para guardar imagen
    await insertMenu(menu)
  } catch (error) {
    throw error
  }
}

const insertMenu = async (menu) => {
  try {
    const result = await menuRepository.insertMenu(menu)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
