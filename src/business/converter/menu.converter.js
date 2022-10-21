'use strict'
const menuConverter = (menuData, recipeData) => {
  const menu = {
    id: menuData.ID_MENU,
    category: {
      code: menuData.ID_CATEGORIA,
      name: menuData.DESCRIPCION_CATEGORIA
    },
    name: menuData.NOMBRE,
    description: menuData.DESCRIPCION,
    price: {
      amount: menuData.VALOR
    },
    image: menuData.IMAGEN ?? null,
    preparation_time: menuData.TIEMPO_PREP,
    is_available: menuData.DISPONIBLE == 1 ? true : false
  }
  if (recipeData) menu.recipe = recipeData
  return menu
}

module.exports = { menuConverter }
