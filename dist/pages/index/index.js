//index.js

import util from '../../utils/util.js'
var app = getApp()
Page({
  data: {
    userInfo: {},
    iconUrl: [
      "../../images/tow_icon_order.png",
      "../../images/tow_icon_my.png",
      "../../images/tow_icon_traffic.png",
      "../../images/tow_icon_service.png",
      "../../images/tow_icon_change_blue.png"
    ],
    setout: wx.getStorageSync('setout'),
    destination: wx.getStorageSync('destination'),
    todayDate: new Date(),
    showDate: util.formatTime(new Date()),
    date:new Date()
  },
  
  //切换方向
  toggleDirection : function () {
    var that = this  
    that.setData({
      setout: that.data.destination,
      destination: that.data.setout
    })
    
  },
  
 //时间选择
  bindDateChange: function(e) {
    var that = this
    this.setData({
      showDate:util.formatTime( e.detail.value),
      date:e.detail.value
    })
  },

  onShow: function() {
    var that = this
    that.setData({
      setout: wx.getStorageSync('setout'),
      destination: wx.getStorageSync('destination')
    })
  }

  //通过缓存传递参数
  // searchTickets : function(e){
  //   var that = this
  //   wx.setStorageSync('destination', that.data.destination);
  //   wx.setStorageSync('setout', that.data.setout);
  //   wx.setStorageSync('date',that.data.date);
  //    wx.navigateTo({
  //      url: '../tickets/tickets'
  //    })
  // } 
})