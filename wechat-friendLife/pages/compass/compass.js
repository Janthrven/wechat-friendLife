// pages/compass/compass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rotate: 0,
    degree: '未知',
    direction: '',
    lat:0,
    lon:0,
    alt:0
  },

  /**
   * 自定义函数--判断方向
   */
  getDirection: function(deg) {
    let dir = '未知'

    if (deg >= 340 || deg <= 20) {
      dir = '北'
    } else if (deg > 20 && deg < 70) {
      dir = '东北'
    } else if (deg >= 70 && deg <= 110) {
      dir = '东'
    } else if (deg > 110 && deg < 160) {
      dir = '东南'
    } else if (deg >= 160 && deg <= 200) {
      dir = '南'
    } else if (deg > 200 && deg < 250) {
      dir = '西南'
    } else if (deg >= 250 && deg <= 290) {
      dir = '西'
    } else if (deg > 290 && deg < 340) {
      dir = '西北'
    }

    // console.log("dir:"+dir+',deg:'+deg)
    // 更新角度和方向到画面中
    this.setData({
      degree: deg,
      direction: dir
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this

    // 获取地理位置信息
    wx.getLocation({
      altitude:true,
      success: function(res) {
        that.setData({
          lat:res.latitude.toFixed(2),
          lon: res.longitude.toFixed(2),
          alt: res.altitude.toFixed(2)
        })
      },
    })

    // 监听指南针的角度
    wx.onCompassChange(function(res) {
      // console.log(res.direction.toFixed(0))
      // 获取指南针角度
      let degree = res.direction.toFixed(0)

      // 更新方向描述
      that.getDirection(degree)

      // 更新图片角度
      that.setData({
        rotate: 360 - degree
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})