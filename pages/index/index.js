// pages/index/index.js
Page({
    gotoPageIntroTaishan:function() {
        wx.navigateTo({
          url: '/pages/taishan/taishan',
        })
    },
    gotoPageIntroJiNan:function() {
        wx.navigateTo({
          url: '/pages/jinan/jinan',
        })
    },
    gotoPageIntroJiNing:function(){
        wx.navigateTo({
          url: '/pages/jining/jining',
        })
    },
    gotoPageIntroWeiFang:function() {
        wx.navigateTo({
          url: '/pages/weifang/weifang',
        })
    }
})