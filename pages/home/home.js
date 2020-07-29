// pages/home/home.js
Page({

  data: {
    title:"哈哈哈"
  },
  handlePushDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail?titlr=你好啊',
    })
  }
  
})