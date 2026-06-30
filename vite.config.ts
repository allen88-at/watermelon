import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, Plugin} from 'vite';

// Custom plugin to inline CSS into the HTML and remove the external CSS file
// This eliminates the render-blocking CSS request, improving LCP and FCP.
function inlineCssPlugin(): Plugin {
  return {
    name: 'inline-css',
    enforce: 'post',
    generateBundle(options, bundle) {
      const htmlAsset = bundle['index.html'];
      if (!htmlAsset || htmlAsset.type !== 'asset' || typeof htmlAsset.source !== 'string') return;
      
      let html = htmlAsset.source;
      const cssAssets = Object.values(bundle).filter(
        (chunk) => chunk.type === 'asset' && chunk.fileName.endsWith('.css')
      );

      for (const css of cssAssets) {
        if (css.type === 'asset' && typeof css.source === 'string') {
          const basename = css.fileName.split('/').pop();
          if (!basename) continue;
          
          const regex = new RegExp(`<link[^>]*href="[^"]*${basename}"[^>]*>`);
          if (regex.test(html)) {
            html = html.replace(regex, `<style>${css.source}</style>`);
            delete bundle[css.fileName];
          }
        }
      }
      htmlAsset.source = html;
    }
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), inlineCssPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
