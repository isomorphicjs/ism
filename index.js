
exports.directive = function() {
  
};
exports.filter = function() {
  
};

exports.__isomorphic = function(path, options, fn) {
  fn(null, require("../../"+path));
}