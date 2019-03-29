<template>
  <div class="booksContainer">
    <swiper indicator-dots>
    <swiper-item v-for="(item,index) in swiperList" :key="index" >
      <img :src="item.image" alt="">
    </swiper-item>
    </swiper>
    <div class="AllBooks">
      <div class="nav">
        <span class="all">全部商品</span>
        <span class="more" @click="toBookList"> > </span>
      </div>
      <ul class="booksList">
        <li class="bookItem" v-for="(item,index) in datas" :key="index" @click="toDetail(item)">
          <img :src="item.image" alt="">
          <p class="bookName">{{item.title}}</p>
          <p class="bookDir">{{item.author}}</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import datas from './datas/data.json'
  export default {
      data(){
        return{
          datas:[]
        }
      },
      mounted(){
        this.datas=datas
      },
      computed:{
        swiperList(){
          return [...this.datas].splice(0,4)
        }
      },
      methods:{
        toDetail(item){
          console.log(item);
          wx.navigateTo({
            url:'/pages/detail/main?book='+JSON.stringify(item)
          })
        },
        toBookList(){
          wx.navigateTo({
            url:'/pages/bookList/main'
          })
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .booksContainer
    width 100%
    swiper
      width 100%
      height 400rpx
      img
        height 100%
        width 100%
    .AllBooks
      width 100%
      .nav
        padding 10rpx
        .more
          float right
          width 80rpx
          height 100%
          text-align right
          color #02a774
      .booksList
        width 100%
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
