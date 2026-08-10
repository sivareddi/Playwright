const a = {status: "Pass"};
let b = a;
b.status = "Fail"
console.log(a.status);