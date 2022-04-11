module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '程序员微光',
    description: '闻道有先后，术业有专攻',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'logo.jpeg',
        navbar:[
            {text: '首页', link: '/'},
            {text: 'LeetCode', link: '/leetCode/'},
            {text: 'Java', link: '/Java/'},
        ],
        sidebar: {
            '/leetCode/': [
                'URL化.html'
            ]
        }
    },
}