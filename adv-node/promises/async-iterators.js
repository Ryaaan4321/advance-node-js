async function* getOrders() {
  const batches = [
    [
      { id: 1, amount: 1200 },
      { id: 2, amount: 3400 }
    ],
    [
      { id: 3, amount: 800 },
      { id: 4, amount: 2100 }
    ],
    [
      { id: 5, amount: 5600 }
    ]
  ];
  for (const batch of batches) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("batch == ",batch);
    yield batch;
  }
}

for await (const orders of getOrders()) {
  console.log("Processing batch:", orders);
}