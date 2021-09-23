// const base2 = (n) => {
 
//     let ans = "";
//     let mult = 1;
 
//     while (n > 0) {
//         if (n & 1 == 1) {
//             ans += '1';
//         } else {
//             ans += '0';
//         }
 
//         n = n >> 1;
//     }
 
//     return ans.split("").reverse().join("");
// }
 
// console.log(base2(1));
// console.log(base2(5));
// console.log(base2(10));

// function base2(n) {
// let mult = 1;
// let ans = 0;

// while(n>0){
//         let rem = n % 2;
//     ans = rem * mult + ans;
//     mult = mult * 10;
//     n= n/2;
// }
// return ans;
// }
// console.log(base2(1));

// function myFunction() {
//     let a1 = [1,2,3,4,5];
// let a2 = [21,22];


// a1.splice.apply(a1, [2, 0].concat(a2));
//     return a1;
//   }

//a1.splice.apply(a1, [2, 0].concat(a2));

//console.log(arr1.concat(arr2));
//a1.splice(a1,[2,0].concat(a2));
//console.log(myFunction()); // [1, 2, 21, 22, 3, 4, 5];

// let count=0;
// function getLength(arr,idx){

//     if(idx==arr.length){
//         return;
//     }
    
//     if(typeof arr[idx]=="number"){
      
//         count++;
       
//     }
//     else{
//         getLength(arr[idx],0);
//     }
//     getLength(arr,idx+1);
    

   
// }
// getLength([1,[2,5,[4,5]],3,[2,3],5,[1,[2,5]]],0);
// console.log(count);


// const tuckIn = (arr1, arr2) => {
 
//     arr2.reverse();
//     let idx = 1;
//     for (const i of arr2) {
//         // console.log(i);
//         arr1.splice(idx, 0, i);
 
//     }
 
//     return arr1;
// }
 
// console.log(tuckIn([1, 10], [2, 3, 4, 5]));
// console.log(tuckIn([15, 150], [45, 75, 35]));
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));

// const countTrue = (list) => {
 
//     let cnt = 0;
 
//     let ans = list.filter(tr => tr == true);
 
//     return ans.length;
 
// }
 
// console.log(countTrue([true, false, true, false, false]));
// console.log(countTrue([false, false, false, false, false]));
// console.log(countTrue([]));

// const ArrayOfMultiple = (num, len) => {
//     let result = []
//     // result[0] = -1;
//     for (let i = 0; i < len; i++) {
//         result[i] = num * (i + 1);
//     }
 
//     return result;
// }
 
 
// let ans = ArrayOfMultiple(7, 5);
// console.log(ans);
// ans = ArrayOfMultiple(12, 10);
// console.log(ans);
// ans = ArrayOfMultiple(17, 6);
// console.log(ans);


// const getLength=(arr,ans)=>{
//     if(arr.length==0){
//         return ans;
//     }
//     for(let i = 0; i<arr.length;i++){
        
//         if(arr[i].length > 1){
//           return getLength(arr[i],ans);
//         }
//         else{
//             ans++;
//         }
//     }
 
//     return ans;
// }
// console.log(getLength([1,[2,3]],0));
// console.log(getLength([1,[2,[3,4]]],0));
// console.log('1' - '0');



// const numInStr = (lst1) =>{
//     let ans = [];
//     for(i of lst1){
//         for(j of i){
//             if(j-'0' >= 0 && j-'0'<= 9){
//                 ans.push(i);
//             }
//         }
//     }
//     return ans;
// }
// console.log(numInStr(["abc","abc10"]));
// console.log(numInStr(["1a","a","2b","b"]));


const missing = (arr1,arr2) =>{
    
    if(arr2.length > arr1.length){
        return missing(arr2,arr1);
    }
    
    for(let i = 0; i<arr1.length;i++){
        for(let j = 0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                arr1.splice(i,1);
                arr2.splice(j,1);
                j--;
                i--;
            }
 
        }
    }
    return arr1;
}
 
let ans = missing([1,2,3,4,5,6,7,8],[1,3,4,5,6,7,8]);
console.log(ans);
 ans = missing(["jane", "is" ,"pretty" ,"ugly"],["jane","is","pretty"]);
console.log(ans);