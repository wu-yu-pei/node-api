const connection = require('../app/database');

class CommentService {
  // 创建评论接口
  async create(momentId, content, id) {
    const sql = `INSERT INTO comment (content,moment_id,user_id) VALUES (?,?,?)`;
    const [result] = await connection.execute(sql, [content, momentId, id]);
    return result;
  }
  // 回复评论接口
  async reply(momentId, content, id, commentId) {
    const sql = `INSERT INTO comment (content,moment_id,user_id,comment_id) VALUES (?,?,?,?)`;
    const [result] = await connection.execute(sql, [
      content,
      momentId,
      id,
      commentId,
    ]);
    console.log(commentId);
    return result;
  }

  async update(content, commentId) {
    const sql = `UPDATE comment SET content = ? WHERE id = ?`;
    const [result] = await connection.execute(sql, [content, commentId]);
    return result;
  }
}

module.exports = new CommentService();
