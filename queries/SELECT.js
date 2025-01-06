// * SELECT query
let query = `
  SELECT name FROM users
`

// * SELECT all rows from the table
// query = `
//   SELECT * FROM users
// `

// * SELECT multiple columns
// query = `
//   SELECT name, age FROM users
// `

// ----------------------------

const executeQuery = require('../config')
executeQuery(query)
