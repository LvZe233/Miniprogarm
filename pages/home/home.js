// pages/home/home.js

//调用Page方法实际上就是注册一个页面
//页面也有生命周期函数
Page({

  //-----------------------1.监听页面的生命周期函数------------------------
  //页面被加载出来
  onLoad() {
    console.log("onLoad")
    wx.request({                                      //进行网络请求
      url: 'http://123.207.32.32:8000/recommend',
      success:(res)=>{
        console.log(res)
      }
    })
  },
  //页面被 初次 渲染
  onReady() {
    console.log("onReady")
  },
  //页面显示出来
  onShow() {
    console.log("onShow")
  },
  //页面关闭或隐藏
  onHide() {
    console.log("onHide")
  },
  onUnload() {
    console.log("onUnload")
  },

  //----------------------------2.初始化数据--------------------------------
  //页面的数据保存在 data 之中
  data:{
    message:"hahaha",
    list:[]                               //空数组
  },

  //---------------------------监听wxml中相关的一些事件-----------------------
  handGetUserInfo(event){                   //当用户点击 获取授权 按钮时会传递进这个event参数
    console.log(event)
  },

  //--------------------------------监听其他事件-------------------------------
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log("页面滚动到底部")
  }
})