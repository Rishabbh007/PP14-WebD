// new array creation

// let arr = [];
// let arr = new Array();
// console.log(arr);

// let arr = ["bhavesh", 23, 45.4, true, 'b'];
// console.log(arr);

// arr.push("hello");
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.length);

// let arr = [];
// arr[25] = 50;
// console.log(arr[25]);

// let str1 = "Bhavesh";
// let str2 = "Bhavesh Bansal";
// let str3 = "Apple,Mango,Banana";

// console.log(str1.split(""));
// console.log(str2.split(" "));
// console.log(str3.split(","));

// let arr = ["a","b","c","d"];

// console.log(arr.join(""));
// console.log(arr.join("#"));
// console.log(arr.join("|"));

// let arr1 = ["a","b","c"];
// let arr2 = ["d","e","f"];
// console.log(arr1.concat(arr2));







let arr = [1,2,3,4,5,6];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// traverse and get the indexes
// for(let i in arr) {
//     console.log(parseInt(i));
// }

//traverse and get the value

for(let i of arr) {
    console.log(i);
}

// console.log("a" + 1 + 2); // string concatenation

// console.log(1 + 2 + "a"); // first integer addition then string concatenation

// console.log(String.fromCharCode("a".charCodeAt(0) + 1)); 

// most important methods of array

// const arr = [1,2,3,4,5,6];

// arr[3] = 7; // internal reas
// //arr = [1,2,3] // this will show error
// console.log(arr);

// let arr= [1,2,3,4];

// arr = arr.map(function(value){
//     return value + 2;
// });

// console.log(arr.slice(1,4));
// console.log(arr.splice(1,2));

// let arr= [1,2,3,4,5,6,7,8,9];

// let temp= [...arr]; // copying an array
// //how to  delete odd value
// for(let i=arr.length;i>=0;i--){
//     if(arr[i]%2 == 1){
//         arr.splice(i,1);
//     }
// }

// console.log(arr);

// arr = arr.filter(function(value){
//     if(value % 2 ==1){
//         return false;
//     }else{
//         return true;
//     }
    
//     //return value % 2 ==0;
// })
// console.log(arr);

// let arr = [2,5,5,3,4,1];
// // if there are repeated value in array & this is a comparative method 
// console.log(arr.sort(function(a,b){
//    // console.log(a,b);
//     if(a > b){
//         return -1;
//     } else if( a == b){
//         return 0;
//     } else {
//         return 1;
//     }
// }))

// let arr = [2, 3, 5, 33, 4, 1]; 
// arr.sort(function(a, b){
//    if(a > b){
//        return true;
//     }else{
//        return false;
//     }
// })

// console.log(arr.sort());

//console.log(arr.includes(2))