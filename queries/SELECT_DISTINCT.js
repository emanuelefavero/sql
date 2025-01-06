// * SELECT DISTINCT
// Return only distinct (different) values
let query = `
  SELECT DISTINCT name FROM users
`

// * COUNT DISTINCT
// Return the number of unique values in a column
query = `
  SELECT COUNT(DISTINCT name) FROM users`

// ----------------------------

const executeQuery = require('../config')
executeQuery(query)
