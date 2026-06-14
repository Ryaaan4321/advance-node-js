function fetch(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({
          url,
          status: 200
        });
      } else {
        reject(new Error(`${url} is unavailable`));
      }
    }, delay);
  });
}

async function fetchAsset(assetPath) {
  const cdns = [
    "https://cdn1.example.com",
    "https://cdn2.example.com",
    "https://cdn3.example.com"
  ];

  return Promise.any(
    cdns.map(cdn => fetch(`${cdn}/${assetPath}`))
  );
}

(async () => {
  try {
    const asset = await fetchAsset("images/product-101.jpg");
    console.log(asset);
  } catch (err) {
    console.log("All CDNs failed");
  }
})();

console.log("before");

new Promise((resolve) => {
  console.log("inside executor");
  resolve(42);
}).then((res)=>console.log(res)).catch((e)=>console.log(e));

console.log("after");