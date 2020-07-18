// pages/image/image.js
Page({


  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    //系统API，让用户选择相册或者直接拍照
    wx.chooseImage({
      count: 3,
      success:(res)=>{
        //取出路径
        const Path = res.tempFilePaths[0]
        //设置imagePath
        this.setData({
          imagePath:Path
        })
      }
    })
  },

  handleImageLoad(){
    console.log("加载完成")
  }
})