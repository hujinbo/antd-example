// 这里不能使用 export default 这样的 ES6 的语法，因为它是被 jest 直接读取的，不会被 umi 编译。
module.exports = {
    testURL: 'http://localhost:7001',
};