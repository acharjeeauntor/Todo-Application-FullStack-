const express = require("express");
const route = require("./routes/route");
const app = express();
const db = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

//body Parser
app.use(cors());
app.use(bodyParser.json());

//Route
app.use("/", route);
db.sync({ force: false })
  .then(() => {
    console.log("Database Running");
    app.listen(PORT, () => {
      console.log("Server Running");
    });
  })
  .catch((err) => console.log(err));
