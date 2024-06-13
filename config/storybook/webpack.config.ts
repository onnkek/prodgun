import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {

  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: ''
  };


  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');

  config!.module!.rules!.push(buildCssLoader(true));



  config!.module = config.module || {};
  config!.module!.rules = config.module.rules || [];

  const imageRule = config!.module!.rules!.find((rule) => rule?.['test']?.test('.svg'));
  if (imageRule) {
    imageRule['exclude'] = /\.svg$/;
  }

  config!.module!.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config!.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://testapi.com'),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};