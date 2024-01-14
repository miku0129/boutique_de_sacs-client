const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("build"));

app.get("/", function (req, res) {
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("App listening on port: " + PORT);
});