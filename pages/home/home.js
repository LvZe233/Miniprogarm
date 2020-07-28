Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中',
      duration:3000,
      icon:"loading",
      //image:"/asserts/taBarIcon/button1.png"
      success:function(){
        console.log("显示弹窗成功")
      },
      fail:function(){
        console.log("显示弹窗失败")
      },
      complete:function(){
        console.log("完成函数调用")
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      cancelColor: 'red',
      cancelText:'退出',
      //showCancel:false,
      title: '我是标题',
      content:'我是内容',
      //点击了确定或者取消就会进入success的回调函数
      success:function(res){
        if(res.cancel){
          console.log("用户点击了取消按钮")
        }
        else
          console.log("用户点击了确定按钮")
      }
  })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask:true,
    })
    setTimeout(()=>{
      //必须要手动关闭
      wx.hideLoading()
    },2000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['照片','拍照'],
      itemColor:'red',
      success:function(res){
        console.log(res)
      }
    })
  },
  onShareAppMessage:function(options){
    title:'分享'
  }
})