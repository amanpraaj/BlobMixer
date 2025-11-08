import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  base: '/BlobMixer/', // 👈 IMPORTANT: repo ka naam daalo yahan
  plugins: [glsl()],
});
