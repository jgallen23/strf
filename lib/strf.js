var strf = function() {
  var args = Array.prototype.slice.call(arguments);
  var str = args.shift();
  var formatRegEx = /\{([^}]+)\}/g;
  if (args.length == 1 && typeof args[0] === "object")
    args = args[0];
  return str.replace(formatRegEx, function(_, match) { 
    var key = match.split('.');
    var v = args;
    for (var i = 0; i < key.length; i++) {
       v = v[key[i]]; 
    }
    if (v === undefined) {
      throw new Error(str + " is missing key "+match);
    } else {
      return v;
    }
  }); 
};
if (typeof module != 'undefined' && module.exports) module.exports = strf;
