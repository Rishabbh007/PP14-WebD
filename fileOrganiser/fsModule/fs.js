let fs=require('fs'); // to use fs we need to require it like this 
let path=require('path');

let content=fs.readFileSync('f1.txt'); // it is a func which read data of given parameter (which is file f1) 

//console.log(content); // this will show the buffer value like this <Buffer 68 65 6c 6c 6f 20 68 69>
// Basically ye memory ki location ko btata hai 

// console.log(content+""); // this will show the string value


// fs.writeFileSync("abc.txt","hello everyone"); // isse ye hoga ki agr koi abc.txt file 
// nhi toh bane jayegi or agr koi file hai iss name ki toh wo override kre degi iss
// "hello everyone" string  se previous string se 

// NOTE :- 1- fs.writeFileSync("def.txt","hello everyone"); // current folder me banegi file 
//         2- fs.writeFileSync("/Users/rishabhsharma/Desktop/WebD/wcat/def.txt","hello everyone");// Given path me banegi file 

// fs.writeFileSync("abc.txt","toh ko moko"); // aab ye overide karegi "hello everyone" ko
// "toh ko moko" se


// fs.appendFileSync("abc.txt","acha hai roko"); // aab ye previous string ko "toh ko moko"
// "acha hai roko" ke sath append karegi toh aab (o/p):- "toh ko mokoacha hai roko"

// fs.unlinkSync("abc.txt"); // this will delete given file in parameters



// DIRECTORIES (it is nothing just you can say it's a 'folder' )


//to make a folder
//fs.mkdirSync('pathModule');

//to delete a folder
//fs.rmdirSync('pathModule');

//to check if a file exists or not
// let doesExist=fs.existsSync('fs1.js');
// console.log('fs1.js file',doesExist);

//statusObj of file/folder
// let statusObj=fs.lstatSync('f1.txt');
// console.log(statusObj);
// 'C/Users/Program/Pepcoding/Js' -> this path is refering to a folder
// 'C/Users/Program/Pepcoding/Js/array.js'-> this path is refering to a file

// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());


// let fileArr=fs.readdirSync('/Users/rishabhsharma/Desktop/WebD/fileOrganiser/dir');
// console.log(fileArr);
// NOTE :- Basically ye naa given folder jo bhi file hoti h, unko array me return karwata h
// jo ki ye hai = [ 'abc.txt', 'def.txt', 'f1.txt', 'folder', 'ghi.txt', 'hello.js' ]


let srcPath='/Users/rishabhsharma/Desktop/WebD/fileOrganiser/fsModule/f1.txt';
let destPath='/Users/rishabhsharma/Desktop/WebD/fileOrganiser/fsModule/f2.txt';
//fs.copyFileSync(srcPath,destPath);

let toBeCopiedFileName=path.basename(srcPath);//(i.e 'f1.txt')
let dest=path.join('/Users/rishabhsharma/Desktop/WebD/fileOrganiser/dir',toBeCopiedFileName);
//console.log(dest);
// fs.copyFileSync(srcPath,destPath);
 fs.copyFileSync(srcPath,dest); 

// NOTE :- copyFileSync ye func kya karega ki destination folder me agr source file
//         hai toh override kare dega or agr nhi h toh nayi file bana dega  


// console.log(process.cwd());
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// '|__'
// "└──"

