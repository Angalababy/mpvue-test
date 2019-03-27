<template>
 <div class="firstView">
  <swiper :indicator-dots="current!==3" @change="handleChange">
    <swiper-item >
      <img src="/static/imgs/firstView/1.jpg" alt="">
    </swiper-item>
    <swiper-item>
      <img src="/static/imgs/firstView/2.jpg" alt="">
    </swiper-item>
    <swiper-item>
      <img src="/static/imgs/firstView/3.jpg" alt="">
    </swiper-item>
    <swiper-item>
      <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
    </swiper-item>
  </swiper>
   <button class="btn" v-if="current===3" @click="handleBook">开启体验</button>
</div>
</template>

<script>
  export default {
    data(){
      return{
        current:0
      }
    },
    methods:{
      handleChange(event){
        console.log(event)
        this.current=event.mp.detail.current
      },
      handleBook(){
        wx.navigateTo({

        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.firstView
  width 100%
  height 100%
  swiper
    width 100%
    height 100%
    swiper-item
      width 100%
      height 100%
      img
        width 100%
        height 100%
  .btn
    position absolute
    bottom 30rpx
    left 50%
    margin-left -100rpx
    width 200rpx
    height 80rpx
    line-height 80rpx
    background rgba(255,255,255,.7)
</style>
