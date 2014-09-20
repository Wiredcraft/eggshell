var path = require('path');
var bourbon = require('node-bourbon');

function includePaths() {
  bourbon.includePaths.push(path.join(__dirname, 'assets'))
  return bourbon.includePaths;
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};
