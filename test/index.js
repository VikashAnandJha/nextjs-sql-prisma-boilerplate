const sql = require("msnodesqlv8");
const connectionString =
  "server=localhost;Database=testdb;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";
const query = "SELECT * FROM users";
sql.query(connectionString, query, (err, rows) => {
  console.log({ err });
  console.log(rows);
});
