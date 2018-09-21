// page/QR/Key.js
var wxbarcode = require('../../utils/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    wx.getScreenBrightness({
      success: function(res) {
        wx.setStorageSync('Bright', res.value)
        if (res.value < 0.3) {
          wx.setScreenBrightness({
            value: 0.3,
          })
        }
      },
    })
    var Key = wx.getStorageSync('Key')
    var timestamp = Date.parse(new Date())
    timestamp = timestamp / 1000
    wxbarcode.qrcode('qrcode', timestamp + Key, 600, 600)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    wx.getStorage({
      key: 'Bright',
      success: function(res) {
        wx.setScreenBrightness({
          value: res.data,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    wx.getStorage({
      key: 'Bright',
      success: function(res) {
        wx.setScreenBrightness({
          value: res.data,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
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