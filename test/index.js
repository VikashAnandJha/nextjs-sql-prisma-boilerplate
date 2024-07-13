const sql = require("msnodesqlv8");
const connectionString =
  "sqlserver://localhost:1433;database=testdb;integratedSecurity=true;trustServerCertificate=true;";
const query = "SELECT * FROM users";
sql.query(connectionString, query, (err, rows) => {
  console.log({ err });
  console.log(rows);
});
