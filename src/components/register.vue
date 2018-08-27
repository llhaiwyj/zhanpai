<template>
	<div class="register">
		<div class="header">
			<img src="../assets/img/logo.png" class="logo"/>
		</div>
		<div class="content">
			<div class="yonghuming">
				<p class="name">设置密码：</p>
				<input type="password" v-model="password"/>
			</div>
			<div class="yonghuming">
				<p class="name">确认密码：</p>
				<input type="password" v-model="passwords"/>
			</div>
			<div class="yonghuming">
				<p class="name">手机号：</p>
				<input type="text" v-model="iphone"/>
			</div>
			<div class="yanzhnewgma">
				<p class="name">验证码：</p>
				<input type="text" v-model="yanzheng"/>
				<button @click="senter">发送验证码</button>
			</div>
			<div class="remember">
				<input type="checkbox" value="" checked="checked" class="change"/>
				<span class="thisin">我已阅读并同意</span>
				<span class="xieyi">《用户注册协议》</span>
			</div>
			<button class="but" @click="zhuce">立即注册</button>
		</div>
	</div>
</template>

<script>
		export default {
		data() {
			return {
				password:'',
				passwords:'',
				iphone:'',
				yanzheng:'',
			};
		},
		methods: {
			zhuce(){
				this.$ajax.post(this.$Url + "/login/registerUser", this.$qs.stringify({
						phoneNum: this.iphone,
						code:this.yanzheng,
						password:this.password
					})).then(datas => {
						console.log(datas)
						if(datas.data.code==-1){
							 this.$message.error(datas.data.msg);
						}else{
							this.$router.push({
					             name: 'Login',
				            });
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			senter() {
				if(this.iphone==''){
                   this.$message.error("请输入手机号码");
				}else{
				   this.$ajax.post(this.$Url + "/st/getCode", this.$qs.stringify({
						iphone: this.iphone
					})).then(datas => {
						console.log(datas)
					})
					.catch(function(error) {
						console.log(error);
					});
				}
			},
		},
	}

</script>

<style scoped>
	@import "../assets/css/register.css";
</style>