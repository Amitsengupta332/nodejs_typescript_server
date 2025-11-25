import http, { IncomingMessage, Server, ServerResponse } from "http";
import path from "path";
import config from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running");
    // root route
    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Hello Nodejs with Typescript",
          path: req.url,
        })
      );
    }

    // health route
    if (req.url == "/api" && req.method == "GET") {
    }

    if (req.url == "/api/users" && req.method == "POST") {
      // const user = {
      //   id: 1,
      //   name: "Amit",
      // };
      // res.writeHead(200, { "Content-Type": "application/json" });
      // res.end(JSON.stringify(user));

      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        try {
          const parseBody = JSON.parse(body);
          res.end(
            JSON.stringify(parseBody)
          );
          // console.log()
        } catch (error: any) {
          console.log(error?.message);
        }
        // const parseBody = JSON.parse(body);
        // console.log()
      });
    }
  }
);

server.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`);
});
