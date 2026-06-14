function sendEmail(email) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 500;
        setTimeout(() => {
            const success = Math.random() > 0.3; 
            if (success) {
                resolve(`Email sent to ${email}`);
            } else {
                reject(`Failed to send email to ${email}`);
            }
        }, delay);
    });
}
async function sendBulkNotifications(users) {
    const results = await Promise.allSettled(
        users.map(user => sendEmail(user.email))
    );
    const failed = results.filter(r => r.status === "rejected");
    const successful = results.filter(r => r.status === "fulfilled");
    console.log(`Success: ${successful.length}`);
    console.log(`Failed: ${failed.length}`);
    console.log("\nSuccessful emails:");
    successful.forEach(r => console.log(r.value));
    console.log("\nFailed emails:");
    failed.forEach(r => console.log(r.reason));
}
const users = [
    {
        id: 1,
        name: "Aryan",
        email: "aryan@gmail.com"
    },
    {
        id: 2,
        name: "Rahul",
        email: "rahul@gmail.com"
    },
    {
        id: 3,
        name: "Priya",
        email: "priya@gmail.com"
    },
    {
        id: 4,
        name: "Ankit",
        email: "ankit@gmail.com"
    },
    {
        id: 5,
        name: "Sneha",
        email: "sneha@gmail.com"
    }
];

sendBulkNotifications(users);