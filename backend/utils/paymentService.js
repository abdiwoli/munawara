// paymentService.js
exports.processPayment = (amount) => {
  return { success: true, message: `Processed payment of $${amount}` };
  //console.log(`Processing payment of ${amount}`);
};
