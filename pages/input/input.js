// pages/input/input.js
Page({
  data: {

  },
  //event里包含输入的相关信息
  handleInput(event){
    console.log("用户输入内容",event)
  },
  handleFocus(event){
    console.log("获得焦点",event)
  },
  handleBlur(event){
    console.log("失去焦点",event)
  }
})