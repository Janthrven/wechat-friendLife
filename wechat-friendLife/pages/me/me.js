// index.js
// 获取应用实例
const app = getApp()

Page({
  data:{
    value: 5,
  },

  //右上角分享功能
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: '',
      path: '/pages/list/list?id=' + that.data.scratchId,
      imageUrl: " ",
      success: function (res) {
        // 转发成功
        console.log("转发成功", res);
       
      },
      fail: function (res) {
        // 转发失败
        
      }
    }
  
  },
  /**
   * 点赞函数--van样式
   */
  onChange(event) {
    this.setData({
      value: event.detail,
    });
  },
  // 跳转个人信息页面函数，主要数据从数据库获取
  bindViewTap() {
    wx.navigateTo({
      url: '../myinformation/myinformation'
    })
  },
})
