// orderRoutes.js
const orderRouter = express.Router();
const { createOrder } = require("../controllers/orderController");
orderRouter.post("/", createOrder);
module.exports = orderRouter;