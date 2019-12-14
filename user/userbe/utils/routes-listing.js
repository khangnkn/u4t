/* eslint-disable no-console */
function split(thing) {
  if (typeof thing === 'string') {
    return thing.split('/');
  } if (thing.fast_slash) {
    return '';
  }
  const match = thing.toString()
    .replace('\\/?', '')
    .replace('(?=\\/|$)', '$')
    .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
  return match
    ? match[1].replace(/\\(.)/g, '$1').split('/')
    : `<complex:${thing.toString()}>`;
}

function print(path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))));
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))));
  } else if (layer.method) {
    console.log('\x1b[32m%s\x1b[0m', `-> ${layer.method.toUpperCase()}\t/${path.concat(split(layer.regexp)).filter(Boolean).join('/')}`);
  }
}


module.exports = (app) => {
  console.log('============= routes =============');
  // eslint-disable-next-line no-underscore-dangle
  app._router.stack.forEach(print.bind(null, []));
};
