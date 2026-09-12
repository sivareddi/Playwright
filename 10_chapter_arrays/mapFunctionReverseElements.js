const products = ["Apple iPhone", "Samsung Galaxy", "Google Pixel", "OnePlus Nord"];
//const prodLengths = products.map(product => product.length);
//console.log(prodLengths); // Output: [12, 14, 12, 12]
const reverseProductsElements = products.map(product => product.split('').reverse().join(''));
console.log(reverseProductsElements); // Output: [ 'enohPi elppA', 'yxalaG gnusmaS', 'lexiP elgooG', 'droN sulPenO' ]
const reverseProducts = products.reverse();
console.log(reverseProducts); // Output: [ 'OnePlus Nord', 'Google Pixel', 'Samsung Galaxy', 'Apple iPhone' ]

const name = "Siva Reddy Yengalareddigari";
const reverseName = name.split('').reverse().join('');
console.log(reverseName);   // Output: iragadderalnegY yddeR aviS