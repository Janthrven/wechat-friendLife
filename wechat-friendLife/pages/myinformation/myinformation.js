// pages/me/me.js
let dianzan = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    likeUrl:"../../images/like.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    //读取数据库
    //获取个人信息
    wx.request({
      url: 'http://www.yzh.com/me.php',
      method:'GET',
      data: {
        something: '201835020639'
      },
      header: {
        'content-Type': 'application/json'
      },
      success(res) {
        console.log(res),
          that.setData({
            me: res.data[0],         
          });
      }
    });
  },
 /**
   * 点赞函数，运用了三元运算符
   */
  likeMe(){
    this.setData({
      likeUrl:dianzan ? "../../images/like.png" : "../../images/likeclick.png"
    })
    dianzan = !dianzan
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