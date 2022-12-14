const DEFAULT_CONFIG = {
  entryPoints: ['node_modules/@dytesdk/ui-kit/dist/types/exports.d.ts'],
  tsconfig: 'tsconfig.ui-kit.json',
  out: 'ui-kit/reference',
};

function getReferencePlugin(config) {
  const options = Object.assign({}, DEFAULT_CONFIG, config);

  // multi plugin support
  options.id = options.out;

  return ['docusaurus-plugin-typedoc', options];
}

module.exports = [
  getReferencePlugin(),
  
];
