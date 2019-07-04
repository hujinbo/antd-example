//umi配置文件
export default {
    plugins: [
        ['umi-plugin-react', {}],
    ],
    singular: true,//使用单数作为约定目录，如pages => page 存放页面代码文件
    routes: [{//配置式路由，启动后约定式路由会失效
        path: '/',
        component: './HelloWorld'
    }]
};