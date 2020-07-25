// pages/home/home.js
Page({

  data: {
    titles:["衣服","裤子","鞋子"]
  },
  handlebtnClick(){
    console.log("按钮发生了点击")
  },
  handleTouchStart(){
    console.log("handleTouchStart")
  },
  handleTouchMove(){
    console.log("handleTouchMove")
  },
  handleTouchEnd(){
    console.log("handleTouchEnd")
  },
  handleTap(){
    console.log("handleTap")
  },
  handleLongPrss(){
    console.log("handleLongPrss")
  },

  handleEventClick(event){
    console.log("--------------",event)
  },
  handleItemClick(event){
    console.log(event)
  },

  handleCaptureView1(){
    console.log("handleCaptureView1")
  },
  handleBIndView1(){
    console.log("handleBIndView1")
  },
  handleCaptureView2(){
    console.log("handleCaptureView2")
  },
  handleBIndView2(){
    console.log("handleBIndView2")
  },
  handleCaptureView3(){
    console.log("handleCaptureView3")
  },
  handleBIndView3(){
    console.log("handleBIndView3")
  }
})