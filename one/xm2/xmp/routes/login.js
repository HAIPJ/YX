const express=require("express")
const router=express.Router();
const pool=require("../pool");

// <!-- 登录 -->
router.get("/login",(req,res)=>{
	var uemail=req.query.uemail;
	var upwd=req.query.upwd;
	if(!uemail){
		res.send("用户不存在")
	return	
	}
	if(!upwd){
		res.send("密码不存在")
	return	
	}
  var sql=`select*from login where uemail=? and upwd=?;`;
  pool.query(sql,[uemail,upwd],function(err,result){
	  if(err)throw err;
    //判断数组长度是否大于0
	if(result.length>0){
		res.send("登录成功")

	}else{res.send("登录失败")}
  })
})

// 验证用户名
// router.post("/login",(req,res)=>{
// 	var obj=req.body;
// 	var sql="select*from login where uemail=?";
// 	pool.query(sql,[obj.uemail],(err,result)=>{
// 		if(err)throw err;
// 		if(result.length>0){
// 			res.send({code:1,msg:"登录成功"})
// 		}else{
// 			res.send({code:-1,msg:"用户名不存在"})
// 		}
// 	})
// })
module.exports=router;