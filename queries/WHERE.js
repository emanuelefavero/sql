// * WHERE
let query = `
  SELECT * FROM users WHERE age < 30
`

// * WHERE with AND
query = `
  SELECT * FROM users WHERE age < 30 AND name = 'Jesse'
`

// * WHERE with OR
query = `
  SELECT * FROM users WHERE age < 30 OR age > 50
`

// * WHERE with IN
query = `
  SELECT * FROM users WHERE age IN (25, 30)
`

// * WHERE with NOT IN
query = `
  SELECT * FROM users WHERE age NOT IN (25, 30)
`

// * WHERE with BETWEEN
query = `
  SELECT * FROM users WHERE age BETWEEN 25 AND 30
`

// * WHERE with NOT BETWEEN
query = `
  SELECT * FROM users WHERE age NOT BETWEEN 25 AND 30
`

// * WHERE with LIKE
// Select all rows where the name starts with 'J'
query = `
  SELECT * FROM users WHERE name LIKE 'J%'
`

/*
 * WHERE Operators
 * =        Equal
 * >        Greater than
 * <        Less than
 * >=       Greater than or equal
 * <=       Less than or equal
 * <>       Not equal, also written as !=
 * BETWEEN  Between an inclusive range
 * LIKE     Search for a pattern
 * IN       To specify multiple possible values for a column
 */

// ----------------------------

const executeQuery = require('../config')
executeQuery(query)
