const mysql = require('mysql2')
const config = require('./config')

// 配置需要连接的数据库
const connects = mysql.createPool({
    host:config.MYSQL_HOST,
    port:MYSQL_PORT,
    database:MYSQL_DATABASE,
    user:MYSQL_ROOT,
    password:MYSQL_PASSWORD,
    connectionLimit:10
})

// 测试是否连接成功
connects.getConnection((err) => {
    if(err) {
        console.log("连接数据库失败");
    }else {
        console.log('连接数据库成功');
    }
})

// 导出promise
module.exports = connects.promise()