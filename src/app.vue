
<script>
  import request from '../util/request'
  export default {
    mounted(){
      wx.login({
        success:async (res)=>{
//          console.log(res);
          //获取用户登录的临时凭证
          let code = res.code
          let result=await request('/getOpenId',{code})
          let openId= result.data
          wx.setStorage({
            key:'openId',
            data:openId,
            success:()=>{
              console.log('缓存成功');
            }
          })
        }
      })


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  page
    width 100%
    height 100%
</style>
