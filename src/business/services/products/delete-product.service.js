'use strict'
const productRepository = require('../../../data/repository/products.repository')

const execute = async (id) => {
  try {
    await deleteProduct(parseInt(id))
  } catch (error) {
    throw error
  }
}

const deleteProduct = async (id) => {
  try {
    const result = await productRepository.deleteProduct(id)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
