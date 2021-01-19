// Set up MySQL connection
const mysql = require ("mysql");

// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "MySql@&2014",
//     database: "pizza_db"
// });

//Hooking up project with JawsDB for heroku.
const connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "MySql@&2014",
        database:  "pizza_db"
    })
};

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;