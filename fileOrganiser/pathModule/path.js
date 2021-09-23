  
let path=require('path');
let fs=require('fs');

let inputArr=process.argv.slice(2);
// console.log(inputArr);
// (i/p) :- node path.js abc.txt def.js
// (o/p) :- [ 'abc.txt', 'def.js' ]


let fileName = inputArr[0];
let content  = inputArr[1];

// console.log('fileName',fileName);
// console.log('content',content);
//  (i/p) :- node path.js abc.txt hellohowareyou
//  (o/p) :- [ 'abc.txt', 'hellohowareyou' ]
//           fileName abc.txt
//           content hellohowareyou



let currentPath=process.cwd(); //method returns the current working directory of the Node.js process
// console.log(currentPath);
// (i/p) :-node path.js
// (o/p) :-/Users/rishabhsharma/Desktop/WebD/fileOrganiser/pathModule


let joinedPath=path.join(currentPath,'abc','def.txt');
// path.join(currentPath,'abc'(folder name),'def.txt'(file name))
// console.log(joinedPath);

let file=path.basename('/Users/rishabhsharma/Desktop/WebD/fileOrganiser/pathModule/path.js');
console.log(file);

let extensionName=path.extname('/Users/rishabhsharma/Desktop/WebD/fileOrganiser/pathModule/path.js');
// console.log(extensionName);