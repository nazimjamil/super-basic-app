import path from 'path';
import * as packageJson from '../package.json';

const config = {
  entry: './app/index.js',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [],
  resolve: {
    extensions: [
      '.js',
    ],
    modules: [
      '.',
      'app',
      'node_modules',
    ],
  },
};

export default config;
