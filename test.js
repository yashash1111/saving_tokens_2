const encrypt = require('./script');

const payload = { userId: 101, role: "admin" };
const secret = "supersecret";

const token = encrypt(payload, secret);
console.log("JWT Token with Expiry:", token);
