// aiRoutes.js
const aiRouter = express.Router();
const { getAIResponse } = require("../controllers/aiController");
aiRouter.get("/", getAIResponse);
module.exports = aiRouter;
