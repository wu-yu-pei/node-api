const app = require('./app/index')

const config = require('./app/config.js')

app.listen(config.APP_PORT,() => {
    console.log(`服务器端口:${config.APP_PORT} 启动成功✈✈··`);
})