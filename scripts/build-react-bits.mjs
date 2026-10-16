import { build } from 'esbuild';
await build({
  entryPoints: ['src/react-bits/brach-react-bits.jsx'],
  bundle: true,
  minify: true,
  jsx: 'automatic',
  format: 'iife',
  target: ['es2020'],
  define: { 'process.env.NODE_ENV': '"production"' },
  outfile: 'js/dist/react-bits.js',
  legalComments: 'linked'
});
