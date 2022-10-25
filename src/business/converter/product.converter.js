'use strict'
const productConverter = (productData) => {
  const product = {
    id: productData.ID_PRODUCTO,
    name: productData.NOMBRE,
    measure: {
      code: productData.ID_MEDIDA,
      name: productData.DESCRIPCION_MEDIDA
    },
    stock: productData.STOCK,
    minimum_stock: productData.CANT_MINIMA
  }
  return product
}

module.exports = { productConverter }
