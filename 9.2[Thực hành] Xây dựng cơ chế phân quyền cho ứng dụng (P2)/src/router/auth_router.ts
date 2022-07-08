import express from "express";
const router = express.Router();

router.get("/user/login",  async (req, res) => {
    res.render("login")
})