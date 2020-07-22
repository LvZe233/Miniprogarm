// pages/wxml/wxml.js
Page({

  data: {
    message:"HEllO WORLD",
    firstname:"Kobe",
    lastname:"bryant",
    age : 20,
    nowtime:new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 59
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowtime:new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score:this.data.score + 10
    })
  }
})