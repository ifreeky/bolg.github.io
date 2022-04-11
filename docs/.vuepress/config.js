module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '学习笔记',
    description: '学习笔记',

    // 主题和它的配置
    theme: 'vuepress-theme-foo',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar:[
            {text: '首页', link: '/'},
            {text: 'LeetCode', link: '/LeetCode/'},
            {text: 'Java', link: '/Java/'},
        ]
    },
}