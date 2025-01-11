import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'
import vituum from 'vituum';
import posthtml from '@vituum/vite-plugin-posthtml';
import posthtml_extend from 'posthtml-extend';
import posthtml_include from 'posthtml-include';
import posthtml_expressions from 'posthtml-expressions';
import posthtml_modules from 'posthtml-modules';
import localsConfig from "./localsConfig.js";

export default ({ mode }) => {
  const locals = localsConfig(mode);
  return {
      base: mode === 'development' ? '/' : '/test_order-page/',
      plugins: [
        VitePluginSvgSpritemap('./src/assets/img/icons/*.svg', {
          route: 'assets/spritemap',
          output: {
            name: 'spritemap.svg',
            filename: '[name][extname]'
          },
        }),
        vituum({
            normalizeBasePath: true
        }),
        posthtml({
          root: './src',
          removeScriptLocals: true,
          plugins: [
            posthtml_extend({
                root: './src',
                strict: false,
                encoding: 'utf8',
                expressions: {
                  locals
                }
            }),
            posthtml_include({
                root: './src',
                posthtmlExpressionsOptions: {
                  locals
                },
            }),
            posthtml_modules({
                root: './src',
                locals
            }),
            posthtml_expressions({
              removeScriptLocals: true,
              conditionalTags: ['if', 'elseif', 'else'],
              switchTags: ['switch', 'case', 'default'],
              loopTags: ['each'],
              locals
            })
          ]
        })
      ],
      build: {
        assetsInlineLimit: 0,
        rollupOptions: {
          output: {
            dir: 'dist/',
            chunkFileNames: 'assets/js/[name].js',
            entryFileNames: 'assets/js/[name].js',
            assetFileNames: ({ name }) => {
              if (/\.(eot|ttf|woff2?)$/.test(name ?? '')) {
                return 'assets/fonts/[name][extname]';
              }
              if (/^(?!icon-).+\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                return 'assets/images/[name][extname]';
              }
              if (/^(?=icon-).+\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                 return 'assets/icons/[name][extname]';
              }
              if (/\.css$/.test(name ?? '')) {
                return 'assets/css/[name][extname]';
              }
              return 'assets/[name][extname]';
            },
          },
        },
      },
  };
};
