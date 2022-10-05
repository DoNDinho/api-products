'use strict'
const parseMeasureResponse = (measureData) => {
	return {
		code: measureData.ID_MEDIDA,
		name: measureData.DESCRIPCION
	}
}

module.exports = { parseMeasureResponse }
