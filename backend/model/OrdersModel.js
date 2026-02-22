const mongoose = require("mongoose");
const { OrdersSchema } = require("../schema/OrdersSchema"); // ✔ schema (singular)

const OrdersModel = mongoose.model("order", OrdersSchema);

module.exports = { OrdersModel };