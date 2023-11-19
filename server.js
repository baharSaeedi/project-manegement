const Application = require("./app/app");
require("dotenv").config();
new Application(3000, "mongodb://localhost:27017/project-management");
