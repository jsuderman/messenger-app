const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

const Message = mongoose.model("messages", messageSchema);

module.exports = Message