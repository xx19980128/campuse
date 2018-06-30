<style scoped>
.el-main{
  width:100vw;
  min-height:100vh;
  background-color:#34495c;
  padding:0;
}

.el-main > .pendant{
  margin-top:100px;
  width:408px;
  height:8px;
  margin-left:auto;
  margin-right: auto;
  background-color:#000002;
  border-radius:2px;
  box-shadow: 0 0 0 10px #30333a;
}
.el-main > .container{
  box-sizing: border-box;
  margin-top:-4px;
  position: relative;
  margin-left:auto;
  margin-right:auto;
  width:400px;
  height:500px;
  background-color:#fff;
  background-image: url('../assets/img/register_bg.png');
  background-size: 100% auto;
  background-position: center bottom;
  background-repeat: no-repeat;
}

.el-main > .container:after{
  content: '';
  position: absolute;
  bottom:0px;
  height:30px;
  background-image: linear-gradient(to right bottom,
    transparent 50%,
    #34495c 0),
  linear-gradient(to left bottom,
    transparent 50%,
    #34495c 0);
  background-position: -10px 0;
  background-size: 20px 30px;
  display: block;
  width:100%;
}

.main-body{
  padding-left:50px;
  padding-right:50px;
  padding-top:50px;
}
.main-body > h1{
  font-weight: 400;
  font-size: 1.5rem;
  color:#409eff;
  text-align: center;
}
.main-body > p{
  margin-top:110px;
  text-align: right;
  font-size:14px;
  color:#999;
  line-height:1.5;
}
.main-body > p > a{
  color:#aaa;
}
.main-body > p > a:hover{
  color:#666;
}
.form-container,.step2{
  position: relative;
}
.form-container > p,.step2 > p{
  font-size:14px;
  color:#999;
  line-height:1.5;
}
.form-container > .el-input,.step2 > .el-input{
  margin-top:20px;
}
.form-container > .el-button,.step2 > .el-button{
  position: absolute;
  right:0;
  margin-top:40px;
}


/*小屏设备*/
@media screen and (max-width:767px) {
    .el-main{
      padding:0;
    }
    .el-main > .pendant{
      display: none;
      width:100%;
      height:100%;
    }
    .el-main > .container{
      width:100%;
      height:100vh;
      margin-left:0;
      margin-right:0;
      margin-top:0;
    }
    .el-main > .container:after{
      display: none;
    }
    .main-body{
      padding-top:100px;
    }
}
</style>
<template>
  <el-main>
    <div class='pendant'></div>
    <div class='container'>
      <div class='main-body'>
        <h1>用户登录</h1>
        <div class='form-container'>
          <el-input
          placeholder="请输入学号"
          prefix-icon="el-icon-tickets"
          v-model="studentID"></el-input>
          <el-input
          type="password"
          placeholder="请输入密码"
          prefix-icon="el-icon-date"
          v-model="password"></el-input>
          <el-button type="primary" @click='isLogin'>登录</el-button>
        </div>
        <!--<div class='total'>
          <label>
            <input type='checkbox' value='remember' v-model='rememberPassword'>
            <span class='button'></span>
            <span class='remember'>记住密码</span>
          </label>
          <a >忘记密码？</a>
        </div>-->
        <p> <router-link to='/modifypassword'>修改密码</router-link></p>
      </div>
  </div>
</el-main>
</template>
<script>
export default {
  data() {
    return {
      studentID:'',
      password:''
    };
  },
  methods:{

    isLogin:function(){
      console.log(1);
     const that = this;
      console.log(this.studentID);
  if(this.studentID !== '' && this.password !==''){
        this.$http.get(that.$interface + 'login?studentNumber='+that.studentID+'&password='+that.password)
        .then(function(response){
          if(response.data.status === 1){

            let expireDays = 1000 * 60 * 60 * 24 * 15;
            that.setCookie('session', '1', expireDays);
            that.$message({
              message: '登陆成功',
              type: 'success'
            });
            that.$router.push({ path: '/Home' });
            setTimeout(()=>{
              //登录状态15天后过期
              let expireDays = 1000 * 60 * 60 * 24 * 15;
              that.setCookie('session','1', expireDays);

            },3000)
          }else{
            that.$message({
              message: '您的学号或密码有误',
              type: 'warning'
            });
          }
        })
        .catch(function(err){
          console.log(err);
        })
      }else{
        this.$message({
          message: '请将信息填写完整',
          type: 'warning'
        });
      }
    }
  }
}
</script>
