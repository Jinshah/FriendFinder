// Dependencies
// =============================================================
var express = require("express");
var api = require("./app/routing/apiRoutes");
var html = require("./app/routing/htmlRoutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", api);
app.use("/", html);

// Sets up the Express app to handle data parsing

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
