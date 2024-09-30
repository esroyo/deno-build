import * as esbuild from 'npm:esbuild';
import { denoPlugins } from 'jsr:@luca/esbuild-deno-loader';
import { resolve } from 'jsr:@std/path';

await esbuild.build({
  // plugins: [...denoPlugins({ configPath: resolve('./deno.json') })],
  entryPoints: ['./main.ts'],
  outfile: './dist/out.js',
  bundle: true,
  format: 'esm',
  platform: 'node',
});
