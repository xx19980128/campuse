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
 /* .el-main > ul > li > a{
    width:calc(100% - 11rem);
    box-sizing: border-box;
    text-align: left;
    text-decoration: none;
    color:#666;
    display: inline-block;

    word-break:keep-all;!* 不换行 *!
    white-space:nowrap;!* 不换行 *!
    overflow:hidden;!* 内容超出宽度时隐藏超出部分的内容 *!
    text-overflow:ellipsis;!* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*!
  }*/
  .el-main > ul > li > span{
    box-sizing: border-box;
    width:11rem;
    color:#adadad;
    text-align: right;
    display:inline-block;
  }
  .el-main > ul > li > a{
    width:100%;
    text-decoration: none;

  }
  /*小屏设备*/
  @media screen and (max-width:767px) {
    .el-main{
      padding-left:10px;
      padding-right:10px;
    }
    .el-main > ul > li > a{
      width:100%;
      text-decoration: none;

    }
  }
</style>
<template>
  <el-main>
    <h1>在线报名入口</h1>
    <ul>
      <li v-for='link in linkList'><i class="el-icon-caret-right"></i><a :href="link.link" target="_blank">{{link.title}}</a></li>
    </ul>
  </el-main>
</template>

<script>
  export default {
    data() {
      return {
        linkList: [{
          title:'英语四六级考试报名入口',
          link:'http://cet.etest.net.cn/',
        },{
          title:'计算机等级考试报名入口',
          link:'http://jiaowu.sicau.edu.cn/xuesheng/kao/bao/kaike.asp',
        },{
          title:'计算机考试入口',
          link:'http://cjcx.neea.edu.cn/ncre/query.html',
        }],
      }
    },
  }
</script>
