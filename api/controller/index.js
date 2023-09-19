const express = require("express");
const routes = express.Router();
const { info } = require('../model/index')
const bodyParser = require("body-parser");

routes.get("/Information", (req, res) => {
    info.fetchInformation(req, res)
  });

  routes.post("/Information", bodyParser.json(), (req, res) => {
    info.addInformation(req, res);
  });

  module.exports = {
    express,
    routes,
  };