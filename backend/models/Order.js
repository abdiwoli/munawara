// Order.js
const OrderSchema = new mongoose.Schema({
  userId: String,
  products: Array,
  total: Number,
});
module.exports = mongoose.model("Order", OrderSchema);
