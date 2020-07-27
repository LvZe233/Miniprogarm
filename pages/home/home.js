// pages/home/home.js
import request from "../../services/network.js"

Page({
  data: {

  },

  onLoad: function (options) {
    //1.原生方式发送完刚落请求
    this.get_data_origin;
    
    //2.使用封装的方法发送网络请求
    request({
      "url":"http://123.207.32.32:8000/recommend"
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },

get_data_origin(){
   //1.发送最简单的get请求
   wx.request({
    url: 'http://123.207.32.32:8000/recommend',
    success:(res)=>{
      console.log(res)
    }
  }),

  //2.get请求，并且携带参数
  wx.request({
    url: 'http://123.207.32.32:8000/home/data',
    data:{
      type:"sell",
      page:1
    },
    success:(res)=>{
      console.log(res)
    }
  })

  //3.post请求，并且携带参数
  wx.request({
    url: 'http://httpbin.org',
    method:"POST",
    data:{
      name:"clown",
      age:12
    },
    success:(res)=>{
      console.log(res)
    },
    fail:(res)=>{
      console.log(res)
    }
  })
}

})