module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@globalStyles': './src/assets/globalStyles.ts',
          '@components': './src/components/index.ts',
          '@config': './src/config/index.ts',
          '@constants': './src/constants/index.ts',
          '@contexts': './src/contexts/index.ts',
          '@data': './src/data/index.ts',
          '@helper': './src/helper/index.ts',
          '@hooks': './src/hooks/index.ts',
          '@models': './src/models/index.ts',
          '@navigation': './src/navigation/index.ts',
          '@screens': './src/screens/index.ts',
          '@utils': './src/utils/index.ts',
        },
      },
    ],
    // Reanimated plugin has to be listed last.
    // 'react-native-reanimated/plugin',
  ],
};
