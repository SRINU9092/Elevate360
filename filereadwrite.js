const fs=require('fs');
fs.writeFile('content.txt','hello welcome to node js ',
    (err) =>{
        if(err) throw err;
        console.log('file written successfully');

        fs.readFile('content.txt','utf8',(err,data) =>{
            if(err)throw err;
            console.log('file content',data);
        });
    }
);