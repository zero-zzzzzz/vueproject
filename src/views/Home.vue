<template>
    <div class="class-table">
        <div class="table-wrapper">
            <div class="tabel-container">
                <table>
                    <thead>
                    <tr>
                        <th style="width:50px;">时间</th>
                        <th v-for="(lesson, lessonIndex) in classTableData.lessons" :key="lessonIndex">{{lesson}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(weekNum, weekIndex) in classTableData.weeks" :key="weekIndex">
                        <td>
                            <p>{{'周' + weekNum}}</p>
                        </td>
                        <td class="courses" v-for="(lesson, lessonIndex) in classTableData.lessons" :key="lessonIndex">
                            <div v-for="(course, courseIndex) in classTableData.courses[weekIndex][lessonIndex]"
                                 :class="{bgColor:courseIndex%2===1}" :key="courseIndex" class="course" @click="detail">
                                <p style="font-size: 11px;">{{course}}</p>
                                <p style="font-size: 8px;color: #eee">8:00-9:30</p>
                            </div>
                            <!--{{classTableData.courses[courseIndex][weekIndex] || '-'}}-->
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <van-dialog v-model="show" title="标题" show-cancel-button>
            周一 上午 8:00-10:00<br/>主讲教师：张三<br/>地点：9a202<br/><input type="file" @change="fileChange" class="wj"
                                                                 placeholder="上传课件">上传作业
        </van-dialog>
    </div>
</template>

<script>
  import {Dialog} from 'vant';

  export default {
    data() {
      return {
        classTableData: {
          lessons: [
            '1-2',
            '3-4',
            '5-6',
            '7-8'
          ],
          weeks: [
            '日',
            '一',
            '二',
            '三',
            '四',
            '五',
            '六'
          ],
          courses: [
            [[], [], [], []],
            [['数分'], ['化学'], ['物理'], []],
            [[], [], [], []],
            [['生物'], ['物理'], ['化学'], []],
            [[], [], ['英语'], []],
            [['生物'], ['物理'], [], ['化学']],
            [[], ['地理'], ['化学'], []],
          ]
        },
        show: false
      };
    },
    methods: {
      detail() {
        this.show = true
      },
      fileChange(event) {
        console.log(event)
        let fileList = event.target.files;
        if (fileList.length > 0) {
          let file = fileList[0];
          let formData = new FormData();
          formData.append('file', file);
          //你的post接口，formData发送
          this.$axios({
            url: 'http://www.shenzepengzuishuai.cn:8080/middleground-provider-1.0.0/file/upload/bigfile?appKey=DF01AF9ACC06E867',
            method: 'post',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            data: formData,
          }).then(res => {
            const {data, msg, status} = res.data;
            if (status === 200) {
              this.$toast.success('上传成功')
            } else {
              this.$toast.fail(msg)
            }
          })
        }
      }
    }
  };
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .table-wrapper {
        width: 100%;
        overflow: auto;
        margin-bottom: 60px;
    }

    table {
        table-layout: fixed;
        width: 100%;
    }

    thead {
        background-color: #547c99;
    }

    th {
        color: #fff;
        line-height: 15px;
        font-weight: normal;
    }

    tbody {
        background-color: #f9f9f9;
    }

    td {
        color: #677998;
        line-height: 15px;
    }

    th, td {
        padding: 8px 2px;
        font-size: 15px;
        text-align: center;
    }

    tbody tr:nth-child(2n) {
        background-color: #ecf4f4;
    }

    tr td:first-child {
        color: #333;
    }

    .course {
        background-color: #ebbbbb;
        color: #fff;
        display: inline-block;
        border-radius: 3px;
        width: 47%;
        margin: 1px 1%;
    }

    .bgColor {
        background-color: #89B2E5;
    }
</style>