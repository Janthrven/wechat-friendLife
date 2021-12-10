// pages/browse/browse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInput: false, //控制输入栏
  },
  //点击出现输入框
  showInput: function() {
    this.setData({
      showInput: true
    })
  },
  //隐藏输入框
  onHideInput: function() {
    this.setData({
      showInput: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    //获取swiper滑块视图照片
    wx.request({
      url: 'http://www.yzh.com/swiper.php',
      //写网络ip地址 真机调试可以拉取到数据，
      //只是这样很麻烦，每换一个网络就得重新更换为新网络的ip，数据库里面的数据地址也要换
      //url: 'http://192.168.75.101/swiper.php',
      //url: 'http://127.0.0.1/swiper.php',
      method: 'GET',
      header: {
        'content-Type': 'application/json'
      },
      success(res) {
        console.log(res),
          that.setData({
            img0: res.data[0],
            img1: res.data[1], 
            img2: res.data[2],
            img3: res.data[3],
            img4: res.data[4],    
          });
      }
    });

    //获取朋友圈内容
    wx.request({
      url: 'http://www.yzh.com/mylife.php',
      method: 'GET',
      header: {
        'content-Type': 'application/json'
      },
      success(res) {
        console.log(res),
          that.setData({
            //朋友圈数据数组赋值，页面渲染数据子项对应下标
            me:[res.data],
            /*一个很蠢的方法，一个个赋值，已抛弃，采用上面的数组赋值
            mylife: [
              {
                img:res.data[0][0],
                date:res.data[0][1],
                text:res.data[0][2],
                key:res.data[0][3],
              },
              {
                img:res.data[1][0],
                date:res.data[1][1],
                text:res.data[1][2],
                key:res.data[1][3],
              },
              {
                img:res.data[2][0],
                date:res.data[2][1],
                text:res.data[2][2],
                key:res.data[2][3],
              },
              {
                img:res.data[3][0],
                date:res.data[3][1],
                text:res.data[3][2],
                key:res.data[3][3],
              },
              {
                img:res.data[4][0],
                date:res.data[4][1],
                text:res.data[4][2],
                key:res.data[4][3],
              },
              {
                img:res.data[5][0],
                date:res.data[5][1],
                text:res.data[5][2],
                key:res.data[5][3],
              },
              {
                img:res.data[6][0],
                date:res.data[6][1],
                text:res.data[6][2],
                key:res.data[6][3],
              }, 
            ]*/   
          });
      }
    });
  },

  //预览图片
  previewImg: function (e) {
    var img_url = e.currentTarget.id;
    wx.previewImage({
      //要么img_url原本就是个数组，要么就在这里给他加个[]，不然识别不了数据
      urls: [img_url],
      success: function (res) {
        console.log(res);
      }
    })
  },

//确认删除，删除数据库
delete: function(e) {
  var that = this
  //dataset根本赋值不了，id赋值才行
  //var getDate=e.currentTarget.dataset.delDate
  var getDate = e.currentTarget.id
  //请求删除数据库
  wx.request({    
    url: 'http://www.yzh.com/delete.php',
    method: 'GET',
    data: { 
      sentDelDate: getDate
    },
    header: {
      'content-Type': 'application/x-www-form-urlencoded'
    },
    success(res) {
      console.log(res.data);
      if (res.data.status == 0) {
        wx.showToast({
          title: '删除失败！',
          icon: 'loading',
          duration: 1500
        })
      } else {
        //重新加载数据
        that.onLoad()
      }
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