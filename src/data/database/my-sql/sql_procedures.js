'use strict'
const listCategories = () => {
	return {
		name: 'SP_LISTAR_ROLES',
		statements: [`CALL SP_LISTAR_CATEGORIAS();`],
		values: []
	}
}

const insertMenu = (menu, image) => {
	const idCategory = menu.category.code
	const name = menu.name
	const description = menu.description
	const amount = menu.price.amount
	const imageData = image ? `"${image}"` : 'NULL'
	const isAvailable = menu.is_available

	return {
		name: 'SP_INSERTAR_MENU',
		statements: [
			`CALL SP_INSERTAR_MENU(${idCategory}, "${name}", "${description}", ${amount}, ${imageData}, ${isAvailable});`
		],
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

const updateMenu = (menu, id, image) => {
	const idCategory = menu.category.code
	const name = menu.name
	const description = menu.description
	const amount = menu.price.amount
	const imageData = image ? `"${image}"` : 'NULL'
	const isAvailable = menu.is_available

	return {
		name: 'SP_MODIFICAR_MENU',
		statements: [
			`CALL SP_MODIFICAR_MENU(${id}, ${idCategory}, "${name}", "${description}", ${amount}, ${imageData}, ${isAvailable});`
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
		statements: [`CALL SP_INSERTAR_RECETA(${idMenu}, ${idProduct}, ${idMeasure}, ${quantity});`],
		values: []
	}
}

const updateRecipe = (recipe, idRecipe) => {
	const idProduct = recipe.product.id
	const idMeasure = recipe.quantity.measure.code
	const quantity = recipe.quantity.value

	return {
		name: 'SP_MODIFICAR_RECETA',
		statements: [`CALL SP_MODIFICAR_RECETA(${idRecipe}, ${idProduct}, ${idMeasure}, ${quantity});`],
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

module.exports = {
	listCategories,
	insertMenu,
	listMenu,
	listMenuById,
	updateMenu,
	deleteMenu,
	listMeasures,
	insertRecipe,
	updateRecipe,
	deleteRecipe
}
