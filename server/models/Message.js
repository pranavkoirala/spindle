import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  unlockDate: {
    type: Number,
    required: true,
  },
  messageId: {
    type: String,
    required: true,
    unique: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
