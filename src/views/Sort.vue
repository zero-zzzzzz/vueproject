<template>
  <van-uploader v-model="files" multiple :after-read="afterRead" :max-count="1" class="sc" />
</template>

<script>
    import axios from "axios";
    export default{
        data(){
            return {
                avatar:"",
                user:"",
                password:"",
                files:[],
                nickname:"TiAmo"
            };
        },
    

	 methods: {
	    afterRead(file) {
	      // 此时可以自行将文件上传至服务器
	      console.log(file);
	      const formData = new FormData();  // 声明一个FormData对象
	      formData.append("file", file.file);
	      axios
	        .post(
	          "http://www.shenzepengzuishuai.cn:8080/sringmvcphoto-1.0-SNAPSHOT/bigFile.action",
	          formData,
	          {
	            headers: {
	              "content-type": "multer/form-data"
	            }
	          }
	        )
	        .then(res => {
	          this.avatar = res.data.info;
	          console.log(this.avatar);
	        });
	    },
	}
}

</script>
 