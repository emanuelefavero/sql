import mysql from 'mysql2'

export default function executeQuery(query) {
  // Create a connection
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: 'password',
    database: 'test_db',
  })

  // Connect
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting: ' + err.stack)
      return
    }
    console.log('Connected as id ' + connection.threadId)
  })

  // * Run this query if you want to see all data
  // connection.query('SELECT * FROM users', (err, results) => {
  //   if (err) throw err

  //   console.log(results)
  // })

  connection.query(query, (err, results) => {
    if (err) throw err

    console.log('Query results:', results)
  })

  // Close the connection
  connection.end((err) => {
    if (err) {
      console.error('Error closing connection: ' + err.stack)
      return
    }
    console.log('Connection closed')
  })
}
