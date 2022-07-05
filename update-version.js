let exec = require('child_process').exec;
let package = require('./package.json');

let old_version = package.version;
let version = "";

let cmd = exec("semver " + old_version + " -i prerelease", function (err, stdout, stderr) {
  if (err) {
    console.log('err', err);
  }

  version = stdout;

  let cmd2 = exec("npm version " + version, function (err, stdout, stderr) {
    if (err) {
      console.log('err', err);
    }

    console.log('version update from ' + old_version + ' to ' + version);

  });

});

cmd.on('exit', function (code) {
  // return value from "npm build"
});

