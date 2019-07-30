# streamjq

> Stream => JQ => Stream

# Install

```
npm install --save streamjq
```

# Troubleshoot

May need to install the following if installation fails

```
sudo apt-get install autoconf libtool automake build-essential
```

# Usage

```
const jq = require('streamjq')
const transformedStream = jq([READABLE_STREAM], [JQ_FILTER])
transformedStream.pipe(WRITABLE_STREAM)
```

# Example

```
const fetch = require('node-fetch');
const jq = require('streamjq')
const stream = require('stream')
fetch("https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjoge30sCiAgICAibGltaXQiOiAxMAogIH0KfQ==", { headers: { key: "1KJPjd3p8khnWZTkjhDYnywLB2yE1w5BmU" } })
.then(function(res) {
  return res.json()
})
.then(function(res) {
  let s = new stream.Readable()
  s.push(JSON.stringify(res.c))
  s.push(null);
  jq(s, "[.[] | { b0: .out[0].b0, blk: .blk }]").pipe(process.stdout)
})
```
