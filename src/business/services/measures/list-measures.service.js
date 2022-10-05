'use strict'
const measuresRepository = require('../../../data/repository/measure.repository')
const {parseMeasureResponse} = require('../../converter/measure.converter')

const execute = async () => {
	try {
		const measuresData = await listMeasures()
		const measures = measuresData.map((measure) =>
			parseMeasureResponse(measure)
		)
		return { measures }
	} catch (error) {
		throw error
	}
}

const listMeasures = async () => {
	try {
		const result = await measuresRepository.listMeasures()
		return result
	} catch (error) {
		throw { httpCode: 422, message: error.message }
	}
}

module.exports = { execute }
