const TOKEN = 'token'

App({     
  //globalData 对象存在内存之中，小程序关闭之后会消失  
  globalDate:{
    token:''
  } ,            

  onLaunch:function(){         
    //1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    //2.判断token中是否有值
    if (token && token.length != 0){    //已经有token，验证token是否过期
      this.check_token(token)     //验证token是否过期
    }
    else { //没有token，进行登陆操作
      this.login()
    }
  },

  check_token(token){
    console.log('执行了验证token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'POST',
      header:{
        token:token
      },
      success:(res)=>{
        if(!res.data.errCode){
          this.globalDate.token = token
        }
        else{
          this.login()
        }
      },
      fail:function(err){
        console.log(err)
      }
    })
  },

  login(){
    console.log("执行了登陆操作")
    //登陆操作
    wx.login({
      timeout: 30000,
      //code只有5分钟的有效期
      success:(res)=>{
      //获取code
      const code = res.code;

      //将code发送给服务器
      wx.request({
        url: 'http://123.207.32.32:3000/login',
        method:"POST",
        data:{
          code:code
        },
        success:(res)=>{
          //取出token
          const token = res.data.token;

          //将token保存到 globalData 中
          this.globalDate.token = token
          wx.setStorageSync(TOKEN, this.globalDate.token)
        }
      })
      }
    })
  }

})