const path = require('path')

// 路径指向根目录
exports.resolve = function(dir) {
    return path.join(__dirname, './../', dir)
}
