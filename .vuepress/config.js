module.exports = {
  base: '/kibana-user-guide/',
  title: 'kibana用户手册[中文版]',
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'kibana用户手册[中文版]'
    }
  },
  serviceWorker: {},
  themeConfig: {
    repo: 'Anonymity94/kibana-user-guide',
    lastUpdated: '上次更新',
    // 默认是 false, 设置为 true 来启用
    // editLinks: true, // 暂时关闭
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',
    // docsDir: 'docs',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    },
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '起源', link: '/start/' },
          { text: '手册', link: '/docs/' }
        ],
        sidebar: {
          '/docs/': [
            {
              collapsable: false,
              children: [
                '',
                'setup',
                'install',
                'dashboard/',
                'dashboard/create-new-dashboard'
              ]
            }
          ],
        }
      }
    }
  },
  plugins: [['@vuepress/back-to-top', true], ['@vuepress/medium-zoom', true]]
}
