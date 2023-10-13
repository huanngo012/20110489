const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");
const messageController = require("../controllers/messageController");

router.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Routes
router.get("/", groupController.getAllItem);
router.post("/20110489/:id", groupController.addItem);
router.get("/20110489/:id", groupController.getItemById);
router.get("/message/:id", messageController.getMessageByID);
router.get("/message", messageController.getAllMessage);

module.exports = router;
