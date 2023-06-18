const express = require("express");
const controllers = require('../controllers/usersControllers');

const router = express.Router();

//routes
router.post("/user/createuser", controllers.createUser);
router.get("/user/getAlluser", controllers.getUsers);
router.get("/user/singleUser/:id", controllers.getSingleUser);
router.patch("/user/updateUser/:id", controllers.updateUser);
router.delete("/user/deleteUser/:id", controllers.deleteUser);


module.exports = router;