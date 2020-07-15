// pages/home/home.js
//调用app.json文件中定义的全局数据, getApp()函数可以获取App()产生的实例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)
Page({
  handGetUserInfo(event){                   //当用户点击 获取授权 按钮时会传递进这个event参数
    console.log(event)
  }
})