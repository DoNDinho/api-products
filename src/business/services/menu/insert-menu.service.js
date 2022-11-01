'use strict'
const menuRepository = require('../../../data/repository/menu.repository')
const imageService = require('../images/image.service')

const execute = async (menu) => {
  try {
    const menuData = await insertMenu(menu)
    const name = 'menu'
    // imageService.execute(menuData[0].ID_MENU, name, menu.image)
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
