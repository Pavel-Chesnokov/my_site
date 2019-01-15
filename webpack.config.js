const path = require('path')
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
 

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'},
        devServer: {
            contentBase: path.join(__dirname, 'src'),
            compress: true,
            port: 9000
          },

          plugins: [
            new BrowserSyncPlugin(
              // BrowserSync options
              {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 3000,
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/)
                // through BrowserSync
                proxy: 'http://localhost:3100/'
              },
              // plugin options
              {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
              }
            )
          ]
    /* plugins: [
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                server: { baseDir: ['dist']
            })
        ] */
    }