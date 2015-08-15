var fs = require('fs');

module.exports = function (pth) {
  return new Promise(function (resolve, reject) {
    fs.exists(pth, function (exists) {
      resolve(exists);
    });
  });
}
