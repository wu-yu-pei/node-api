const fs = require('fs')
const path = require('path')
// 这个库用来获取环境变量里面的值
const dotenv = require('dotenv')
// 调用config
dotenv.config()
// 就可以在process.env里面取值了

// 读入私钥和公钥
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname,"./keys/private.key"))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,"./keys/public.key"))


// 结构并导出
module.exports = {
    APP_PORT,
    MYSQL_PORT,
    MYSQL_HOST,
    MYSQL_ROOT,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env

module.exports. PRIVATE_KEY = PRIVATE_KEY
module.exports. PUBLIC_KEY = PUBLIC_KEY 