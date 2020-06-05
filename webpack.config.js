const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirPath = (customPath) => path.resolve(__dirname, customPath || '.' )
const entryPath = (entryFilename) => `${dirPath('src')}/${entryFilename}`;
// const outputPath = (ou) => dirPath('dist');
const config = {
  entry: {
    hello: entryPath('index.tsx'),
  },
  output: {
    filename: '[name].min.js',
    path: dirPath('dist'),
    publicPath: "/"
  },
  target: "web",

  // Enable sourcemaps for debugging webpack's output.
  

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: './src/templates/base.html',
      // filename: dirPath('./src/templates/index.html'),
    })
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  devServer: {
    contentBase: '.',
    port: 9000,
    allowedHosts: [
      'host.com',
      'subdomain.host.com',
      'subdomain2.host.com',
      'host2.com',
      'localhost',
      '127.0.0.1'
    ]
  },
};
module.exports = (env, argvs ) => {
  if(argvs.mode === 'development'){
    config.devtool = "source-map";
  }
  if(argvs.mode === 'production'){

  }

  return config;

}