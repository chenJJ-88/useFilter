import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'useFilter',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'antd', '@ant-design/icons'],
      output: {
        globals: {
          react: 'React',
          antd: 'antd',
          '@ant-design/icons': 'AntdIcons',
        },
      },
    },
  },
});