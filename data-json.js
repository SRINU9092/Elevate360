const fs=require('fs');
const { parse } = require('path');
const jsonData={
    name:'Node.js',
    type:'Runtime',
    version:'v16.13.1',
};
 
//write json data to a file
fs.writeFile('data.json',JSON.stringify(jsonData),(err)=>{
    if(err) throw err;
    console.log('JSON data saved');
 
    //Read JSON data from the file
    fs.readFile('data.json','utf-8',(err,data)=>{
        if (err) throw err;
        console.log('JSON data:',JSON.parse(data));
    });
});   

 