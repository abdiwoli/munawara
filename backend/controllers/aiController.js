// aiController.js
exports.getAIResponse = (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI feature is under development. Stay tuned for updates!",
    timestamp: new Date().toISOString(),
  });
};


const express = require('express');
const { getAIResponse } = require('./aiController');

const app = express();

app.get('/ai', getAIResponse);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
