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

import executeQuery from '../config.js'
executeQuery(query)
