'use strict';

if (process.platform !== 'darwin') {
  throw new Error('Only OSX is supported right now. Please help and submit code to make it work on Win/Linux!');
}

module.exports = function setBackground(image) {
  var osa = 'set desktopImage to POSIX file ' + JSON.stringify(image) + '\ntell application "Finder"\n    set desktop picture to desktopImage\nend tell';

  var proc = require('child_process').spawn('osascript', ['-e', osa]);
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
  proc.on('exit', function (code) {
    process.on('exit', function () {
      process.exit(code);
    });
  });

};
