const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const path = require("path");
const { appRoutes } = require("./router/router");

module.exports = class Application {
  #app = express();
  constructor(PORT, DB_URL) {
    this.configDatabase(DB_URL);
    this.configApplication();
    this.createServer(PORT);
    this.createRoutes();
    this.errorHandler();
  }
  configDatabase(DB_URL) {
    mongoose.connect(DB_URL).then(() => {
      console.log("database connected");
    });
  }
  configApplication() {
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
  }
  createServer(PORT) {
    const server = http.createServer(this.#app);
    server.listen(PORT, () => {
      console.log(`app listen on http://localhost:${PORT}`);
    });
  }
  errorHandler() {
    this.#app.use((req, res, nex) => {
      return res.status(404).json({ success: false, message: "not found!" });
    });
    this.#app.use((error, req, res, next) => {
      const status = error?.status || 500;
      const message = error?.message || "internal server error";
      return res.status(status).json({ success: false, message: message });
    });
  }
  createRoutes() {
    this.#app.get("/", (req, res, next) => {
      return res.status(200).json({
        message: "hi",
      });
    });
    this.#app.use(appRoutes);
    // this.#app.use((error, req, res, next) => {
    //   try {

    //   } catch (error) {
    //     next(error);
    //   }
    // });
  }
};
