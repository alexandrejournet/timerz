let exec = require('child_process').exec;

let version = "";

let cmd = exec("semver 0.0.0-alpha.0 -i prerelease", function (err, stdout, stderr) {
  if (err) {
    // handle error
  }

  version = stdout;
  console.log('version ', version);
  version.replace("\\n", "");

  let cmd2 = exec("npm version " + version, function (err, stdout, stderr) {
    if (err) {
      console.log('err', err);
    }

    console.log('out', stdout);
    console.log('err', stderr);
    console.log('version update to', version);

  });

});

cmd.on('exit', function (code) {
  // return value from "npm build"
});

