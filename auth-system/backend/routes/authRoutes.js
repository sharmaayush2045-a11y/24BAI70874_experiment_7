const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const User = require("../models/User");

router.post("/register", register);
router.post("/login", login);

router.get("/admin", authMiddleware, roleMiddleware("admin"), async (req,res)=>{
    const users = await User.find();
    res.json(users);
});

router.get("/profile", authMiddleware, async (req,res)=>{
    const user = await User.findById(req.user.id);
    res.json(user);
});

module.exports = router;