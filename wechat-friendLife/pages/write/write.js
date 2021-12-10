Page({
  data: {
    img_url: [],
    content: '',
    textareaValue:'',
    show: false,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
  },
  
  //日期选择弹出框的显示与关闭
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  //获取选择日期
  onDateInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  //获取用户输入文本
  getText: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  clear(){
    this.setData({
      textareaValue:'',
      img_url: [],
      hideAdd: 0
    })
  },
  //选择图片
  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认上限1张图片，原本想做9张的，不知道怎么储存以及拿取地址数组 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        let path = res.tempFilePaths[0] //拿路径  
        that.setData({
          //获取图片路径
          showImage_url: path
        })

        if (res.tempFilePaths.length > 0) {
          //图如果满了1张，不显示加图
          //以hideAdd的值为参照，决定是否渲染加图
          if (res.tempFilePaths.length == 1) {
            that.setData({
              hideAdd: 1
            })
          } else {
            that.setData({
              hideAdd: 0
            })
          }
          //把每次选择的图push进数组
          let img_url = that.data.img_url;
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            img_url.push(res.tempFilePaths[i])
          }
          that.setData({
            img_url: img_url
          })
        }
      }
    })
  },

  //预览图片
  previewImg: function (e) {
    var me = this;
    var img_url = me.data.img_url;
    wx.previewImage({
      urls: img_url,
      success: function (res) {
        console.log(res);
      }
    })
  },

  // 时间戳转换
  formatDate: function (inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  },

  //确认发表，写入数据库，副本,request请求，建议使用这个方法来发表朋友圈
  //图片连接为网络连接
  write1: function () {
    var that = this
    //写入数据库
    wx.request({
      url: 'http://www.yzh.com/writeMyLife.php',
      method: 'GET',
      data: {
        text: this.data.content,
        img: this.data.showImage_url,
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        date: this.formatDate(this.data.currentDate)
      },
      header: {
        'content-Type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data);
        if (res.data.status == 0) {
          wx.showToast({
            title: '提交失败！',
            icon: 'loading',
            duration: 1500
          })
        } else {
          /* wx.showToast({
             title: '提交成功！', //这里打印出登录成功
             icon: 'success',
             duration: 1000
           })*/
           //清除页面内容
           that.clear()  
          //跳转浏览页面，switchTab 跳转tabbar页面
          wx.switchTab({
            url: '../browse/browse',
            //重新执行browse页面onLoad方法，重新拉取数据
            success: function (e) {
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onLoad();
            }
          })
        }
      }
    });
  },

  //确认发表，写入数据库，uploadFile请求，没成功，接口文件有待完善
  //图片为存放在服务器的地址连接
  write: function () {
    var that = this
    var tempFilePaths =that.data.showImage_url
    wx.uploadFile({
      url: 'http://www.yzh.com/upLoad.php', 
      filePath: tempFilePaths,
      name: 'test',
      formData: {
        'user': 'test'
      },
      success (res){
        const data = res.data
        //do something
        //写入数据库
    wx.request({
      url: 'http://www.yzh.com/writeMyLife.php',
      method: 'GET',
      data: {
        text: that.data.content,
        img: that.data.showImage_url,
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        date: that.formatDate(that.data.currentDate)
      },
      header: {
        'content-Type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data);
        if (res.data.status == 0) {
          wx.showToast({
            title: '提交失败！',
            icon: 'loading',
            duration: 1500
          })
        } else {
          /* wx.showToast({
             title: '提交成功！', //这里打印出登录成功
             icon: 'success',
             duration: 1000
           })*/
           //清除页面内容
           that.clear()  
          //跳转浏览页面，switchTab 跳转tabbar页面
          wx.switchTab({
            url: '../browse/browse',
            //重新执行browse页面onLoad方法，重新拉取数据
            success: function (e) {
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onLoad();
            }
          })
        }
      }
    });
      }
    })
    
  },

})