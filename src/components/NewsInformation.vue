<style scoped>
  .el-main{
    max-width: 800px;
    margin-top:30px;
    margin-left:auto;
    margin-right:auto;
    padding-bottom:100px;
  }
  .el-main > h1{
    text-align: center;
    color:#ff0000;
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 160px;
  }

  .el-main > ul{
    list-style: none;
    -webkit-padding-start:0;
  }
  .el-main > ul > li{
    width:100%;
    margin-top:5px;
    padding-bottom:4px;
    border-bottom:1px solid #f0f0f0;
  }
  .el-main > ul > li > a{
    width:calc(100% - 11rem);
    box-sizing: border-box;
    text-align: left;
    text-decoration: none;
    color:#666;
    display: inline-block;

    word-break:keep-all;/* 不换行 */
    white-space:nowrap;/* 不换行 */
    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }
  .el-main > ul > li > span{
    box-sizing: border-box;
    width:11rem;
    color:#adadad;
    text-decoration: right;
    display:inline-block;
  }
  /*小屏设备*/
  @media screen and (max-width:767px) {
    .el-main{
      padding-left:10px;
      padding-right:10px;
    }
    .el-main > ul > li > a{
      width:100%;
    }
  }
</style>
<template>
  <el-main>
    <h1>新闻信息</h1>
    <ul>
      <li v-for='news in newsList'><router-link :to="'/newsinformation/'+news.newsID">{{news.title}}</router-link><span>{{news.publishTime}}</span></li>
    </ul>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :page-size="15"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </el-main>
</template>

<script>
  export default {
    data() {
      return {
        newsList:[],
        total:{},
        tableData: [], //表格显示数据
        allData: [], //总数据
      }
    },
    mounted() {
      this.getCurrentData()
    },
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
        this.getCurrentData(val)
      },
      getCurrentData(currentPage = 1) {
        const that = this;
        console.log(that);
        this.$http.get(
          that.$interface + 'getArticlePages?categoryId=1'+'&pageNum='+currentPage+'&pageSize=15'
        )
          .then(function (response) {
            if (response.data.status === 1) {
              that.newsList = [];
              response.data.data.list.forEach(function (item) {
                that.newsList.push({
                  title: item.title,
                  publishTime: item.publishdate,
                  newsID: item.articleid,
                });
              });
            } else {
              that.$message({
                message: response.data.msg,
                type: 'warning'
              });
            }
            that.total = response.data.data.total;
            console.log(that.total);
          })
          .catch(function (err) {
            console.log(err);
            that.$message({
              message: '数据 error',
              type: 'warning'
            })
          });
      }
    },
  }
</script>
