// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picture:"/images/video-top.jpg",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //获取视频内容
    wx.request({
      url: 'http://www.yzh.com/video.php',
      method: 'GET',
      header: {
        'content-Type': 'application/json'
      },
      success(res) {
        console.log(res),
          that.setData({
            videolist: [
              {
                video:res.data[0][0],
                id:res.data[0][1],
                url:res.data[0][2],
              },
              {
                video:res.data[1][0],
                id:res.data[1][1],
                url:res.data[1][2],
              },
              {
                video:res.data[2][0],
                id:res.data[2][1],
                url:res.data[2][2],
              },
              {
                video:res.data[3][0],
                id:res.data[3][1],
                url:res.data[3][2],
              },
              {
                video:res.data[4][0],
                id:res.data[4][1],
                url:res.data[4][2],
              },
              {
                video:res.data[5][0],
                id:res.data[5][1],
                url:res.data[5][2],
              },
              {
                video:res.data[6][0],
                id:res.data[6][1],
                url:res.data[6][2],
              }, 
              {
                video:res.data[7][0],
                id:res.data[7][1],
                url:res.data[7][2],
              },
              {
                video:res.data[8][0],
                id:res.data[8][1],
                url:res.data[8][2],
              },
            ]   
          });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})