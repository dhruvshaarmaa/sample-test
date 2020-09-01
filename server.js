const express=require("express");
const app=express();
const port=process.env.PORT || 4040;

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
});
