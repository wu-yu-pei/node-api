const connection = require('../app/database.js')

class MomentService {
    async createMoment(user) {
        const {id,content} =  user

        const sql = "INSERT INTO moment (content,user_id) VALUES (?,?)"

        let [result] =  await connection.execute(sql,[content,id])

        return result
    }
    
    async getOneMomentById(id) {
        // 此sql语句 有想法 值得学习
        const sql = `SELECT 
                    m.id id, m.content content, m.createAt createAt, m.updateAt updateAt,
                    JSON_OBJECT('id',u.id,'name',u.name) user 
                    from moment m LEFT JOIN user u 
                    ON m.user_id = u.id 
                    where m.id = ?`
        let [result] =  await connection.execute(sql,[id])

        return result
    }

    async getMomentLise(offset,zize) {
        // 此sql语句 有想法 值得学习
        const sql = `SELECT 
                    m.id id, m.content content, m.createAt createAt, m.updateAt updateAt,
                    JSON_OBJECT('id',u.id,'name',u.name) user 
                    from moment m LEFT JOIN user u 
                    ON m.user_id = u.id 
                    LIMIT ?,?`
        let [result] =  await connection.execute(sql,[offset,zize])

        return result
    }
    // 修改moment
    async updateMoment(content,mometId) {
        const sql = "UPDATE moment SET content = ? WHERE id = ?"
        const [result] = await connection.execute(sql,[content,mometId])
        return result
    }

     // 删除moment
     async removeMoment(mometId) {
        const sql = "DELETE FROM moment WHERE id = ?"
        const [result] = await connection.execute(sql,[mometId])
        return result
    }
} 

module.exports = new MomentService()