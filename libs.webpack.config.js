const path = require('path')
const { LicenseWebpackPlugin } = require('license-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

module.exports = (env = {}) => {
  const mode = env.production ? 'production' : 'development'
  const extraPlugins = env.production ? [new LicenseWebpackPlugin()] : []
  const optimization = env.production
    ? {
        optimization: {
          minimizer: [
            new TerserPlugin({
              // removes the too many and duplicated licenses
              // we add them with the plugin instead
              terserOptions: { output: { comments: false } },
            }),
          ],
        },
      }
    : undefined

  return {
    mode,
    context: process.cwd(),
    resolve: {
      alias: {
        '@phaser': path.resolve(__dirname, './node_modules/phaser/src'),
      },
      extensions: ['.js', '.jsx', '.json', '.less', '.css'],
      modules: [path.resolve(__dirname, 'lib'), 'node_modules'],
    },

    entry: {
      library: ['phaser.custom'],
    },

    output: {
      filename: `[name].${mode}.dll.js`,
      path: path.resolve(__dirname, './dist/dlls'),
      library: '[name]',
    },
    ...optimization,

    plugins: [
      new webpack.DllPlugin({
        name: '[name]',
        path: `./dist/dlls/[name].${mode}.json`,
      }),
      ...extraPlugins,
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
        CANVAS_RENDERER: JSON.stringify(true),
        WEBGL_RENDERER: JSON.stringify(true),
      }),
    ],
  }
}
