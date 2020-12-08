const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message