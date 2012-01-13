var strf = function() {
  var args = Array.prototype.slice.call(arguments);
  var str = args.shift();
  var formatRegEx = /\{([^}]+)\}/g;
  if (args.length == 1 && typeof args[0] === "object")
    args = args[0];
  return str.replace(formatRegEx, function(_, match) { 
    var v = args[match]; 
    if (v === undefined)
      throw new Error("Missing Key "+match);
    else
      return v;
  }); 
};
