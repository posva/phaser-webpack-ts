// @ts-check
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { LicenseWebpackPlugin } = require('license-webpack-plugin')
const webpack = require('webpack')

const outputPath = resolve(__dirname, 'dist')

/** @typedef {import('webpack').Configuration} WebpackConfig */

/** @type {(env: Record<string, any>) => WebpackConfig} */
module.exports = (env = {}) => {
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

  // correctly add licenses
  /** @type {import('webpack').Plugin[]} */
  // @ts-ignore
  const extraPlugins = env.production ? [new LicenseWebpackPlugin()] : []
  const mode = env.production ? 'production' : 'development'

  let { devtool } = env

  devtool = devtool || (env.production ? undefined : 'inline-source-map')

  return {
    entry: [resolve(__dirname, 'src/index.ts')],
    mode,
    devtool,

    devServer: {
      contentBase: outputPath,
      // historyApiFallback: true,
      hot: true,
    },

    output: {
      path: outputPath,
      publicPath: '/',
      filename: 'bundle.js',
    },
    ...optimization,

    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
        {
          test: [/\.vert$/, /\.frag$/],
          use: 'raw-loader',
        },
        {
          test: /\.(gif|png|jpe?g|svg|xml)$/i,
          use: 'file-loader',
        },
      ],
    },

    resolve: {
      alias: {
        vue: resolve(__dirname, './node_modules/vue/dist/vue.esm.js'),
        phaser: resolve(__dirname, './lib/phaser.custom.js'),
      },
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.ts', '.json', '.js'],
    },

    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require(`./dist/dlls/library.${mode}.json`),
      }),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'index.html'),
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
