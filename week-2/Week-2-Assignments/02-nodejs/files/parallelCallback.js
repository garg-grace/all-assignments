const fs = require('fs');

function parallelCallback(){
    var arr=[];
    var count=0;
    fs.readFile('a.txt','utf-8',(err,data)=>{
        if(err){
            throw(err);
        }else{
            arr[0]=data;
        }
        count++;
        if(count==2)console.lof(arr);
    });
    fs.writeFile('b.txt','Hello!!',(err)=>{
        if(err) arr[1]=0;
        else arr[1]=1;
        count++;
        if(count==2) console.log(arr);
    });

    
}

parallelCallback();