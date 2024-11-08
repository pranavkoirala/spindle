import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const { message, unlockTime } = req.body;
  try {
    const unixUnlockTime = Date.parse(unlockTime) / 1000;
    const newMessage = new Message({ message, unlockDate: unixUnlockTime });
    await newMessage.save();
    res.status(201).json({ id: newMessage._id });
  } catch (error) {
    res.status(400).json({ error: "Error creating message" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const messageDoc = await Message.findById(req.params.id);
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
