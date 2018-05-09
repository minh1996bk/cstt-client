var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cstt',
});

connection.connect();
// sua bang benh
connection.query("alter table `result` modify `solution` longtext character set utf8 collate utf8_vietnamese_ci;", function(err, res) {
    if (err) return console.error(err);
    else {
        console.log("1 column modified");
    }
});

connection.query("alter table `result` modify `name` varchar(255) character set utf8 collate utf8_vietnamese_ci;", function(err, res) {
    if (err) return console.error(err);
    else {
        console.log("1 column modified");
    }
});
// sua bang fact
connection.query("alter table `fact` modify `newevent` varchar(255) character set utf8 collate utf8_vietnamese_ci;", function(err, res) {
    if (err) return console.error(err);
    else {
        console.log("1 column modified");
    }
});

connection.query("alter table `fact` modify `contact` varchar(255) character set utf8 collate utf8_vietnamese_ci;", function(err, res) {
    if (err) return console.error(err);
    else {
        console.log("1 column modified");
    }
});
// sua bang su kien
connection.query("alter table `events` modify `name` varchar(255) character set utf8 collate utf8_vietnamese_ci;", function(err, res) {
    if (err) return console.error(err);
    else {
        console.log("1 column modified");
    }
});

connection.end();