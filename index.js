// * Query
let query = `
  SELECT pts FROM playoffs LIMIT 1
`

// ----------------------------

import executeQuery from './config.js'
executeQuery(query)
