// orderController.js
const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { body } = req;
    const newOrder = new Order(body);
    const savedOrder = await newOrder.save();
    res.status(201).json({ success: true, data: savedOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating order", error: error.message });
  }
};

/* orderController.js
const Order = require("../models/Order");
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error creating order" });
  }
};
*/