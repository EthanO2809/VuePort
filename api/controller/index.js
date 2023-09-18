const express = require("express");
const routes = express.Router();
const { info } = require('../model/index')

routes.get("/Information", (req, res) => {
    info.fetchInformation(req, res)
  });

  module.exports = {
    express,
    routes,
  };