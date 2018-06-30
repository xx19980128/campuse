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
    color:#ff0000;
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 160px;
  }
  .el-main > .el-table{
    margin-top:20px;
  }
  .el-main > .warm{
      margin-top:20px;
      color:#ff0000;
      line-height: 1.5rem;
      font-size: .9rem;
  }

  /*小屏设备*/
  @media screen and (max-width:767px) {
    .el-main{
      padding-left:10px;
      padding-right:10px;
    }
}
</style>
<template >
  <el-main>
    <h1>{{examTimetable.academics[0].studentNumber}}{{examTimetable.term}}学期考试安排</h1>
    <el-table
    :stripe="true"
    :data="examTimetable.academics"
    :border='true'
    style="width: 100%"
    >
      <el-table-column
        label="序号"
        type="index"
        :index="indexMethod"
        width='50'>
      </el-table-column>
      <el-table-column
        prop="course"
        label="课程"
        width='200'>
      </el-table-column>
      <el-table-column
        prop="dateTime"
        label="考试时间"
        width='340'>
      </el-table-column>
      <el-table-column
        prop="position"
        label="考试教室">
      </el-table-column>
      <el-table-column
        prop="seatNumber"
        label="座位号">
      </el-table-column>
    </el-table>
    <div class='warm'>
      温馨提醒：<br>
      1、参加考试请一定带上学生证或身份证（其他证件无效），否则不予参加考试。<br>
      2、考试过程中严禁随身携带手机、其他无线通讯器（件）、电子字典、书包、书籍、笔记和纸张等。<br>
      3、考试期间学生必须严格遵守考场纪律，对于违反《考场规则》和不服从考试工作人员管理的考生，视其情节轻重给予全校通报批评，甚至取消考试成绩；对于违纪学生，按《四川农业大学学生违纪处分条例》进行处理。
    </div>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
        examTimetable:
          {
            academics: [ ],
          }
    }
  },
  mounted () {
    const that = this;
    console.log(that);
    this.$http.get(
      that.$interface+'examSchedule'
    )
      .then(function (response) {
      if(response.data.status === 1){
        response.data.data.forEach(function(item){
          that.examTimetable.academics.push({
            course:item.examCourse,
            dateTime:'第' + item.examWeek + '周,星期' + item.examWeekDay + ', ' + item.examOrder + '-' + (parseInt(item.examOrder) + 1)+ '节课',
            position:item.classroom,
            seatNumber:item.seatNumber,
            studentNumber:item.studentNumber
          });
        });
        console.log(that.examTimetable.academics[0].studentNumber);
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
    indexMethod(index) {
      return index + 1;
    }
  }
}
</script>
