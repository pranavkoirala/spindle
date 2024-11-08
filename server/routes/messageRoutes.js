import express from "express";
import Message from "../models/Message.js";
import crypto from "crypto";

const router = express.Router();

const generateRandomId = () => {
  return crypto.randomBytes(16).toString("hex");
};

router.post("/create", async (req, res) => {
  const { message, unlockTime } = req.body;
  try {
    const unixUnlockTime = Date.parse(unlockTime) / 1000;
    const newMessage = new Message({
      message,
      unlockDate: unixUnlockTime,
      messageId: generateRandomId(),
    });
    await newMessage.save();
    res.status(201).json({ id: newMessage.messageId });
  } catch (error) {
    res.status(400).json({ error: "Error creating message" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const messageDoc = await Message.findOne({ messageId: req.params.id });
    if (!messageDoc)
      return res.status(404).json({ error: "Message not found" });

    const currentTime = Math.floor(Date.now() / 1000);
    const isUnlocked = currentTime >= messageDoc.unlockDate;
    res.json(
      isUnlocked
        ? { message: messageDoc.message }
        : { unlockDate: messageDoc.unlockDate }
    );
  } catch (error) {
    res.status(400).json({ error: "Error fetching message" });
  }
});

export default router;
