'use strict'
const menuRepository = require('../../../data/repository/menu.repository')
const { menuConverter } = require('../../converter/menu.converter')

const execute = async (categoryId) => {
  try {
    const menuData = await listMenu()
    const menu = menuData.map((plate) => menuConverter(plate, null))
    return menu.filter((m) => (categoryId ? m.category.code == categoryId : m))
  } catch (error) {
    throw error
  }
}

const listMenu = async () => {
  try {
    const result = await menuRepository.listMenu()
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
