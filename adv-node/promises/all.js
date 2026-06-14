function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadDashboard(userId) {
    const [profile, wishlist, orders] = await Promise.all([
        fetchProfile(userId),
        fetchWishlist(userId),
        fetchOrders(userId)
    ]);

    return { profile, wishlist, orders };
}

async function fetchProfile(userId) {
    await delay(1000);

    return {
        id: userId,
        name: "Aryan Sharma",
        email: "aryan@example.com",
        role: "Software Engineer",
        joinedAt: "2024-01-15"
    };
}

async function fetchWishlist(userId) {
    await delay(1500);

    return [
        {
            id: 101,
            product: "Mechanical Keyboard",
            price: 4999
        },
        {
            id: 102,
            product: "Node.js Design Patterns",
            price: 799
        },
        {
            id: 103,
            product: "27-inch Monitor",
            price: 18999
        }
    ];
}

async function fetchOrders(userId) {
    await delay(2000);

    return [
        {
            orderId: "ORD001",
            amount: 2499,
            status: "Delivered"
        },
        {
            orderId: "ORD002",
            amount: 5999,
            status: "Shipped"
        }
    ];
}

loadDashboard(1).then(console.log);