const connection = require('../app/database.js')
class AuthService {
    async checkMoment(momentId,userId) {
        const sql = "SELECT * FROM moment where id = ? and user_id = ?"

        const [result] = await connection.execute(sql,[momentId,userId])
        
        return result.length === 0 ? false : true
    }
}
module.exports = new AuthService()