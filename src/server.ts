import app from "./app";

// 启动服务器
const server = app.listen(app.get("port"), () => {
  console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;