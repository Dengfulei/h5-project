module.exports = {
  plugins: {
    // ...
    'postcss-px-to-viewport-8-plugin': {
      // options
      unitToConvert: 'px',
      // 设计稿的宽度
      viewportWidth: 375,
    },
  },
}

/**
 *  https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
 * 1 增加 postcss.config.ts
 */
