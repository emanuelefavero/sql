// * Query
let query = `
  SELECT players.full_name, playoffs.gp, playoffs.pts, playoffs.fg3_pct FROM players
  INNER JOIN playoffs ON players.id = playoffs.player_id
  WHERE playoffs.pts > 1000 AND playoffs.fg3a > 50
  ORDER BY playoffs.fg3_pct DESC
  LIMIT 20
`

// ----------------------------

import executeQuery from './config.js'
executeQuery(query)
