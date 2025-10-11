// generate_large_complex_object.js
import fs from "fs";

function randomString(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function randomDate(startYear = 2000, endYear = 2025) {
  const start = new Date(startYear, 0, 1);
  const end = new Date(endYear, 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split("T")[0];
}

export function generateLargeComplexObject(numOrders = 10000) {
  return {
    id: Math.floor(Math.random() * 9000) + 1000,
    name: randomString(),
    isActive: Math.random() < 0.5,
    tags: Array.from({ length: 10 }, () => randomString(4)),
    profile: {
      age: Math.floor(Math.random() * 53) + 18,
      email: `${randomString()}@example.com`,
      address: {
        street: randomString(10),
        city: randomString(8),
        zipcode: Math.floor(Math.random() * 90000) + 10000,
        country:'',
        test:null
      }
    },
    orders: Array.from({ length: numOrders }, () => ({
      ags:100,
      orderId: Math.floor(Math.random() * 90000) + 10000,
      amount: +(Math.random() * 490 + 10).toFixed(2),
      date: randomDate(),
      items: Array.from({ length: 5 }, () => ({
        productId: Math.floor(Math.random() * 1000) + 1,
        quantity: Math.floor(Math.random() * 10) + 1
      }))
    })),
    ags:100,
    preferences: {
      ags:100,
      notifications: ["all", "email", "sms", "none"][Math.floor(Math.random() * 4)],
      theme: ["light", "dark"][Math.floor(Math.random() * 2)],
      languages: Array.from({ length: 3 }, () => ["en", "es", "fr", "zh", "jp"][Math.floor(Math.random() * 5)])
    },
  };
}

// const bigData = generateLargeComplexObject(10000000);

// fs.writeFileSync("large_complex_data_extreme.json", JSON.stringify(bigData, null, 2));
// console.log("✅ Generated large_complex_data_extreme.json with 10000 orders");
