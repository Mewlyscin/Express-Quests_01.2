require("dotenv").config();

const port = process.env.APP_PORT;

const express = require("express");

const app = express();

app.use(express.json());

// import Router

const usersRouter = require("./router/usersRouter");
const moviesRouter = require("./router/moviesRouter");

//app.use (usersRouter)

app.use(moviesRouter);
app.use(usersRouter);

module.exports = app;
