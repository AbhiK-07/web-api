const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Connected")
})

app.post('/bfhl',(req,res)=>{
let stat=true;
try{
let arr_num=[]
let arr_alph=[]
let arr = req.body.data

for(let i=0;i<arr.length;i++)
{
   if(!isNaN(arr[i]))
   {
      arr_num.push(arr[i]) 
   } 
   else{
       arr_alph.push(arr[i])
   }
}
let dat = {
    is_success: stat,
    user_id: "abhishek_13022001",
    email: "abhi.cse19@chitkarauniversity.edu.in",
    roll_number: "1911981124",
    numbers:arr_num,
    alphabets:arr_alph
}
res.send(dat)
}
catch(err){
    stat=false;
    res.send({
        is_success: stat
    })
}


})








app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});