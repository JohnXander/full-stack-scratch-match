const express = require("express");
const {
    createUser,
    deleteUser
} = require('../controllers/user');

const router = express.Router();

router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router;