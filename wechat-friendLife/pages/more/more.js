// pages/more/more.js
Page({


  /**
   * 页面的初始数据
   */
  data: {

  },

  // 查看位置，自定义城院的经纬度
  location() {
    var that = this
  wx.openLocation({
    latitude: 22.97879,
    longitude: 113.840621,
  })
  },

  scan(){
    var that = this
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
        wx.showToast({
          title: '扫描成功',
          icon: 'success',
          duration: 2000
        })

  },

  // 跳转指南针页面
  compass() {
    wx.navigateTo({
      url: '../compass/compass'
    })
  },

  // 跳转指南针页面
  write() {
    wx.navigateTo({
      url: '../video/video'
    })
  },

})