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
  padding-top:20px;
}
.main-body > h1{
  font-weight: 400;
  font-size: 1.5rem;
  color:#409eff;
  text-align: center;
}
.form-container{
  position: relative;
}
.form-container > p{
  font-size:14px;
  color:#999;
  line-height:1.5;
}
.form-container > .el-input{
  margin-top:10px;
}
.form-container > .el-button{
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
        <h1>修改密码</h1>
        <div class='form-container'>
          <el-input
          placeholder="请输入原密码"
          type="password"
          prefix-icon="el-icon-tickets"
          v-model="oldPassword"></el-input>
          <el-input
          placeholder="设置新密码"
          type="password"
          prefix-icon="el-icon-goods"
          v-model="password"></el-input>
          <el-input
          placeholder="确认新密码"
          type="password"
          prefix-icon="el-icon-goods"
          v-model="rePassword"></el-input>
          <el-button type="primary" @click='submit'>完成</el-button>
        </div>
      </div>
  </div>
</el-main>
</template>
<script>
export default {
  data() {
    return {
      oldPassword:'',
      password:'',
      rePassword:''
    };
  },
  methods:{
    submit:function(){

      const that = this;
      if(this.password!==this.rePassword && (this.password !== '' && this.rePassword !=='')){
        that.$message({
          message: '两次输入密码不一样',
          type: 'warning'
        });
      }
      console.log( that.oldPassword);
      console.log( that.password);
      var str = that.$interface + 'resetPassword?oldPassword='+that.oldPassword+'&newPassword='+that.password;
      console.log("ssss"+str);
      if(this.oldPassword !== '' &&this.password !== '' && this.rePassword !==''){
        this.$http.get(that.$interface + 'resetPassword?oldPassword='+that.oldPassword+'&newPassword='+that.password)

          .then(function(response){
            if(response.data.status === 1){
              that.$message({
                message: response.data.msg,
                type: 'success'
              });
              that.$router.push({ path: '/Home' });
              /*setTimeout(()=>{
                //登录状态15天后过期
                let expireDays = 1000 * 60 * 60 * 24 * 15;
                that.setCookie('session','1', expireDays);

              },3000)*/
            }
            else if(response.data.status === 20){
              that.$message({
                message: response.data.msg,
                type: 'warning'
              });
            }
            else if(response.data.status === 0){
              that.$message({
                message: response.data.msg,
                type: 'warning'
              });
            }
          })
          .catch(function(err){
            console.log(err);
            that.$message({
              message: '数据 error',
              type: 'warning'
            })
          })
      }
      else{
        this.$message({
          message: '请将信息填写完整',
          type: 'warning'
        });
      }
    }
  }
}
</script>
