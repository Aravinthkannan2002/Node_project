const mysql = require('mysql');

const mysqlcon = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root@123',
    database:'databasetask3',
});


mysqlcon.connect((error)=>{
if (error) {
    console.log({msg:'db connection error',error:error})
} else {
   
    console.log({msg:'db connected succusefully'})
}
})

module.exports=mysqlcon;
