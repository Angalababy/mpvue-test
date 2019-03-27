<template>
  <div class="booksContainer">
    <swiper indicator-dots>
    <swiper-item>
      <img src="../../../static/imgs/firstView/1.jpg" alt="">
    </swiper-item>
    </swiper>
    <div id="AllBooks">
      <div class="nav">
        <span class="all">全部商品</span>
        <span class="more"> > </span>
      </div>
      <ul class="booksList">
        <li class="bookItem">
          <img src="../../../static/imgs/firstView/1.jpg" alt="">
          <p class="bookName">Angelababy</p>
          <p class="bookDir">Angelababy</p>
        </li>
        <li>
          <img src="../../../static/imgs/firstView/2.jpg" alt="">
          <p>Angelababy</p>
          <p>Angelababy</p>
        </li>
        <li>
          <img src="../../../static/imgs/firstView/3.jpg" alt="">
          <p>Angelababy</p>
          <p>Angelababy</p>
        </li>
        <li>
          <img src="../../../static/imgs/firstView/nvsheng.jpg" alt="">
          <p>Angelababy</p>
          <p>Angelababy</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #booksContainer
    swiper
      width 100%
      height 400rpx
      img
        height 100%
        width 100%
    #AllBooks
      .nav
        padding 10rpx
      .more
        float right
        width 80rpx
        height 100%
        text-align right
        color #02a774
      .booksList
        display flex
        flex-wrap wrap
        .bookItem
          width 50%
          box-sizing border-box
          border-bottom 1rpx solid #eee
          text-align center
          padding 20rpx
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
            border-left 1rpx solid #eee
          img
            width 200rpx
            height 200rpx
          .bookName
            font-size 30rpx
            line-height 60rpx
          .bookDir
            font-size 28rpx
</style>
