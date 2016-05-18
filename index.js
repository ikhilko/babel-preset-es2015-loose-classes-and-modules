var modify = require('modify-babel-preset');

var LOOSE = { loose: true };

module.exports = modify('es2015', {
    'transform-es2015-classes': LOOSE,
    'transform-es2015-modules-commonjs': LOOSE
});
