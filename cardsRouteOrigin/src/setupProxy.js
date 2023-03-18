const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("itgirlschool", {
      target: "http://itgirlschool.justmakeit.ru",
      changeOrigin: true,
      pathRewrite: {
        itgirlschool: "",
      },
    })
  );

  app.use(
    createProxyMiddleware("/pokeapi", {
      target: "http://pokeapi.co",
      changeOrigin: true,
      pathRewrite: {
        "/pokeapi": "",
      },
    })
  );
};
