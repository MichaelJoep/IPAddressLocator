const express = require("express");
const { getUserInfo } = require("./ipController");

const router = express.Router();

router.get('/', getUserInfo);

module.exports = router;