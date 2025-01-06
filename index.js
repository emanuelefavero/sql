// * Query
let query = `
  SELECT * FROM users
`

// ----------------------------

const executeQuery = require('./config')
executeQuery(query)
