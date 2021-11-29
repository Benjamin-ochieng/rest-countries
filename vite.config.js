/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => /^x-/.test(tag),
          },
        },
      }),
      vueJsx()
    ),
  ],
});
