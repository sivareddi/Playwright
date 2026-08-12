const browsers = ["Chrome", "Edge", "Safari", "Firefox"];
console.log(browsers[0]);

console.log(browsers[browsers.length-1]);

browsers[1] = "DuckDuckGo";

browsers.push("Edge");

console.log(browsers);

let removedBrowser = browsers.pop();
console.log(removedBrowser);

console.log(browsers);
console.log(browsers.length);
