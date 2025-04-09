import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts', 'src/**/*.ts'],  // 入口文件
  format: ['cjs', 'esm'],              // 输出格式
  dts: true,                           // 生成类型声明文件
  splitting: false,                    // 不拆分代码
  sourcemap: true,                     // 生成 sourcemap
  clean: true,                         // 构建前清理输出目录
  minify: false,                       // 不压缩代码
  outDir: 'dist',                      // 输出目录
  target: 'node20',                    // 目标 Node.js 版本
  platform: 'node',                    // 平台
  bundle: false,                       // 不打包依赖
  treeshake: true,                     // 启用 tree-shaking
  external: ['axios', 'openai'],       // 外部依赖
});
