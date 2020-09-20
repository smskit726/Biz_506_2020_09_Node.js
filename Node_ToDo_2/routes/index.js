var express = require("express");
var router = express.Router();
const moment = require("moment");

var todoVO = require("../models/todoModel");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", function (req, res) {
  let to_date = moment().format("YYYY-MM-DD");
  let to_time = moment().format("HH:mm:ss");

  req.body.to_date = to_date;
  req.body.to_time = to_time;

  res.render("index", {});
});

module.exports = router;
