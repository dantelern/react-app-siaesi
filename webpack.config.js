module.exports = {
     resolve: {
         fallback: {
             "querystring": require.resolve("querystring-es3"),
             "http": require.resolve("stream-http"),
             "path": require.resolve("path-browserify"),
             "zlib": require.resolve("browserify-zlib"),
             "url": require.resolve("url/"),
             "crypto": require.resolve("crypto-browserify"),
             "stream": require.resolve("stream-browserify"),
             "buffer": require.resolve("buffer/"),
             "util": require.resolve("util/"),
             "net": require.resolve("net-browserify")
         }
     }
 };