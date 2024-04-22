/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest"/>
/// <reference types="vitest/globals"/>
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    base: '/',
    mode,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      react(),
      svgr({
        include: '**/*.svg?react',
        exclude: ''
      })
    ],
    esbuild: { drop: isDev ? [] : ['console', 'debugger'] },
    server: {
      port: 3000
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts']
    }
  }
})
