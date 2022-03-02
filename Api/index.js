const express = require('express');
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hi");
})

app.post('/bfhl',(req,res)=>{
    let status = true;
    try{
    let num_Arr = []
    let alf_Arr = []
    let arr = req.body.data
    for(let i=0;i<arr.length;i++){
        if(!isNaN(arr[i])){
            num_Arr.push(arr[i])
        }else{
            alf_Arr.push(arr[i])
        }
    }
    let ans = {
        is_success: status,
        user_id: "pranay_garg_26102000",
        email: "pranaygarg.cse19@chitkarauniversity.edu.in",
        roll_number: "1911981078",
        numbers:num_Arr,
        alphabets:alf_Arr
    }
    res.send(ans)
    }
    catch(err){
        status = false;
        res.send({
            is_success: status
        })
    }
})

app.listen(process.env.PORT, () => {
    console.log("Server is running at port 8000");
});