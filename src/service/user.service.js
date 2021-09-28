const connection = require('../app/database.js')

class UserService {
    async create(user) {
        // 解构取值
        const {name,password} = user

        // sql语句
        const sql = "INSERT INTO user (name,password) VALUES (?,?)"

        // 操作数据库
        await connection.execute(sql,[name,password])
        
    }

    async getUserByName(name) {
        // sql语句
        const sql = "SELECT * FROM user where name = ?"

        // 操作数据库
        let res =  await connection.execute(sql,[name])
        
        // 数据布冯在0索引
        return res[0]
    }
}

module.exports = new UserService()