import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {};

config.paths = {
  sass: 'app/styles/**/*.scss',
  scripts: 'app/scripts/**/*.js',
  html: 'app/**/*.html',
  dist: 'dist/',
};

config.dest = {
  css: 'dist/css',
  scripts: 'dist/js',
  html: 'dist/',
};

config.webpack = {
  devtool: 'source-map',
  output: {
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true,
    }),
  ],
};

export default config;
