require("dotenv").config();

// import Router

const usersRouter = require("./router/usersRouter");
const moviesRouter = require("./router/moviesRouter");

const port = process.env.APP_PORT;

const express = require("express");

const app = express();

//app.use (usersRouter)

app.use(moviesRouter);
app.use(usersRouter);

module.exports = app;
