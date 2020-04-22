const express = require("express");

const controller = require("../controllers/users.controller");

const validate = require("../validate/users.validate");

const router = express.Router();

router.get("/", controller.index);

router.get("/create", controller.create);

router.post("/create", validate.checkLength, controller.postCreate);

router.get("/edit/:id", controller.edit);

router.post("/edit", validate.checkLength, controller.postEdit);

router.get("/delete/:id", controller.delete);

module.exports = router;
