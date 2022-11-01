'use strict'
const MySqlClient = require('../database/my-sql/client')
const MySqlRunner = require('../database/my-sql/runner')
const sqlProcedures = require('../database/my-sql/sql_procedures')

const uploadImage = async (id, image) => {
  try {
    const mySqlClient = await MySqlClient.getInstance()
    const procedure = sqlProcedures.uploadImage(id, image)
    const sqlRunner = new MySqlRunner(mySqlClient)
    const result = await sqlRunner.runProcedure(procedure)
    console.log(JSON.stringify(result))
    return result.pop()[0]
  } catch (error) {
    throw error
  }
}

module.exports = { uploadImage }
