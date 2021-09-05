module.exports = {
    devServer: {
        // When we call api, we will fetch data from this link
      proxy: {
        '^/newsapi': {
          target: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=ZG0mUIe8AJlQ70QGY08p8GeSwVYbdTKc',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/newsapi': '/' },
        },
      },
    },
}