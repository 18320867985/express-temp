const router=require("./index");
console.log("22")
router.get("/userRule",(req,res)=>{

    res.send("userRule");
     return;
});

module.exports=router;