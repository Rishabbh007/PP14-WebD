// let str = "avdfffgrtvffddgeykiimioguyrw";
// let cnt = 0;

// for(let i = 0;i < str.length;i++){
//     if(str[i]=='f'){
//         cnt++;
//     }
// }

// console.log(cnt);

// let str1 = "921345667667";
// let ans = 0;

// for(let i = 0;i < str1.length;i++){
//     ans = ans + parseInt(str1[i]);
//     }

//      console.log(ans);

// let number = "12";
// console.log(parselInt 

//let str = "Rishabh Sharma";
// let ans = " ";
// for(let i = str.length-1; i >=0; i--){
//      ans = ans + str[i];
// }

// console.log(ans);

// let str = "Rishabh Sharma";

// let revstr = " ";
// for(let i = str.length-1; i >=0; i--){
//     revstr = revstr + str[i];
// }

// let sp = undefined;
// let ep = revstr.length;
// let ans = "";

// for(let i = revstr.length-1; i >=0; i--){
//   if(revstr[i] ==" "){
//       sp = i+1;
//       ans += revstr.substring(sp,ep) + " ";
//       ep = i;
//       sp;
//   } else if(i==0){
//       sp =0;
//       ans += revstr.substring(sp,ep);
//   }
// }
// console.log(ans);



// let str = "Bhavesh Bansal";
// let ans = "";

// for(let i = 0; i < str.length; i++) {
//     ans += str[i] + ", ";
// }

// console.log(ans);


// let str = "Bhavesh Bansal";

// for(let i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i));
// }

// let str="jfuijihdfbbsdfsdfvsdfhvsbfsdfsdhfb";
// let count = 0;

// for(let i = 0; i < str.length; i++) {
//     if(str.charAt(i) == 'b') {
//         count++;
//     }
// }

// console.log(count);

// let number = "12";
// console.log(parseInt(number));
// let str = "23456";
// let ans = 0;

// for(let i = 0; i < str.length; i+=2) {
//     console.log(str.substr(i,2));
//     ans += parseInt(str.substr(i,2));
// }
// console.log(ans);
// let str = "1A2";
// let ans = 0;
// for(let i = 0; i < str.length; i++) {
//     if(!isNaN(str[i])) {
//         ans += parseInt(str[i]);
//     } else {
//         ans += str.charCodeAt(i);
//     }
// }
// console.log(ans);

// let str = "Bhavesh Bansal";
// let revstr = "";
// for(let i = str.length - 1; i >= 0; i--) {
//     revstr += str[i];
// }

// let sp = undefined;
// let ep = revstr.length;
// let ans = "";
// for(let i = revstr.length - 1; i >= 0; i--) {
//     if(revstr[i] == " ") {
//         sp = i + 1;
//         ans += revstr.substring(sp,ep) + " ";
//         ep = i;
//         sp = undefined;
//     } else if(i == 0) {
//         sp = 0;
//         ans += revstr.substring(sp,ep);
//     }
// }
// console.log(ans);

// let sp = 0;
// let ep = undefined;
// let ans = "";
// for(let i = 0; i <= revstr.length-1; i++) {
//     if(revstr[i] == " ") {
//         ep = i;
//         ans = " " + revstr.substring(sp,ep) + ans;
//         ep = undefined;
//         sp = i + 1;
//     } else if(i == (revstr.length - 1)) {
//         ep = revstr.length;
//         ans = revstr.substring(sp,ep) + ans;
//     }
// }
// console.log(ans);

// let str = "abbhba";
// let ans = true;
// for(let i = 0, j = str.length-1; i <= j; i++, j--) {
//     if(str[i] != str[j]) {
//         ans = false;
//         break;
//     }
// }

// console.log(ans);



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
// arr[25] = 5;
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






// let str = "Bhavesh Bansal";
// let ans = "";

// for(let i = 0; i < str.length; i++) {
//     ans += str[i] + ", ";
// }

// console.log(ans);


// let str = "Bhavesh Bansal";

// for(let i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i));
// }

// let str="jfuijihdfbbsdfsdfvsdfhvsbfsdfsdhfb";
// let count = 0;

// for(let i = 0; i < str.length; i++) {
//     if(str.charAt(i) == 'b') {
//         count++;
//     }
// }

// console.log(count);

// let number = "12";
// console.log(parseInt(number));
// let str = "23456";
// let ans = 0;

// for(let i = 0; i < str.length; i+=2) {
//     console.log(str.substr(i,2));
//     ans += parseInt(str.substr(i,2));
// }
// console.log(ans);
// let str = "1A2";
// let ans = 0;
// for(let i = 0; i < str.length; i++) {
//     if(!isNaN(str[i])) {
//         ans += parseInt(str[i]);
//     } else {
//         ans += str.charCodeAt(i);
//     }
// }
// console.log(ans);

// let str = "Bhavesh Bansal";
// let ans = "";
// for(let i = str.length - 1; i >= 0; i--) {
//     ans += str[i];
// }
// console.log(ans);


// let str = "Bhavesh Bansal";

// for(let i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i));
// }


// let number = "12";
// console.log(parseInt(number));