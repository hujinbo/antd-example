//umi配置文件
export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,//umi将实现按需编译
            dva: true,//引入DVA
            locale: {//打开国际化umi-plugin-locale插件
                enable: true
            }
        }],
    ],
    singular: true,//使用单数作为约定目录，如pages => page 存放页面代码文件
    routes: [{//配置式路由，启动后约定式路由会失效
        path: '/',//页面访问路径
        component: '../layout',//基于page目录的相对路径， page下的文件名
        routes: [//HelloWorld会使用layout的布局，因为umi会把HelloWorld放置layout的this.props.children
            {
                path: '/',//默认展示Helloworld页面
                component: 'Helloworld',
            },
            {
                path: '/helloworld',
                component: 'Helloworld'
            },
            {
                path: '/dashboard',
                routes: [//访问/dashboard/analysis时，使用page文件夹下的Dashboard/Analysis组件渲染到layout文件中children部分
                    {path: '/dashboard/analysis', component: 'Dashboard/Analysis'},
                    {path: '/dashboard/monitor', component: 'Dashboard/Monitor'},
                    {path: '/dashboard/workplace', component: 'Dashboard/Workplace'}
                ]
            },
            {path: 'puzzlecards', component: './puzzlecards'},
            {path: 'list', component: '../page/list'},
            {path: 'css-modules', component: 'css-modules'},
            {path: 'css-modules-with-less', component: 'css-modules-with-less'},
            {path: 'css-modules-with-antd', component: 'css-modules-with-antd'},
            {path: 'locale', component: './locale'},
            {path: 'TypeScriptDemo', component: './TypeScriptDemo'}
        ]
    }],
    proxy: {
        '/dev': {//以dev开头的，那么就转发到远端target
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        }
    },
    theme: {//更换antd主题，通过修改less变量（modifyVars）实现
        "@primary-color": "#0566b7",
    }
}
;