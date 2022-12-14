'use strict'
const listCategories = () => {
  return {
    name: 'SP_LISTAR_ROLES',
    statements: [`CALL SP_LISTAR_CATEGORIAS();`],
    values: []
  }
}

const insertMenu = (menu) => {
  const idCategory = menu.category.code
  const name = menu.name
  const description = menu.description
  const amount = menu.price.amount
  const preparationTime = menu.preparation_time
  const isAvailable = menu.is_available

  return {
    name: 'SP_INSERTAR_MENU',
    statements: [
      `CALL SP_INSERTAR_MENU(${idCategory}, "${name}", "${description}", ${amount}, ${preparationTime}, ${isAvailable});`
    ],
    values: []
  }
}

const uploadImage = (id, image) => {
  return {
    name: 'SP_CARGAR_IMAGEN_MENU',
    statements: [`CALL SP_CARGAR_IMAGEN_MENU(${id}, "${image}");`],
    values: []
  }
}

const listMenu = () => {
  return {
    name: 'SP_LISTAR_MENU',
    statements: [`CALL SP_LISTAR_MENU();`],
    values: []
  }
}

const listMenuById = (id) => {
  return {
    name: 'SP_LISTAR_MENU_POR_ID',
    statements: [`CALL SP_LISTAR_MENU_POR_ID(${id});`],
    values: []
  }
}

const updateMenu = (menu, id) => {
  const idCategory = menu.category.code
  const name = menu.name
  const description = menu.description
  const amount = menu.price.amount
  const isAvailable = menu.is_available
  const preparationTime = menu.preparation_time

  return {
    name: 'SP_MODIFICAR_MENU',
    statements: [
      `CALL SP_MODIFICAR_MENU(${id}, ${idCategory}, "${name}", "${description}", ${amount}, ${preparationTime}, ${isAvailable});`
    ],
    values: []
  }
}

const deleteMenu = (id) => {
  return {
    name: 'SP_ELIMINAR_MENU',
    statements: [`CALL SP_ELIMINAR_MENU(${id});`],
    values: []
  }
}

const listMeasures = () => {
  return {
    name: 'SP_LISTAR_MEDIDAS',
    statements: [`CALL SP_LISTAR_MEDIDAS();`],
    values: []
  }
}

const insertRecipe = (recipe, idMenu) => {
  const idProduct = recipe.product.id
  const idMeasure = recipe.quantity.measure.code
  const quantity = recipe.quantity.value

  return {
    name: 'SP_INSERTAR_RECETA',
    statements: [
      `CALL SP_INSERTAR_RECETA(${idMenu}, ${idProduct}, ${idMeasure}, ${quantity});`
    ],
    values: []
  }
}

const updateRecipe = (recipe, idRecipe) => {
  const idProduct = recipe.product.id
  const idMeasure = recipe.quantity.measure.code
  const quantity = recipe.quantity.value

  return {
    name: 'SP_MODIFICAR_RECETA',
    statements: [
      `CALL SP_MODIFICAR_RECETA(${idRecipe}, ${idProduct}, ${idMeasure}, ${quantity});`
    ],
    values: []
  }
}

const deleteRecipe = (idRecipe) => {
  return {
    name: 'SP_ELIMINAR_RECETA',
    statements: [`CALL SP_ELIMINAR_RECETA(${idRecipe});`],
    values: []
  }
}

const insertProduct = (product) => {
  const name = product.name
  const stock = product.stock
  const measureCode = product.measure.code
  const minimumStock = product.minimum_stock
  return {
    name: 'SP_INSERTAR_PRODUCTO',
    statements: [
      `CALL SP_INSERTAR_PRODUCTO(${measureCode}, "${name}", ${stock}, ${minimumStock});`
    ],
    values: []
  }
}

const listProducts = () => {
  return {
    name: 'SP_LISTAR_PRODUCTO',
    statements: [`CALL SP_LISTAR_PRODUCTO();`],
    values: []
  }
}

const listProductById = (id) => {
  return {
    name: 'SP_LISTAR_PRODUCTO_POR_ID',
    statements: [`CALL SP_LISTAR_PRODUCTO_POR_ID(${id});`],
    values: []
  }
}

const updateProduct = (product, id) => {
  const name = product.name
  const stock = product.stock
  const measureCode = product.measure.code
  const minimumStock = product.minimum_stock
  return {
    name: 'SP_MODIFICAR_PRODUCTO',
    statements: [
      `CALL SP_MODIFICAR_PRODUCTO(${id}, ${measureCode}, "${name}", ${stock}, ${minimumStock});`
    ],
    values: []
  }
}

const deleteProduct = (id) => {
  return {
    name: 'SP_ELIMINAR_PRODUCTO',
    statements: [`CALL SP_ELIMINAR_PRODUCTO(${id});`],
    values: []
  }
}

module.exports = {
  listCategories,
  uploadImage,
  insertMenu,
  listMenu,
  listMenuById,
  updateMenu,
  deleteMenu,
  listMeasures,
  insertRecipe,
  updateRecipe,
  deleteRecipe,
  insertProduct,
  listProducts,
  listProductById,
  updateProduct,
  deleteProduct
}
