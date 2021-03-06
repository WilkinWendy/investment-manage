const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463

   */
  /*
  pages: {
    index: {
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@views', resolve('src/views'))

    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap((options) => {
        options.fix = true
        return options
      })
  },

  css: {
    loaderOptions: {
    }
  },

  devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'https://localhost/api/v1',
    //     ws: false,
    //     changeOrigin: true
    //   },
    // }
  },

  assetsDir: 'static',
  runtimeCompiler: true,
  publicPath: './',
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './server'
    },
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  }
}
