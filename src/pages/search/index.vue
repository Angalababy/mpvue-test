<template>
<div id="searchContainer">
 <div class="search">
   <input @click="handleConfirm" type="text" v-model="searchContent" placeholder="书中自有黄金屋"
          placeholder-class="placeholder">
 </div>
</div>
</template>

<script>
  import request from '../../../util/request'
  export default {
    data(){
      return{
        searchContent:'',
        bookList:[]
      }
    },
    methods:{
      async handleConfirm(){
        let req=this.searchContent
        this.bookList=await request('/searchBooks',{req})
        console.log(result);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #searchContainer
    .search
      width 80%
      height 80rpx
      margin 0 auto
      border-bottom 1rpx solid #02a774
      input
        width 100%
        height 80rpx
        .placeholder
          color #02a774
          font-size 28rpx
          text-align center
</style>
