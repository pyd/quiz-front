const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb({
      eslint: {
        // issue with linebreak between win & ubuntu
        rules: {
          "linebreak-style": 0
        }
      }
    }),
    react({
      html: {
        title: 'quiz-frontend'
      }
    }),
    jest(),
    // (neutrino) => {
    //   neutrino.config.module
    //   .rule('style')
    //   .use('css')
    //   .options({ modules: true });
    // }
  ],
  style: {
    loaders: [
      { loader: 'sass-loader', userId: 'sass' },
    ],
    test: /\.(css|sass)$/,
    moduleTest: /\.module.(css|sass)$/
  },
};
