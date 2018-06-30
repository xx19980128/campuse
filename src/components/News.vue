<style scoped>
  .el-main{
    max-width: 1200px;
    margin-top:30px;
    margin-left:auto;
    margin-right:auto;
    padding-bottom:100px;
  }
  .el-main  h1{
    text-align: center;
    margin-top: 160px;
  }

  .el-main  .news-info{
    text-align: center;
    color:#adadad;
  }
  .el-main  .news-info  span{
    padding-left:5px;
    padding-right:5px;
  }

  /*小屏设备*/
  @media screen and (max-width:767px) {
    .el-main{
      padding-left:10px;
      padding-right:10px;
    }
}
</style>
<template>
  <el-main >
    <div>
    <h1 class='news-title'>{{news.title}}</h1>
    <p class='news-info'><span>{{news.publishdate}}</span><span>{{news.user}}</span><span>{{news.source}}</span></p>
    <div class='news-body' v-html="news.contents">{{news.contents}}</div>
    </div>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
      news:{},
    };
    },
  mounted () {
    const that = this;
    console.log(that);
    let url = that.$route.path;         //获取路由路径
    let pos = url.lastIndexOf('/');     //获取ID前有多少个字符
    url = url.substring(pos);           //获取ID
    this.$http.get(
      that.$interface+'getArticle/' +url
    )
      .then(function (response) {
        if(response.data.status === 1){
          that.news = response.data.data;
          console.log(that.news)
        }else{
          that.$message({
            message: response.data.msg,
            type: 'warning'
          });
        }
      })
      .catch(function (err) {
        console.log(err);
        that.$message({
          message: '数据 error',
          type: 'warning'
        })
      });
  }
}
</script>
