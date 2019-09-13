const spawn = require('child_process').spawn;
const run = function(stream, filter, error) {
  const child = spawn('node_modules/streamjq/bin/jq', [filter]);
  stream.pipe(child.stdin)
  if (error) child.stdin.on("error", error)
  return child.stdout
}
module.exports = run
