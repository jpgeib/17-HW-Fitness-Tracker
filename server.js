// basic boilerplate
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

//Middlewares?

//Setting up routes

app.use(routes);

app.listen(PORT, () => console.log("Server started on PORT" + PORT));