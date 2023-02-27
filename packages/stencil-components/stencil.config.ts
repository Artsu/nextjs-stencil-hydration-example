import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-components',
  srcDir: 'src',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle'
    },
    {
      type: 'dist-hydrate-script',
    },
    reactOutputTarget({
      componentCorePackage: 'stencil-components',
      proxiesFile: '../nextjs-hydration-demo/src/components/stencil-generated/index.ts',
    }),
  ],
};
