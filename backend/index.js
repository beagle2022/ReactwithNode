const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const pool=require('./config/db.js');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);

//MySQL DB Connection
pool.getConnection((err, conn) => {   

    if(err) throw err;
    const user='ab';
    const fname='Abhishek B';
    const qry='INSERT INTO users(username, fullname, entrydate) VALUES(?,?,Now())';

    conn.query(qry,[user,fname],(err,result) => {
        conn.release();
        if(err) throw err;
        console.log(result);
});

const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
