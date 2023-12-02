// app.js
App({
    onLaunch() {
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                let code = res.code
                console.log(code);
                wx.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session',
                    method: 'GET',
                    data: {
                        appid: 'wx749a5f106bf77108',
                        js_code: code,
                        secret: '25d7868874c9eff1c503a9f85437c0ab',
                        grant_type: 'authorization_code'
                    },
                    success: (res) => {
                        console.log("成功", res.data.openid);
                    },
                    fail: (err) => {

                    }
                })
            }
        })
    },
    globalData: {
        userInfo: null
    }
})