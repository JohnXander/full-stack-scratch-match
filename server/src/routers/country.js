const express = require("express");
const {
    createCountry,
    getCountriesByUser
} = require('../controllers/country');

const router = express.Router();

router.post("/", createCountry);
router.get("/:id", getCountriesByUser);

module.exports = router;