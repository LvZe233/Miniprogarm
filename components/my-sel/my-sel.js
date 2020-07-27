// components/my-sel/my-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  data: { 
    count: 0
  },

  methods: {
    increseCount(num){
      this.setData({
        count: this.data.count + num
      })
    }
  }
})
