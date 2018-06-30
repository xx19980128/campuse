<style scoped>
  .el-main{
    max-width: 1200px;
    margin-top:30px;
    margin-left:auto;
    margin-right:auto;
    padding-bottom:100px;
  }
  .el-main > h1{
    text-align: center;
    margin-top: 160px;
  }
  .el-main > .personal-info{
    text-align: center;
  }
  .el-main > .personal-info > span{
    display: inline-block;
    padding-right:20px;
  }
  .el-main > .el-table{
    margin-top:20px;
  }
  .el-main > p{
    text-align: right;
    margin-top:20px;
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
    <h1>四川农业大学{{timeTable.term}}学期理论课程表</h1>
    <div class='personal-info'><!--<span>班级：{{timeTable.class}}</span><span>姓名：{{timeTable.studentName}}</span>--></div>
    <el-table
      :data="timeTable.courses"
      border
      style="width: 1000px; margin-top: 20px"
      >
      <el-table-column
        prop ="time"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop ="course[0]"
        label="星期一">
      </el-table-column>
      <el-table-column
        prop ="course[1]"
        label="星期二">
      </el-table-column>
      <el-table-column
        prop ="course[2]"
        label="星期三">
      </el-table-column>
      <el-table-column
        prop ="course[3]"
        label="星期四">
      </el-table-column>
      <el-table-column
        prop ="course[4]"
        label="星期五">
      </el-table-column>
      <el-table-column
        prop ="course[5]"
        label="星期六">
      </el-table-column>
      <el-table-column
        prop ="course[6]"
        label="星期日">
      </el-table-column>
    </el-table>
  </el-main>
</template>
<script>
export default {
    data() {
    return {
      timeTable:{

          term:'',
          courses:new Array(5),    //设置两个数组，一个数组获取数据并把数组赋给另一个数组，才能达到在页面上渲染的功能。
          test:new Array(5),
      },

    };
  },
  mounted () {
    const that = this;

    this.$http.get(
      that.$interface+'queryClass?term=2016-2017-2'
    )
      .then(function (response) {
        if(response.data.status === 1){
          for(var i = 0;i<5;i++){
            that.timeTable.test[i] = {time:(2*i+1) + ',' + (2*i+2),course:["","","","","","",""]};
          }
          response.data.data.forEach(function(item){
            var temp = item.classTime.split('-');
            var row = (temp[1]- 1)/2;
            var col = temp[0] - 1;
            that.timeTable.test[row].course[col] = item.course+ '\t'+item.teacher+ '\t'+item.weeks+'周'+ '\t'+item.classroom;
          });
          that.timeTable.courses = that.timeTable.test ;    //将获取到数据的数组赋给courses数组，确保数据能够渲染到页面上，否则不能够渲染
          console.log(that.timeTable.courses);
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
  },
  methods:{

  }

  }
</script>
