App({                           //小程序关闭时会在后台存活5分钟，五分钟内重新打开不会进行初始化，直接onShow
  onLaunch:function(){          //小程序初始化完成执行
   console.log("小程序初始化完成： onluanch")
  },

  onShow:function(options){     //小程序界面显示完成
    console.log("界面显示出来： onShow")
    console.log(options.scene)
    //1.判断小程序的进入场景
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
  },

  onHide:function(){             //界面被隐藏时调用
    console.log("界面被隐藏： onHide")
  },

  onError:function(msg){
    console.log("小程序发生了错误")
  }

})