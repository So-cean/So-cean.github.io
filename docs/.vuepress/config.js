import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

import { path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Melo',
  description: 'Melo community',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Model', link: '/model/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: {
      '/model/': [
        '',
        'model1',
        'model2',
      ],
      '/about/': [
        '',
        'step1',
        'step2'
      ]
    }
  }),
  // theme: 'reco',
  plugins: [
    [backToTopPlugin()],
    // ["@vuepress/medium-zoom"],
    // ["@vuepress/img-lazy"],
    [ registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './components') })],

  ],
  // bundler: viteBundler({
  //   viteOptions: {
  //     css: {
  //       preprocessorOptions: {
  //         css: {
  //           // Import Font Awesome globally
  //           additionalData: `@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';`
  //         }
  //       }
  //     }
  //   }
  // }),
  bundler: viteBundler(),
})
