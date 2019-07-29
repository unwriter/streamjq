const spawn = require('child_process').spawn;
const run = function(stream, filter) {
  const child = spawn('node_modules/streamjq/bin/jq', [filter]);
  stream.pipe(child.stdin)
  return child.stdout
}
module.exports = run
