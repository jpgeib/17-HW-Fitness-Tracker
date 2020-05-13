// basic boilerplate
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); 

const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setting up routes
app.use(express.static("public"));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => console.log("Server started on PORT " + PORT));