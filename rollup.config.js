import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/App.jsx', // Assuming the entry file is App.jsx
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'], // Make sure .jsx files are resolved
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'], // Support JSX files in Babel
    }),
  ],
};
