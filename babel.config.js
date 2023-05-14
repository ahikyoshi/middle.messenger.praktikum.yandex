module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' }, useBuiltIns: 'entry', corejs: '3.24.1' },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
};


// module.exports = api => {
//     // Cache configuration is a required option
//     api.cache(false);
  
//     const presets = [
//       "@babel/preset-typescript",
//       "@babel/preset-env"
//     ];
  
//     return { presets };
//   };