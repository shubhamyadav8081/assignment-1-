const path = require("path");

const filePath = process.argv[2] || "files/example.txt";

console.log("File Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Directory Name:", path.dirname(filePath));
console.log("Absolute Path:", path.resolve(filePath));

const newPath = path.join(__dirname, "files", "example.txt");
console.log("Joined Path:", newPath);
