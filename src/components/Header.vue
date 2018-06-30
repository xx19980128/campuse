<style scoped>

  .el-header{
    padding-left:0;
    padding-right:0;
    width: 1200px;
    margin:0 auto;
    opacity: .9;
    z-index: 100;
  }
  .el-container{
    background: url(../assets/img/bg.png) repeat;
  }
  .banner{
    width: 1200px;
    padding-top: 130px;
    margin-top: 20px;
    border-radius: 13px 13px 0 0;
    position: relative;
    background-color: white;
    box-shadow: 0 0 10px #D9D9D9;
  }
  .bannerbg{
    width: 50%;
    background-image: url(../assets/img/banner.jpg);
    border-radius: 13px 13px 0 0;
    background-size: 100% 100%;
    height:130px;
    position: absolute;
    left: 0;
    top:0;
    display: inline-block;
  }
  .time{
    width: 120px;
    height: 120px;
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 35px;
    display: inline-block;
  }
  .timer{
    width: 120px;
    text-align: center;
    font-size: 10px;
    color: rgb(22, 160, 133);
  }
  .home-logo{
    vertical-align: top;
  }
  .home-logo > i{
    font-size:25px;
    color:#fff;
  }
  .hidden-xs-only{
    text-align: center;
  }
  .el-menu--horizontal{
    border-bottom:none;
  }
  .el-main{
    padding:0;
  }
  .hidden-sm-and-up{
    height:auto !important;
  }

  ul.el-menu{
    padding-right:0;
  }

  .el-menu-item > a{
    text-decoration: none;
    color:#fff;
    display:block;
  }
  .textLogout{
    text-align: center;
    display: inline-block;
    margin-top: 1.25%;

  }



  .t4 {
    position: relative;
    width: 110px;
    height: 85px;
    border-radius: 50%;
    background-image: linear-gradient(white, white);
    box-shadow: 0px 0px 28px -8px #eaf7fb;
    z-index: 11;
    font-size: 10px;;

  }

  .t4 i {
    font-style: normal
  }

  .hour {
    position: absolute;
  }

  .hour3 {
    right: 10px;
    top: 50%;
    margin-top: -7px;

  }

  .hour6 {
    left: 50%;
    bottom: 10px;
    margin-left: -5px;

  }

  .hour9 {
    left: 10px;
    top: 50%;
    margin-top: -7px;

  }

  .hour12 {
    left: 50%;
    top: 10px;
    margin-left: -10px;
  }


  #miao, #fen, #shi {
    position: absolute;
    left: 50%;
    height: 80px;
    width: 10px;
    margin-left: -5px;
  }

  #miao {
    z-index: 23;
  }

  #fen {
    z-index: 22;
  }

  #shi {
    z-index: 21;
  }
  #shi:after{
    content: "";
    height: 15px;
    width: 3px;
    position: absolute;
    top: 25px;
    background: #1aa9d8;
    border-radius: 8px 8px 8px 8px;
    z-index: -1;
  }
  #fen:after{
    content: "";
    height: 20px;
    width: 2px;
    position: absolute;
    top: 19px;
    left:3px;
    background: #23bcef;
    border-radius: 8px 8px 8px 8px;
    z-index: -1;
  }
  #miao:after{
    content: "";
    height: 35px;
    width: 1px;
    position: absolute;
    top: 5px;
    left:3px;
    background: darkred;
    z-index: -1;
    /*box-shadow: 5px 10px 8px 3px #B2C3D4;*/

  }

  #point{
    position: absolute;
    left:50%; top: 50%;
    margin-left: -7px;
    margin-top: -6px; z-index: 999;    border-radius: 50%;  box-shadow: 0px 3px 8px -1px #0f4873;}
  #point:before,#point:after{
    content: "";
    height: 7px;
    width: 7px;
    position: absolute;
    top:0%;
    background: #8ba3b6;
    border-radius: 50%;
    z-index: 1; }

  #point:before {
    width: 10px; height:10px;left:2px;top:1px;
  }
  #point:after {
    background: #cee3ec; left: 3.5px; top:1px;
  }

</style>
<style type="text/css">
  /*.headerHover{
    position:fixed;
    padding-left:0;
    padding-right:0;
    width: 1200px;
    left:50%;
    margin-left: -600px;
    opacity: .9;

    z-index: 100;
  }*/
</style>

<template>
  <el-container>
    <el-header class='hidden-xs-only'>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24">
          <div class="banner">
            <div class="bannerbg"></div>
            <div class="time">
              <div class="t4">
                <i class="hour hour3">3</i>
                <i class="hour hour6">6</i>
                <i class="hour hour9">9</i>
                <i class="hour hour12">12</i>
                <div id="miao"></div>
                <div id="fen"></div>
                <div id="shi"></div>
                <div id="point"></div>
              </div>
              <div class="timer">
                <span >今天是：</span>
                <span class="_timer"></span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-menu active-text-color='#fff' default-active='/home' :router="true" background-color='#16a085' text-color='#fff' mode="horizontal" >
        <el-menu-item index='/home'><a title='首页' class='home-logo'><i class="iconfont">&#xe6c8;</i></a></el-menu-item>
        <el-submenu v-for='menuItem in navLinks' :index='menuItem.path' :key='menuItem.id'  >
          <template slot="title">{{menuItem.name}}</template>
          <template v-for='sub in menuItem.subs'>
            <template v-if="sub.type === 'out'">
              <el-menu-item :index="menuItem.path" :key='sub.id'><a :href="sub.path" target="_blank">{{sub.name}}</a></el-menu-item>
            </template>
            <template v-else>
              <el-menu-item  :index="sub.path" :key='sub.id' >{{sub.name}}</el-menu-item>
            </template>
          </template>
        </el-submenu>
        <template v-if="isLogouting">
          <p style="color: white;font-size: 9px;width: 30px;" class="textLogout">欢迎{{studentID[0].studentNumber}}</p>
        <el-submenu index="2" >
        <template >
          <template slot="title"  style='float:right'    @click="logout">{{logOut.name}}</template>
          <el-menu-item index="2-1" @click="logout">注销</el-menu-item>
          <el-menu-item index="2-2"><a :href="'/modifypassword'">修改密码</a></el-menu-item>
        </template>
        </el-submenu>
         </template>
        <el-menu-item style='float:right' v-else :index='login.path' :key='login.id'>{{login.name}}</el-menu-item>
      </el-menu>
    </el-header>
    <el-header class='hidden-sm-and-up'>
      <el-menu active-text-color='#fff' background-color='#16a085' text-color='#fff' :router="true" :unique-opened='true' >
        <el-submenu index="menu">
          <template slot="title"><i ref="menuButton" class="el-icon-menu"></i>菜单</template>
          <el-menu-item-group>
            <el-menu-item index='/home'><a title='首页' @click='closeMenu' class='home-logo'>首页</a></el-menu-item>
            <el-submenu v-for='menuItem in navLinks' :index='menuItem.path' :key='menuItem.id'>
              <template slot="title"><i class="el-icon-plus"></i>{{menuItem.name}}</template>
              <el-menu-item-group v-for='sub in menuItem.subs' :key='sub.id'>
                <template v-if="sub.type === 'out'">
                  <el-menu-item  :index="menuItem.path" :key='sub.id'><a  :href="sub.path" target="_self"> {{sub.name}}</a></el-menu-item>
                </template>
                <template v-else>
                  <el-menu-item @click='closeMenu'  :index="sub.path" :key='sub.id'>{{sub.name}}</el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>
import '../assets/fonts/iconfont.css'
import ElSubmenu from "../../node_modules/element-ui/packages/menu/src/submenu.vue";
import ElCol from "element-ui/packages/col/src/col";
/*window.onscroll = function(){
  var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
  var header = document.getElementsByClassName("el-header");
  if(scrollTop>300){
    header[0].setAttribute("class","el-header headerHover");
  }else{
    header[0].setAttribute("class","el-header");
  }
}*/
//时钟样式
let clock = setInterval(function () {
  let nowDate = new Date();//每次读取当前时间
  let hour = nowDate.getHours();
  let minute = nowDate.getMinutes();
  let second = nowDate.getSeconds();

  let circleHour = hour % 12 * 30;
  document.getElementById("shi").style.transform = "rotate(" + circleHour + "deg)";//读取到的时间为24小时制，转换为12小时
  document.getElementById("fen").style.transform = "rotate(" + minute * 6 + "deg)";
  document.getElementById("miao").style.transform = "rotate(" + second * 6 + "deg)";
}, 1000);

//获取当前时间并显示
let c =setInterval(function () {
  let nowDate = new Date();//每次读取当前时间
  let y = nowDate.getFullYear();
  let m = nowDate.getMonth()+1;
  let d = nowDate.getDate();
  if(m<10){
    m = "0"+m;
  }
  if(d<10){
    d = "0"+d;
  }
  let x=document.getElementsByClassName("_timer");
  x[0].innerHTML=y+"年"+m+"月"+d+"日";
},1000);
export default {
  components: {
    ElCol,
    ElSubmenu},
  name: 'Header',
  data () {
    return {
      isLogouting: false,
      navLinks:[{
        name:'学习中心',
        path:'/learningcenter',
        subs:[{
          name:'课表查询',
          path:'/timetable'
        },{
          name:'成绩查询',
          path:'/transcript'
        },{
          name:'考试安排',
          path:'/examtime'
        },{
          name:'英语四六级成绩查询',
          path:'http://cet.neea.edu.cn/cet/',
          type:'out'
        },{
          name:'计算机等级考试成绩查询',
          path:'/computerscore',
        }]
      },{
        name:'通知信息',
        path:'/news',
        subs:[{
          name:'通知公告',
          path:'/schoolnotice'
        },{
          name:'热点关注',
          path:'/focus'
        },{
          name:'新闻信息',
          path:'/newsinformaion'
        }]
      },{
        name:'在线报名',
        path:'/enroll',
        subs:[{
          name:'英语四六级考试报名',
          path:'http://cet.etest.net.cn/',
          type:'out'
        },{
          name:'计算机等级考试报名',
          path:'http://jiaowu.sicau.edu.cn/xuesheng/kao/bao/kaike.asp',
          type:'out'
        },{
          name:'计算机考试',
          path:'http://cjcx.neea.edu.cn/ncre/query.html',
          type:'out'
        }]
      },{
        name:'生活服务',
        path:'',
        subs:[{
          name:'失物招领',
          path:'/lostandfound'
        },{
          name:'一卡通业务',
          path:'http://ietc.sicau.edu.cn/?p=34',
          type:'out'
        },{
          name:'校车查询',
          path:'http://busticket.sicau.edu.cn/',
          type:'out'
        },{
          name:'校历',
          path:'http://www.sicau.edu.cn/upload/Image/20170711/20170711084323_50520.jpg',
          type:'out'
        },{
            name:'空教室查询',
            path:'http://jiaowu.sicau.edu.cn/web/web/lanmu/jshi_wk_list.asp',
            type:'out'
        },{
            name:'图书借阅查询',
            path:'http://202.115.182.3:8080/opac/mylibrary',
            type:'out'
        }]
      },{
        name:'勤工助学',
        path:'/se',
        subs:[{
          name:'勤工助学',
          path:'/parttimejob'
        }]
      },{
        name:'评优评奖',
        path:'/ser',
        subs:[{
          name:'评优评奖',
          path:'/prize'
        }]
      },{
        name:'培训',
        path:'/serv',
        subs:[{
          name:'计算机培训',
          path:'/computertrain'
        },{
          name:'培训',
          path:'/train'
        }]
      },{
        name:'双学位',
        subs:[{
          name:'双学位信息',
          path:'/doubledegree'
        },{
          name:'双学位报名',
          path:'http://jiaowu.sicau.edu.cn/xuesheng/xueji/sxw/shenqing.asp',
          type:'out'
        },{
          name:'双学位成绩查询',
          path:'/doubledegreetranscript'
        }]
      }],
      login:{
        name:'登录',
        path:'/login'
      },
      logOut:{
        name:'注销服务',
      },
      studentID:[]
    }
  },
  methods:{
    closeMenu(){
      console.log(1);
      console.log(this.$refs);
      this.$refs.menuButton.click();
    },
    logout(){
      const that = this;
      that.isLogouting = false;
      console.log(100);
/*      //删除cookie并跳到登录页

      this.delCookie('session');
      //演示
      setTimeout(()=>{
        this.$router.push('/home/');
        this.isLogouting = false;
      },3000)*/
      this.$http.get(
        that.$interface + 'logout'
      )
        .then(function (response) {
          if (response.data.status === 1) {
            that.$router.push({ path: '/Home' });
            console.log(1);
            that.$message({
              message: '注销成功',
              type: 'success'
            });

          } /*else {
            that.$message({
              message: response.data.msg,
              type: 'warning'
            });
          }*/
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
  mounted () {
    const that = this;
    console.log(that);
    this.$http.get(
      that.$interface + 'examSchedule'
    )
      .then(function (response) {
        if (response.data.status === 1) {
          that.isLogouting = true;
        } /*else {
          that.$message({
            message: response.data.msg,
            type: 'warning'
          });
        }*/
      })
      .catch(function (err) {
        console.log(err);
        that.$message({
          message: '数据 error',
          type: 'warning'
        })
      });
    this.$http.get(
      that.$interface + 'examSchedule'
    )
      .then(function (response) {
        if(response.data.status === 1) {
          response.data.data.forEach(function (item) {
            that.studentID.push({
              studentNumber: item.studentNumber
            });
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
