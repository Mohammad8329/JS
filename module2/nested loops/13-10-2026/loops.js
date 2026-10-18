// str = "abcde";

// for(let i = str.length -1; i >= 0; i--){
//     let newstr = "";
//     for(let j =i; j >= 0; j--){
//         newstr += str[j];
//         console.log(newstr);
//     }
// }

// let arr = [5, 4, 3, 2, 1];
// let subarrary =[];

// for(let i = arr.length -1; i >= 0; i--){
//     let newarr = [];
//     for(let j = i; j >= 0; j--){
//         newarr.push(arr[j]);
//         subarrary.push(newarr.slice());
//     }
// }
// console.log(subarrary);

// let nums = [2, 4, 6];
// let allPairs = [];
// let pairProducts = [];

// for (let i = 0; i < nums.length; i++) {
//   let pair = [nums[i]];
//   for (let j = i + 1; j < nums.length; j++) {
//     pair.push(nums[j]);
//     allPairs.push(...pair);
//     pairProducts.push(nums[i]* nums[j]);
//     // 1. Add nums[j] to pair
//     // 2. Safely store a snapshot of pair into allPairs
//     // 3. Store the product (nums[i] * nums[j]) into pairProducts
//     // 4. Reset or remove nums[j] so the next j iteration can pair properly with nums[i]
// }
// }
// console.log(allPairs);
// console.log(pairProducts);

// let words = ["learn", "js", "loops"];
// for(let i = 0; i < words.length; i++){
//   let str = "";
//   let space = '-';
//   let j = i;
//   while(j < words.length){
//     if(str === "")
//       str += words[j];
//     else
//       str += space+words[j];

//     console.log(str);
//     j++
//   }
// }

//--------------------------

// array of objects
// const studentBatches = [
//   { batch: "Morning", students: ["Aman", "Rajat"] },
//   { batch: "Evening", students: ["Sara", "Neha", "Kabir"] }
// ];

// for(let i = 0; i < studentBatches.length; i++){
//   console.log(`${studentBatches[i].batch} Batch`)
//   for(let j = 0; j < studentBatches[i].students.length; j++){
//     console.log(`\t${studentBatches[i].students[j]}`);
//   }
// }

const orders = [
  {
    customer: "Aarav",
    items: [
      { name: "Keyboard", price: 1200, quantity: 1 },
      { name: "Mouse", price: 600, quantity: 2 }
    ]
  },
  {
    customer: "Priya",
    items: [
      { name: "Monitor", price: 8500, quantity: 1 },
      { name: "HDMI Cable", price: 300, quantity: 3 },
      { name: "USB Hub", price: 700, quantity: 1 }
    ]
  },
  {
    customer: "Rohan",
    items: [
      { name: "Notebook", price: 80, quantity: 5 }
    ]
  }
];

let customerBills = [];
let grandTotal = 0;

// Write your nested loop below:
for(let i = 0; i < orders.length; i++){
  let total = 0
  for(let j = 0; j < orders[i].items.length; j++){
    total += orders[i].items[j].price * orders[i].items[j].quantity;
  }
  grandTotal += total;
  console.log(total);
  customerBills.push({
    customer: orders[i].customer,
    total: total
  });
}
console.log(customerBills);