function callPaymentGateway(order) {
  return new Promise((resolve) => {
    const processingTime = Math.floor(Math.random() * 5000);

    setTimeout(() => {
      resolve({
        orderId: order.id,
        amount: order.amount,
        status: "paid"
      });
    }, processingTime);
  });
}

function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), ms)
  );

  return Promise.race([promise, timeout]);
}

const order = {
  id: "ORD-101",
  amount: 2499
};

(async () => {
  try {
    const result = await withTimeout(
      callPaymentGateway(order),
      3000
    );

    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
})();