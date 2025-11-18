import HashMap from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.get("apple")); // red
console.log(test.has("banana")); // true
console.log(test.entries()); // List all key-value pairs
console.log(test.remove("carrot")); // true
console.log(test.get("carrot")); // null
console.log(test.length()); // 11
console.log(test.capacity); // 16 or more depending on resizing
console.log(test.entries()); // List all key-value pairs
test.clear();
console.log(test.length()); // 0
