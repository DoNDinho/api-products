'use strict'
const imageRepository = require('../../../data/repository/image.repository')
const serviceConsume = require('../../utils/http-consumer/http-consumer.service')

const execute = async (id, name, image) => {
  try {
    if (!image) return
    const { image: cleanImage, type } = cleanData(image)
    const fileResponse = await consumeApiFiles(id, name, type, cleanImage)
    await uploadImage(id, fileResponse.file.url)
  } catch (error) {
    console.log('Error al insertar imagen ', error.message)
  }
}

const uploadImage = async (id, image) => {
  try {
    const result = await imageRepository.uploadImage(id, image)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

const cleanData = (image) => {
  const type = image.replace(/^data:image\//, '').split(';')[0]
  const data = image.replace(`data:image/${type};base64,`, '')
  return { image: data, type }
}

const consumeApiFiles = async (id, name, type, image) => {
  try {
    const url = process.env.API_FILES
    const headers = { 'Content-Type': 'application/json' }
    const body = {
      file: {
        name: `${name}-${id}`,
        type,
        base64: image
      }
    }
    return await serviceConsume.post({ url, headers, body })
  } catch (error) {
    throw error
  }
}

module.exports = { execute }
