// productRoutes.js
const productRouter = express.Router();
const { getProducts } = require("../controllers/productController");
productRouter.get("/", getProducts);
module.exports = productRouter;