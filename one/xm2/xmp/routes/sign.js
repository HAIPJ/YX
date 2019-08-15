const express=require("express")
const router=express.Router();
const pool=require("../pool");
// <!-- 注册 -->
router.get('/sign',function(req,res){
	//格式化为对象
	var obj=req.query;
	// console.log(obj);
		//检测是否为空
	if(obj.uemail==''){
		res.send({code:401,msg:'uemail required'});
			return;
	};
	if(obj.uname==''){
		res.send({code:402,msg:'uname required'});
		return
	}
		if (obj.upwd=='')
		{res.send({code:403,msg:'upwd required'})
		return
		}
		if (obj.upwd2=='')
		{res.send({code:404,msg:'upwd2 required'})
			return
		}
		
		// 执行SQL语句
pool.query('INSERT INTO login SET ?',[obj],function(err,result){
	//判断错误
	if(err) throw err;
	console.log(result)
		//判断是否成功
	if(result.affectedRows>0){
		res.send({code:200,msg:'res suc'})
	}else{
		res.send({code:-1,msg:"注册失败"})
	}
})
	//res.send('注册成功');
});

module.exports=router;