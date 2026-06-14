function fetchUserProfile(userId, signal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      resolve({
        id: userId,
        name: "Aryan",
        orders: 12,
        membership: "Premium"
      });
    }, 5000);

    signal.addEventListener("abort", () => {
      clearTimeout(timer);

      const error = new Error("Request cancelled");
      error.name = "AbortError";

      reject(error);
    });
  });
}

const controller = new AbortController();

setTimeout(() => {
  controller.abort();
}, 3000);

(async () => {
  try {
    const user = await fetchUserProfile(101, controller.signal);
    console.log(user);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Request cancelled");
    }
  }
})();