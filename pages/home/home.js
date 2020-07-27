// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  handleIncrement(){
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleItemClick(event){
    console.log(event)
  },

  handleIncrementcpn(){
    //可以使用class或者id获得组件的对象     
    const my_sel = this.selectComponent(".sel-class")
    // 1.通过setData直接修改组件内的数据       （ 直接修改组件内数据不规范）
    // my_sel.setData({                          
      // count : my_sel.data.count + 10
    // })

    // 2.通过方法对组件数据进行修改 (给一个接口来修改数据)
    my_sel.increseCount(30)  
  }
  
})