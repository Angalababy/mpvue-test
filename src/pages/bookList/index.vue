<template>
<ul class="list">
  <li v-for="(item,index) in datas" :key="index">
    <img :src="item.image" alt="">
    <div class="content">
      <p>{{item.title}}</p>
      <p>作者：{{item.author}}</p>
      <p>出版社：{{item.publisher}}</p>
    </div>
    <span class="price">{{item.price}}</span>
  </li>
</ul>
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
      console.log(this.datas);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .list
    width 100%
    li
      padding 10rpx
      display flex
      position relative
      border-bottom 1rpx solid #eee
      img
        width 140rpx
        height 140rpx
      .content
        margin-left 10rpx
        p
          font-size 32rpx
      .price
        position absolute
        top 10rpx
        right 20rpx
        color red
        font-size 36rpx
        font-weight bold

</style>
