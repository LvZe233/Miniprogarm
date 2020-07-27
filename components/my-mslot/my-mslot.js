// components/my-mslot/my-mslot.js
Component({
  //----------------使用者可以给组件传入数据---------------
  properties:{
    title:{
      type:String,
      value:" "
    }
  },

    //----------------定义组件内部的初始化数据---------------
  data:{
    count:0
  },

    //------------------组件内部定义函数----------------- 
  methods:{

  },

    //----------------定义组件的配置选项---------------
 options:{
   multipleSlots:true,
   styleIsolation:false
 },

  //-------------外界给组件传入额外样式(是一个数组)-----------
  externalClasses:[],

  //----------------监听properties/data的改变---------------
observers:{
  count:function(newValue){
    console.log(newValue)
  }
},

  //------------------组件中监听生命周期-----------------
  //1.监听所在页面生命周期
  pageLifetimes:{
    show(){
      console.log("监听组件所在页面显示出来")
    },
    hide(){
      console.log("监听组件所在页面隐藏起来")
    },
    resize(){
      console.log("监听组件所在页面尺寸的改变")
    }
  },
  //2.监听组件本身生命周期
  lifetimes:{
    created(){
      console.log("组件被创建出来")
    },
    attached(){
      console.log("组件被添加到页面")
    },
    ready(){
      console.log("组件被渲染出来")
    },
    moved(){
      console.log("组件被移动到另一个节点")
    },
    detached(){
      console.log("组件被移除掉")
    }
  }

})
