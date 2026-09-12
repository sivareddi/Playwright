const prices = ["₹1,00,000", "₹75,000", "₹55,000", "₹90,000"];
const numbericPrices = prices.map(price => Number(price.replace(/[₹,]/g, "")));
console.log(numbericPrices); // Output: [100000, 75000, 55000, 90000]