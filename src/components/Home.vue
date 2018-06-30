<style>
  .el-carousel{
    height:500px;
    width: 1200px;
    margin: 0 auto;
    padding-top: 160px;
  }
  .el-carousel__item{
    height: 500px;
  }
  .el-carousel__item > img {
      line-height:0;
      font-size:0;
    height:500px;
    width: 1200px;
  }
  .wrap-main-part-one{
    width:1200px;
    margin:0 auto;
    background-color:#f7f8fa;
  }
  .main-part-one{
    margin-left:auto;
    margin-right:auto;
    max-width: 1200px;
    padding-left:20px;
    padding-right:20px;
  }

  .list-container{
    box-sizing: border-box;
  }
  @media screen and (min-width:992px) {
    .list-container:nth-of-type(1),
    .list-container:nth-of-type(2),
    .list-container:nth-of-type(3){
      border-right:1px solid #dadee4;
    }
  }
  @media screen and (min-width:768px) and (max-width: 991px) {
    .list-container:nth-of-type(1),
    .list-container:nth-of-type(3){
      border-right:1px solid #dadee4;
    }
    .list-container:nth-of-type(1),
    .list-container:nth-of-type(2){
      border-bottom:1px solid #dadee4;
    }
  }
  @media screen and (max-width:767px) {
    .list-container:nth-of-type(1),
    .list-container:nth-of-type(2),
    .list-container:nth-of-type(3){
      border-bottom:1px solid #dadee4;
    }
  }
  .part-one-list{
    padding-top:30px;
    padding-left:20px;
    padding-right:20px;
    padding-bottom:10px;
    background-size:auto 50% !important;
    background-position: bottom right  !important;
    background-repeat: no-repeat  !important;
  }
  .part-one-list > a{
    text-decoration: none;
    font-size:18px;
    font-weight:400;
    color:#333;
  }
  .part-one-list > a:hover{
    color:#16a085;
  }
  .part-one-list > hr{
    margin-left:0;
    display:block;
    width:35px;
    height:2px;
    background-color:#16a085;
    border:none;
  }
  .part-one-list > p{
    color:#666;
    font-size:14px;
    padding-top:10px;
  }

  /*分割线*/
  .centerHr{
    margin: 20px 0;
    border-top: 4px solid #eee;
  }
  .Hr{
    max-width: 1200px;
    margin:0 auto ;
    padding-top: 20px;
  }
  ._Hr{
    position: relative;
    max-width: 800px;
    border-top: 4px solid #eee;
    margin-left: 0;
    top:10px;
  }
 /* 中部内容*/
  .directwindow{
    max-width: 1200px;
    margin-left:auto;
    margin-right:auto;
  }
  .main-directwindow{
    padding-left:10px;
    padding-right:10px;
    max-width: 1200px;
    margin-left:auto;
    margin-right:auto;
    height: 235px;
    position: relative;
    overflow: hidden;
  }
  .main-link{
    padding-left:10px;
    padding-right:10px;
    max-width: 300px;
    margin-left:auto;
    margin-right:auto;
    height: 235px;
    position: relative;
    overflow: hidden;
    padding-bottom: 20px;
    background: -webkit-gradient(linear, 0 0, 0 30%, from(#EBEBEB), to(#fff)) !important; /*#ffe9d9*/
  }
  .main-link>h3{
    color:inherit;
    font-size:18px;
    font-weight:400;
    margin-bottom: 1px;
    display: inline-block;
    text-align: center;
    width: 300px;
  }
  ._main-download{
    padding-left:10px;
    padding-right:10px;
    max-width: 300px;
    margin-left:auto;
    margin-right:auto;
    height: 235px;
    position: relative;
    overflow: hidden;
    padding-bottom: 20px;
    background-color: white;

    background: linear-gradient(0deg, #EBEBEB 10%, #fff 50%, #fff 80%);
  }
  ._main-download>h3{
    color:inherit;
    font-size:18px;
    font-weight:400;
    margin-bottom: 1px;
    display: inline-block;
    text-align: center;
    width: 300px;
  }
  .inner-link{
    margin-top: 30px;
    max-width: 300px;
    margin-left:auto;
    margin-right:auto;
  }
  .inner-link-container >a{
    display: inline-block;
    width: 68%;
    font-size: 15px;
    font-weight: 300;
    background-color: white;
    color: #fff7e3;
    line-height: 20px;
    margin-bottom: 15px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    position: relative;
    margin-left:50%;
    left: -34%;
    z-index: 1;
    cursor: pointer;
    letter-spacing: 2px;
    border: 0;
    text-align: center;
  }
  .inner-link-container >a>img{
    width: 100%;
    height: 100%;
  }
  .inner-down-container>a{
    padding: 12px 10px;
    text-decoration: none;
  }
  .main-directwindow > a{
    color:#888;
    display:block;
    text-align: center;
    text-decoration: none;
  }
  .main-directwindow > a:hover{
    cursor:pointer;
  }
  .main-directwindow  .iconfont{
    color:inherit;
    font-weight: lighter;
    font-size:40px;
    display: block;
    text-align: center;

  }
  .main-directwindow  > h3{
    color:inherit;
    font-size:18px;
    font-weight:400;
    margin-bottom: 1px;
    display: inline-block;
  }
  .view_more {
    display: block;
    font-size: 12px;
    transform: scale(.7);
    color: #020202;
    padding: 0 5px;
    position: absolute;
    right: 0;
    bottom: 195px;
    text-decoration: none;
  }
  .main-directwindow > a:hover{
    color:#16a085;
  }
  .main-directwindow-list{
    height:380px;
    box-sizing: border-box;
    overflow: hidden;
  }
  ul{
    list-style:none;
    padding-left:0;
  }
  .hotspot-link-container{
    height:80px;
    width:100%;
    display:block;
    margin-top:10px;
    background-color:#f8f8f8;
  }
  .hotspot-img-container,.hotspot-container{
    display:inline-block;
    height:100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .hotspot-img-container{
    width:80px;
  }
  .hotspot-img-container > img{
    width:100%;
    height:100%;
  }
  .hotspot-container{
    width:calc(100% - 100px);
    padding-left:10px;
    padding-right:10px;
  }
  .hotspot-container > a{
    display:block;
    height:30px;
    line-height: 30px;
    font-weight:400;
    font-size:15px;
    overflow: hidden;
    color:#ff5722;
  }
  .hotspot-container >p{
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    overflow: hidden;
    height:50px;
    padding-top:5px;
    padding-bottom:5px;
    box-sizing: border-box;
    font-size:10px;
    vertical-align: sub;
    color:#adadad;
  }

  /*新闻*/
  .main-directwindow-list > .news-ul > li{
    border-left:2px solid #16a085;
    padding-left:10px;
    padding-top:5px;
    padding-bottom:5px;
    margin-top:5px;
    position:relative;
    border-bottom:1px solid #f1f1f1;
  }
  .news-ul > li > a{
    text-decoration: none;
    color:#666;
    width:200px;
    text-overflow: ellipsis;
  }
  .news-ul > li > span{
    color:#999;
    position: absolute;
    top:5px;
    right:2px;
  }

/*  pagination*/
  .el-pagination{
    text-align: center;
  }

  /*footer*/
  .el-footer{
    width:1200px;
    margin:0 auto;
    background-color:#2e3033;
    height:auto !important;
  }

  .el-footer .el-col{

  }
  .footer-wrap{
    margin-left:auto;
    margin-right:auto;
    max-width: 1200px;
    padding-left:20px;
    padding-right:20px;
  }
  .school >h4{
    font-size: 15px;
    letter-spacing: 2px;
    color:#fff;
    margin-bottom: 20px;
  }
  .school >address{
    margin-bottom: 0;
    color: #8e8e8e;
    font-size: 13px;
    font-style: normal;
  }

/*  友情链接*/
  .friendly-link-col{
    width:120px;
    margin-left: 15px;
  }
  .friendly-link-col > h4{
    color:#fff;
    font-size:15px;
    letter-spacing: 2px;
    -webkit-margin-after: .5em;
  }
  .friendly-link-list > a{
    text-decoration: none;
    color:#8e8e8e;
    font-size:13px;
    font-style: normal;
  }
  .friendly-link-list > a:hover{
    color:#16a085;
  }

/*  帮助*/
  .help-feedback-col{
    margin-left: 27px;
  }

  /*底部copyright*/
  .copyright{
    width:1150px;
    margin: 0 auto;
    padding-top: 16px;
    border-top: 1px solid #666;
    line-height: 17px;
    text-align: center;
    color: #666;
    padding-bottom: 1px;
  }

</style>

<template>
  <div>

    <el-carousel :interval="3500" arrow="always" >
      <el-carousel-item  v-for="img in carouselFigures" :key="img.id">
        <a  style="cursor: pointer" target="_blank">
          <img :src='img.src' /></a></el-carousel-item>
    </el-carousel>

    <div class='wrap-main-directwindow'>
      <div class='directwindow'>
        <el-row :gutter="10">
          <!--热点关注-->
          <el-col :xs="24" :sm="8" >
            <div class='main-directwindow'>
              <i class="el-icon-d-arrow-right"></i><h3 style="color: #16a085">热点关注
                  <span style="font-size: 14px;color: #d0d0d0; ">FOCUS</span>
                  <a  href='/focus' class="view_more" target="">MORE <i class="el-icon-more"></i></a>
                </h3>
              <div class='main-directwindow-list'>
                <ul class='news-ul'>
                  <li class='news-link-container' v-for='news in hotspotList' >
                    <router-link :to="'/schoolnotice/'+news.newsID">{{news.title}}</router-link>
                    <span>{{news.publishTime}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
         <!-- 新闻消息-->
          <el-col :xs="24" :sm="8" >
            <div class='main-directwindow'>
              <i class="el-icon-d-arrow-right"></i><h3 style="color: #16a085">新闻消息
              <span style="font-size: 14px;color: #d0d0d0; ">NEWS</span>
              <a href="/newsinformaion" class="view_more" target="">MORE <i class="el-icon-more"></i></a>
            </h3>
              <div class='main-directwindow-list'>
                <ul class='news-ul'>
                  <li class='news-link-container' v-for='news in newsList' >
                    <router-link :to="'/schoolnotice/'+news.newsID">{{news.title}}</router-link>
                    <span>{{news.publishTime}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <!--快速导航-->
          <el-col :xs="24" :sm="8" >
            <div class='main-link'>
              <h3 style="color: #16a085">快速导航
                <span style="font-size: 14px;color: #d0d0d0; ">NAVIGATION</span>
              </h3>
              <div class="inner-link">
                <div class="inner-link-container">
                  <a target="_blank" href="http://www.sicau.edu.cn/"><img src="../assets/img/official.png"/></a>
                  <a target="_blank" href="http://jiaowu.sicau.edu.cn"><img src="../assets/img/studyofficial.jpg"/></a>
                  <a target="_blank" href="http://xxgc.sicau.edu.cn/"><img src="../assets/img/colleageinf.png"/></a>
                </div>
              </div>
            </div>
          </el-col>
          <!--分割线-->
          <div  class="Hr">
            <hr class="_Hr">
          </div>
          <!--通知公告-->
          <el-col :xs="24" :sm="8" >
            <div class='main-directwindow'>
              <i class="el-icon-d-arrow-right"></i><h3 style="color: #16a085">通知公告
              <span style="font-size: 14px;color: #d0d0d0; ">NOTICE</span>
              <a href="/schoolnotice" class="view_more" target="">MORE <i class="el-icon-more"></i></a>
            </h3>
              <div class='main-directwindow-list'>
                <ul class='news-ul'>
                  <li class='news-link-container' v-for='news in noticeList'>
                    <router-link :to="'/schoolnotice/'+news.newsID">{{news.title}}</router-link>
                    <span>{{news.publishTime}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <!--双学位信息-->
          <el-col :xs="24" :sm="8" >
            <div class='main-directwindow'>
              <i class="el-icon-d-arrow-right"></i><h3 style="color: #16a085">双学位信息
              <span style="font-size: 14px;color: #d0d0d0; ">DOUBLEDEGREE</span>
              <a href="/doubledegree" class="view_more" target="">MORE <i class="el-icon-more"></i></a>
            </h3>
              <div class='main-directwindow-list'>
                <ul class='news-ul'>
                  <li class='news-link-container' v-for='news in doubleList' >
                    <router-link :to="'/schoolnotice/'+news.newsID">{{news.title}}</router-link>
                    <span>{{news.publishTime}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="8" >
            <div class='_main-download'>
              <h3 style="color: #16a085">相关下载
                <span style="font-size: 14px;color: #d0d0d0; ">DOWNLOAD</span>
              </h3>
              <div class="inner-link inner-down">
                <div class="inner-link-container inner-down-container">
                  <a target="_blank" href="http://tw.sicau.edu.cn/xg/wjxz.htm" style="background-color: #16a085">校团委借用申请表格下载</a>
                  <a target="_blank" href="http://xsc.sicau.edu.cn/Web/DownList-LJw34Jmu~aacgacce.html" style="background-color: #00CED1">学生工作处申请文件下载</a>
                  <a target="_blank" href="http://xxgc.sicau.edu.cn/cyxz.htm" style="background-color: #FF7F24">信息工程学院常用下载</a>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class='wrap-main-part-one'>
        <div class='main-part-one'>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="6" class='list-container' v-for='list in partOneList' :key='list.title'>
              <div class='part-one-list' :style="{background: list.bg}">
                <a :href="list.link" target="_blank">{{list.title}}</a>
                <hr>
                <p>{{list.description}}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <el-footer>
      <div class='footer-wrap'>
        <el-row :gutter="10">

          <el-col :xs="24" :sm="12" :md="6" class='school'>
            <h4><i class="iconfont icon-xuexiaoguanli">&#xe6c8;</i> 雅安校区</h4>
            <address>雅安市雨城区新康路46号 <br>邮编：625014</address>
            <address>电话：0835-2882232 <br>传真：0835-2883153</address>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" class='school'>
            <h4><i class="iconfont icon-xuexiaoguanli">&#xe6c8;</i> 成都校区</h4>
            <address>成都市温江区惠民路211号 <br>邮编：611130</address>
            <address>电话：028-86290111 <br>传真：028-82652669</address>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" class='school'>
            <h4><i class="iconfont icon-xuexiaoguanli">&#xe6c8;</i> 都江堰校区</h4>
            <address>成都市都江堰市建设路288号 <br>邮编：611830</address>
            <address>电话：028-87133509 <br>传真：028-87133366</address>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" class='friendly-link-col'>
            <h4>友情链接</h4>
            <ul>
              <li class='friendly-link-list' v-for='friendlyLink in friendlyLinks' :key='friendlyLink.naem'>
                <a :href='friendlyLink.href'>{{friendlyLink.siteName}}</a>
              </li>
            </ul>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" class='help-feedback-col  friendly-link-col'>
            <h4>帮助反馈</h4>
            <ul>
              <li class='help-feedback-list  friendly-link-list' v-for='helpFeedback in helpFeedbacks' :key='helpFeedback.naem'>
                <a :href='helpFeedback.href' >{{helpFeedback.siteName}}</a>
              </li>
            </ul>
          </el-col>
        </el-row>

      </div>
      <p></p>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24"  class="copyright">
            <p>Copyright &copy; 2017-2018 WingStudio. All Rights Reserved.</p>
            <p>WingStudio</p>
        </el-col>
      </el-row>
    </el-footer>
  </div>
</template>

<script>
import '../assets/fonts/iconfont.css'
import ElRow from "element-ui/packages/row/src/row";
import ElCol from "element-ui/packages/col/src/col";
export default {
  components: {
    ElCol,
    ElRow},
  name: 'Home',
  data () {
    return {
      //轮播图
 /*     carouselFigures:[{
        src:require('../assets/img/img1.jpg')
      },{
        src:require('../assets/img/img2.jpg')
      },{
        src:require('../assets/img/img3.jpg')
      },{
        src:require('../assets/img/img4.jpg')
      }],*/
      carouselFigures:[],
      //中部链接部分
      partOneList:[{
        title:'课表查询',
        link:'/timetable',
        description:'选课详情，课程时间以及教学教室编号查询',
        bg:"url(" + require("../assets/img/time_table.png") + ")"
      },{
        title:'成绩查询',
        link:'/transcript',
        description:'国家等级考试成绩查询、个人平时及期末成绩一览',
        bg:"url(" + require("../assets/img/score.png") + ")"
      },{
        title:'校车票购买',
        link:'http://busticket.sicau.edu.cn/',
        description:'四川农业大学后勤校车网上购票、在线选座',
        bg:"url(" + require("../assets/img/school_bus.png") + ")"
      },{
        title:'失物招领',
        link:'/lostandfound',
        description:'丢了东西不要急，来这看看，或许在这你能找到你丢失的东西',
        bg:"url(" + require("../assets/img/lost_found.png") + ")"
      }],
      //热点关注
      hotspotList:[],
      //新闻消息
      newsList:[],
      //通知公告
      noticeList:[],
      //双学位
      doubleList:[],
      //友情链接
      friendlyLinks:[{
        siteName:'四川农业大学',
        href:'http://www.sicau.edu.cn/'
      },{
        siteName:'信息工程学院',
        href:'http://xxgc.sicau.edu.cn/'
      },{
        siteName:'教务处',
        href:'http://jiaowu.sicau.edu.cn/web/web/web/index.asp'
      },{
        siteName:'图书馆',
        href:'http://www.lib.sicau.edu.cn/LibSicau/index.asp'
      }],
      helpFeedbacks:[{
        siteName:'四川农业大学',
        href:'http://www.sicau.edu.cn/'
      },{
        siteName:'信息工程学院',
        href:'http://xxgc.sicau.edu.cn/'
      },{
        siteName:'教务处',
        href:'http://jiaowu.sicau.edu.cn/web/web/web/index.asp'
      },{
        siteName:'图书馆',
        href:'http://www.lib.sicau.edu.cn/LibSicau/index.asp'
      }],
    }
  },


  mounted () {
    const that = this;
    console.log(that);
    //轮播图
    this.$http.get(
      that.$interface_+'getRecentImgs'
    )
      .then(function (response) {
        if(response.data.status === 1){
          response.data.data.forEach(function(item){
            that.carouselFigures.push({
              src:item.location,
              index:item.src,
              description:item.description
            });
          });
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
    //新闻消息 1
    this.$http.get(
      that.$interface+'getArticlePages?categoryId=1'
    )
      .then(function (response) {
        if(response.data.status === 1){
          response.data.data.list.forEach(function(item){
            that.newsList.push({
              title:item.title.substring(0, 16)/*+'...'*/,
              publishTime:item.publishdate,
              newsID:item.articleid
            });
            console.log(that.newsList);
          });
        }/*else{
        /!*  that.$message({
            /!*message: response.data.msg, *!/
            type: 'warning'
          });*!/
        }*/
      })
      .catch(function (err) {
        console.log(err);
        that.$message({
          message: '数据 error',
          type: 'warning'
        })
      });
    //通知公告 2
    this.$http.get(
      that.$interface+'getArticlePages?categoryId=2'
    )
      .then(function (response) {
        if(response.data.status === 1){
          response.data.data.list.forEach(function(item){
            that.noticeList.push({
              title:item.title.substring(0, 16),
              publishTime:item.publishdate,
              newsID:item.articleid
            });
            console.log(that.newsList);
          });
        }/*else{
         /!* that.$message({
            /!*message: response.data.msg,*!/
            type: 'warning'
          });*!/
        }*/
      })
      .catch(function (err) {
        console.log(err);
        that.$message({
          message: '数据 error',
          type: 'warning'
        })
      });
    //双学位信息 3
    this.$http.get(
      that.$interface+'getArticlePages?categoryId=3'
    )
      .then(function (response) {
        if(response.data.status === 1){
          response.data.data.list.forEach(function(item){
            that.doubleList.push({
              title:item.title.substring(0, 16),
              publishTime:item.publishdate,
              newsID:item.articleid
            });
            console.log(that.newsList);
          });
        }/*else{
         /!* that.$message({
            /!*message: response.data.msg,*!/
            type: 'warning'
          });*!/
        }*/
      })
      .catch(function (err) {
        console.log(err);
        that.$message({
          message: '数据 error',
          type: 'warning'
        })
      });
    //热点关注 4
    this.$http.get(
      that.$interface+'getArticlePages?categoryId=4'
    )
      .then(function (response) {
        if(response.data.status === 1){
          response.data.data.list.forEach(function(item){
            that.hotspotList.push({
              title:item.title.substring(0, 16),
              publishTime:item.publishdate,
              newsID:item.articleid
            });
            console.log(that.newsList);
          });
        }/*else{
       /!*   that.$message({
            /!*message: response.data.msg,*!/
            type: 'warning'
          });*!/
        }*/
      })
      .catch(function (err) {
        console.log(err);
        that.$message({
          message: '数据 error',
          type: 'warning'
        })
      });

  },

}
</script>


