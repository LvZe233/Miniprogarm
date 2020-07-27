Component({
 
  properties:{
    //title: String,
    title:{
      type:String,
      value:"我是默认标题",
      observer:function(newValue,oldValue){
        console.log(newValue,oldValue)
      }
    }
  }

})