<template>
<div class="personalContainer">
  <div class="login">
    <img :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
    <button open-type="getUserInfo" @getuserinfo="handleInfo" >登录</button>
  </div>
  <div class="cardList">
  <div class="card">
    <span>我的收藏</span>
    <span class="more">more></span>
  </div>
  <div class="card" @click="toScan">
    <span>扫码看书</span>
    <span class="more">more ></span>
  </div>
  </div>
</div>
</template>

<script>
  import request from '../../../util/request'
  export default {
    data(){
      return{
        userInfo:{}
      }
    },
    mounted(){
      // 通过wx提供的api获取用户登录信息， 不能主动调起用户授权阶段，需要使用button
      wx.getUserInfo({
        success:(msg)=>{
          this.userInfo=msg.userInfo
        },
         fail:()=>{
          console.log('获取失败');
         }

      })
    },
    methods:{
      // 用户点击button的时候会弹出授权窗口
      handleInfo(info){
        // 点击允许的时候detail中才有userInfo选项
        if(info.mp.detail.userInfo){
          // 更新状态
          this.userInfo = info.mp.detail.userInfo
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .personalContainer
    display flex
    flex-direction column
    .login
      width 100%
      padding 40rpx 0
      background-color #02a774
      img
        width 100rpx
        height 100rpx
        vertical-align middle
        margin 0 40rpx
        border-radius 50rpx
      button
        display inline-block
        height 60rpx
        line-height 60rpx
        background rgba(0,0,0, .2)
        vertical-align middle
        color #fff
        font-size 28rpx
    .cardList
      .card
        width 90%
        margin 20rpx auto
        border 1rpx solid #eeeeee
        padding 20rpx
        border-radius 10rpx
        font-size 30rpx
        .more
          float right
</style>
