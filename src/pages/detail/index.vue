<template>
<div>
  <h2>{{book.title}}</h2>
  <img :src="book.image" alt="">
  <div>
  <span>作者：{{book.author}}</span>
  <span>出版社：{{book.publisher}}</span>
  <span>出版日期：{{book.pubdate}}</span>
  <span>定价：{{book.price}}</span>
  </div>
  <button>收藏该文章</button>
  <article>
    <h1>作者简介</h1>
    <section>{{book.author_intro}}</section>
  </article>
  <article>
    <h1>文章简介</h1>
    <section>{{book.summary}}</section>
  </article>
</div>
</template>

<script>
  export default {
    data(){
      return{
        book:{}
      }
    },
    mounted(){
      console.log(this);
      this.book=JSON.parse(this.$mp.query.book)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
