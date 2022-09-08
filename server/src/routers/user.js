const express = require("express");
const {
    registerUser,
    loginUser,
    deleteUser
} = require('../controllers/user');

const router = express.Router();

router.post("/register", registerUser);
router.post('/login', loginUser);
router.delete("/:id", deleteUser);

module.exports = router;