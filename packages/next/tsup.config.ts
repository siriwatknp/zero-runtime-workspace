import { Options, defineConfig } from 'tsup';
import config from '../../tsup.config';

const configOptions = config as Options;

const baseConfig: Options = {
  ...configOptions,
  tsconfig: './tsconfig.build.json',
  cjsInterop: true,
  entry: ['./src/index.ts', './src/next-font.ts'],
};

export default defineConfig(baseConfig);
