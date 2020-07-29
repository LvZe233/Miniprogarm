// pages/detail/detail.js
Page({

  onLoad: function (options) {
    console.log(options)
  },
  onUnload:function(){
    //获取首页的页面对象
    //getCurrentPages 能获取所有活跃的页面对象
    const pages = getCurrentPages()
    const home = pages[pages.length-2]
    //调用页面对象的方法
    home.setData({
      title:"呵呵呵"
    })
  },
  handleBack(){
    wx.navigateBack({
      delta:1
    })
  }
})