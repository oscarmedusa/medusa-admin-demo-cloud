import * as Vite from 'vite';

type MedusaVitePluginOptions = {
    /**
     * A list of directories to source extensions from.
     */
    sources?: string[];
};
type MedusaVitePlugin = (config?: MedusaVitePluginOptions) => Vite.Plugin;
declare const medusaVitePlugin: MedusaVitePlugin;

export { type MedusaVitePlugin, medusaVitePlugin as default };
