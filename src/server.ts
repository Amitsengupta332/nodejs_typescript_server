import http, { IncomingMessage, Server, ServerResponse } from "http";
import path from "path";
import config from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running");

    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Hello Nodejs with Typescript",
          path: req.url,
        })
      );
    }
  }
);

server.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`);
});
