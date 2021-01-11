const express = require("express");
const morgan = require("morgan");
const app = express();

class App {
  constructor() {
    this.server = express();
    app.use(morgan("dev"));
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Header",
        "Origin, C-Requrested-With, Content-Type, Accept, Authorization"
      );

      if (req.method === "OPTIONS") {
        res.header(
          "Access-Control-Allow-Methods",
          "PUT, POST, PATCH, DELETE, GET"
        );
        return res.status(200).send({});
      }
      next();
    });
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(require("./routes"));
  }
}

module.exports = new App().server;
