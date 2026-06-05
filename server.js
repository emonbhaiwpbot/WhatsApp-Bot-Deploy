import express from "express";
import path from "path";

const app = express();

app.use(express.static("."));

app.get("/run",(req,res)=>{

res.json({
success:true,
message:"Bot Request Sent"
});

});

app.listen(process.env.PORT || 3000);
