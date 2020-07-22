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
    score: 59,
    movies: ["星际穿越","大话西游","海王"],
    nums:[
      [0,1,2,],
      [10,11,12],
      [21,22,23]
    ]
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