#!/usr/bin/env node

// part -1
// const fs = require("fs");
// let arguments = process.argv.slice(2);

// let flags = [];
// let filenames = [];

// for(let i of arguments) {
//         if(i[0] == "-") {
//             flags.push(i);
//         } else {
//             filenames.push(i);
//         }
//     }
//     console.log(arguments)

// if(flags.length==0 && filenames.length !=0 ){
//     for(let file of filenames) {
//         console.log(fs.readFileSync(file,"utf-8"));
//     }
// }   

// console.log("----------------------------------");


// part -2

// const fs = require("fs");
// let arguments = process.argv.slice(2);

// let flags = [];
// let filenames = [];

// for(let i of arguments) {
//         if(i[0] == "-") {
//             flags.push(i);
//         } else {
//             filenames.push(i);
//         }
//     }

// this is not so optimize code for removing spaces

// if(flags.length==0 && filenames.length !=0 ){
//     for(let file of filenames) {
//         console.log(fs.readFileSync(file,"utf-8"));
//     }
// } else{
//     for(let flag of flags){
//         if(flag == "-rs"){ // rs = remove spaces
//             for(let file of filenames){
//                 let fileData = fs.readFileSync(file,"utf-8");

//                 // Ye Thoda jda deep method hai
//                 // let fileDataArray = fileData.split(" ");
//                 // console.log(fileDataArray.join(""));

//                 // Ye straight method hai
//                 console.log(fileData.split(" ").join(""));

//             }
//         }
//     }
// }  

// this is optimize code for removing spaces

// *may be hum aage split use naa kre toh hum aise kre rahe hai but haa hum abhi
// function use kre sakte hai*

// for(let file of filenames){
//     let fileData = fs.readFileSync(file,"utf-8");
//     for(let flag of flags){
//         if(flag == "-rs"){
//             fileData = fileData.split(" ").join("");
//         }
//         // for new flag = rn (REMOVE NEXT LINE)
//         if(flag == "-rn"){
//             fileData = fileData.split("\n").join("");        
//         }
//     }
//     console.log(fileData);
//}

// **
// for(let file of filenames) {
//         let fileData = fs.readFileSync(file,"utf-8");
//         for(let flag of flags) {
//             if(flag == "-rs") {
//                 fileData = removeAll(fileData," ");    // using function
//             }
//             if(flag == "-rn") {
//                 fileData = removeAll(fileData, "\n")     // using function
//             }
//             if(flag == "-rsc"){
//                 let tempString = "";
//                 for(let ch of fileData){ 
//                     if((ch.charCodeAt(0) >=65 && ch.charCodeAt(0) <= 90 ) || (ch.charCodeAt(0) >=97 && ch.charCodeAt(0) <= 122 )){
//                         tempString += ch;
//                     }
//                 }
//                 fileData = tempString;
//             //  fileData = removeAll(fileData, "\n")     // using function
//             }
//         }
//         console.log(fileData);
//     }
//     // using function
//     function removeAll(string, removalData) {
//         return string.split(removalData).join("");
//     }




// console.log("----------------------------------");






const fs = require("fs");
let arguments = process.argv.slice(2);
    
let flags = []; // basically ye flag ka array hai jaise -rs,-rn & -rsc
let filenames = [];    // basically ye filenames ka array hai jaise a.txt, b.txt
let secondaryArguments = [];// basically ye secondaryArguments ka array hai jaise %abc

for(let i of arguments) {
    if(i[0] == "-") {
        flags.push(i);
    } else if(i[0] == "%") {
        secondaryArguments.push(i.slice(1));
    } else {
        filenames.push(i);
    }
}

// if(flags.length == 0) {
//     for(let file of filenames) {
//         console.log(fs.readFileSync(file,"utf-8"));
//     }
// } else {
//     for(let flag of flags) {
//         if(flag == "-rs") {
//             for(let file of filenames) {
//                 let fileData = fs.readFileSync(file,"utf-8");
//                 console.log(fileData.split(" ").join(""));
//             }
//         } else if
//     }
// }


for(let file of filenames) {
    let fileData = fs.readFileSync(file,"utf-8");
    for(let flag of flags) {
        if(flag == "-rs") {
            fileData = removeAll(fileData," ");
        }
        if(flag == "-rn") {
            fileData = removeAll(fileData, "\n")
        }
        if(flag == "-rsc") { // for removing specific character or specific string
                             // which ever you want to delete                     
            for(let secondaryArgument of secondaryArguments) {
                fileData = removeAll(fileData,secondaryArgument);
            }
        }


        if(flag=="-s"){
            let data=addSequence(fileData);
            console.log(data);
        }
        if(flag=="-sn"){
            let data=addSequenceTnel(fileData);
            console.log(data);
        }
        if(flag=="-rel"){ // remove extra line
            let ans=removeExtraLine(fileData);
            for(let i=0;i<ans.length;i++){
                console.log(ans[i]);
            }
            
        }
    }
     console.log(fileData);
}

function removeAll(string, removalData) {
    return string.split(removalData).join("");
}


function addSequence(content){
let contentArr=content.split("\n");
// for(let i of contentArr){
for(let i=0;i<contentArr.length;i++){
contentArr[i]=(i+1)+" "+contentArr[i];

}
return contentArr;
}

function addSequenceTnel(content){ // addSequence To non empty line
let contentArr=content.split("\n");
let count=1;
for(let i=0;i<contentArr.length;i++){
// for(let i of contentArr){
if(contentArr[i]!=""){
    contentArr[i]=count+" "+contentArr[i];
    count++;
}
}
return contentArr;
}

// function removeExtraLine(fileData){
// let contentArr=fileData.split("\n");
// let data=[];
// for(let i=1;i<contentArr.length;i++){
// if(contentArr[i]=="" && contentArr[i-1]==""){
//     contentArr[i]=null;
// }
// if(contentArr[i]=="" && contentArr[i-1]==null){
//     contentArr[i]=null;
// }
// }

// for(let i=0;i<contentArr.length;i++){
// if(contentArr[i]!=null){
//     data.push(contentArr[i]);
// }
// }
// return data;
// }

// NOTE :- string me dal do toh chale jayega example = '$abc' ye aab chale jayega
// waise nhi chalta normally 

// NOTE :- Suppose string is abcefghq or hum -rsc flag chalte hai or toh afhq ye 
// pattern pass karte hai toh kuch nhi hoga or age abc pass krte toh delete hota abc 
// stirng me se 


// NOTE :- package.json me jaa ke script me hum node index.js(jo ki filename hai)
// ko wcat se change karwa skte hai 
// npm run wcat
// node packet manager


// NOTE :- BIN is universally accepted keyword  
// "bin" : {
//     "wcat" : "index.js"
//   },

// #!/usr/bin/env node ye command top par dalna jo bhi file ho uss me in our case
//  file is index , then in terminal type this sudo npm link
// if it already link then unlink