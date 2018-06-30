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
    <h1>计算机等级成绩</h1>

    <el-table
    :stripe="true"
    :data="computerScores"
    :border='true'
    style="width: 100%">
      <el-table-column
        label="序号"
        type="index"
        :index="indexMethod">
      </el-table-column>
      <el-table-column
        prop="studentName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="studentID"
        label="学号">
      </el-table-column>
      <el-table-column
        prop="wittenTestScore"
        label="笔试成绩">
      </el-table-column>
      <el-table-column
        prop="practiceScore"
        label="上机成绩">
      </el-table-column>
      <el-table-column
        prop="campus"
        label="校区">
      </el-table-column>
      <el-table-column
        prop="language"
        label="语种">
      </el-table-column>
      <el-table-column
        prop="zkh"
        label="准考证号">
      </el-table-column>
    </el-table>
  </el-main>
</template>
<script>
export default {
  data() {
    return {

      computerScores:[]

    };
  },
  mounted () {
    const that = this;
    console.log(that);
    this.$http.get(
      that.$interface+'queryComputerGradeTwo'
    )
      .then(function (response) {
        if(response.data.status === 1){
          response.data.data.forEach (function(item){
            that.computerScores.push({
              studentID:item.xh,
              studentName:item.xm,
              wittenTestScore:item.zzbscj,
              practiceScore:item.zzsjcj,
              campus:item.xq,
              language:item.jbyymc,
              zkh:item.zkzh
            });
          });
        }else{
          that.$message({
            message: '没有数据',
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
