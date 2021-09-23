// let person = {
//     "name": "Rishabh",
//     age: 23,
//     0: "hello"
// }

// console.log(person["name"]);

let obj = {
    1 : "hello1",
    2 : "hello2"
}
// let obj = {
//      "hello1" : 1,
//      "hello2" : 2
// }
console.log(Object.keys(obj));
console.log(Object.values(obj));


// object traversing
// for(let i=0;i< Object.keys(obj).length;i++){
//    console.log(obj[Object.keys(obj)[i]]);
//     //console.log(obj.i);
// }

// ‘In’ se index access hote hain or ‘of’ se values on that index

// 'of' is to get values of array and 'in' for index


// let obj = {
//         obj1 : {
//             "obj1.1" : { "obj1.1.1" : "hello1"}
//         },
//         obj2: {
//             "obj2.1" : "hello2.1",
//             "obj2.2" : "helo2.2"
//         }
//     }
    
//     for(let key in obj) {
//         console.log(key);
//         if(typeof(obj[key]) == "object") {
//             for(let key2 in obj[key]) {
//                 console.log(key2);
//             }
//         }
//     }
    
    // function printKeys(obj) {
    //     for(let key in obj) {
    //         console.log(key);
    //         if(typeof(obj[key]) == "object") {
    //             printKeys(obj[key]);
    //         }
    //     }
    // }
    // printKeys(obj);