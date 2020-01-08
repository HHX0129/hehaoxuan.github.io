/*
 * @Author: your name
 * @Date: 2020-01-08 14:38:04
 * @LastEditTime : 2020-01-08 17:41:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hhx.github.io/assets/js/login.js
 */
// 登录按钮
let submitBtn = $('#submitBtn')
//  输入框
let inp = $('#email')

// 为登录按钮绑定点击事件
submitBtn.click(() => {
  // 获取输入的内容
  let inpVal = inp.val()
  const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
  if (reg.test(inpVal)) {
    //href:设置或者获取地址栏信息路径
    //search：获取地址栏参数 例：(?name=zj&age=18)
    //host:返回主机（域名）
    //port:返回端口号
    //pathname:返回路径
    //hash：返回片段 #后面的内容，常见链接 锚点
    location.href = '../../html5up-prologue/index.html'
  }
})
