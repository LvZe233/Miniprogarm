// pages/wxml/wxml.js
Page({

  data: {
    message:"HEllO WORLD",
    firstname:"Kobe",
    lastname:"bryant",
    age : 20,
    nowtime:new Date().toLocaleString(),
    isActive: false
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
  }
})