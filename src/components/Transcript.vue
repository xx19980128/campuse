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
    padding-left:20px;
    padding-right:20px;
    padding-top:5px;
    padding-bottom:5px;
  }
  .el-main > .el-table{
    margin-top:20px;
  }

  .el-main > p{
    text-align: right;
    margin-top:20px;
  }
  .el-main >.el-select{
    right: -570px;
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

  <el-main>
    <h1>四川农业大学成绩单</h1>
    <div class='personal-info'>
      <!--<span>学院：{{transcript.college}}</span><span>专业：{{transcript.major}}</span><span>年级：{{transcript.grade}}</span><span>班级：{{transcript.class}}</span><span>学号：{{transcript.studentID}}</span><span>姓名：{{transcript.studentName}}--></span>
    </div>
    <el-select
      v-model="value"
      placeholder="请选择"
      @change="getValueData"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-table
    :stripe="true"
    :data="transcript.scores"
    :border='true'
    style="width:800px"
    >
      <el-table-column
        label="序号"
        type="index"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        prop="course"
        label="课程"
        >
      </el-table-column>
      <el-table-column
        prop="mark"
        label="成绩">
      </el-table-column>
      <el-table-column
        prop="credit"
        label="学分">
      </el-table-column>
      <el-table-column
        prop="specialty"
        label="性质">
      </el-table-column>
      <el-table-column
        prop="source"
        label="成绩来源">
      </el-table-column>
      <el-table-column
        prop="term"
        label="学期">
      </el-table-column>
    </el-table>
    <p>注：课程为三种记分方式：1.合格与不合格   2.百分制  3.五级制</p>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
      transcript:{
        scores:[]
      },
      options: [],
      test:{},
      value: ''
    };
  },
  mounted () {
    const that = this;
    console.log(that);
    this.$http.get(
      that.$interface+'getTerms'
    )
      .then(function (response) {
        if(response.data.status === 1){

          response.data.data.forEach(function(item){
            that.options.push({
              label:item,
              value:item,
            });
          });
          that.test=that.options[0].value;
          console.log(that.test);
          console.log(that.options);
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
    /*this.$http.get(
      that.$interface+'getGrades?term='+that.test
    )
      .then(function (response) {
        if(response.data.status === 1){
          response.data.data.forEach(function(item){
            that.transcript.scores.push({
              course:item.courseName,
              mark:item.achievement,
              credit:item.credit,
              specialty:item.courseNature,
              term:item.term,
              source:item.source,
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
      });*/
    that.getCurrentData()
  },
  methods:{

    getValueData(val) {
      this.getCurrentData(val )
    },
    getCurrentData(currentPage = '2016-2017-1') {
      const that = this;
      console.log(that);
      this.$http.get(
        that.$interface+'getGrades?term='+currentPage
      )
        .then(function (response) {
          if(response.data.status === 1){
            that.transcript.scores = [];
            response.data.data.forEach(function(item){
              that.transcript.scores.push({
                course:item.courseName,
                mark:item.achievement,
                credit:item.credit,
                specialty:item.courseNature,
                term:item.term,
                source:item.source,
              });
            });
            console.log(that.transcript.scores);
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
    /*getValueData(val) {
      const that = this;
      console.log(val='2016-2017-1');
      this.$http.get(
        that.$interface+'getGrades?term='+val
      )
        .then(function (response) {
          if(response.data.status === 1){
            that.transcript.scores = [];
            response.data.data.forEach(function(item){
              that.transcript.scores.push({
                course:item.courseName,
                mark:item.achievement,
                credit:item.credit,
                specialty:item.courseNature,
                term:item.term,
                source:item.source,
              });
            });
            console.log(that.transcript.scores);
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
    },*/
    indexMethod :(index) => index + 1,
  }
}
</script>
