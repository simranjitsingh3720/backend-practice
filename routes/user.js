const express = require("express");
const router = express.Router();
const { getAllUser,createUser,getUserById,deleteUserById } = require('../controllers/user')

router.route("/").get(getAllUser).post(createUser);

router.route("/:id").get(getUserById).delete(deleteUserById);

module.exports = router;

