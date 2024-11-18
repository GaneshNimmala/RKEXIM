const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/products", (req, res) => {
  res.render("products");
});

router.get("/contactus", (req, res) => {
  res.render("contactus");
});

router.get("/fueladditives", (req, res) => {
  res.render("fuel-additives");
});

router.get("/dieseladditives", (req, res) => {
  res.render("diesel-additives");
});

router.get("/pipefittings", (req, res) => {
  res.render("pipefittings");
});

router.get("/biodegradableleafplates", (req, res) => {
  res.render("biodegradableplates");
});

router.get("/handicrafts", (req, res) => {
  res.render("handicrafts");
});

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
