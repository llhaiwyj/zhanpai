<template>
	<div class="register">
		<div class="header">
			<img src="../assets/img/logo.png" class="logo"/>
		</div>
		<div class="content">
			<div class="yonghuming">
				<p class="name">用户名：</p>
				<input type="text" />
			</div>
			<div class="yonghuming">
				<p class="name">设置密码：</p>
				<input type="text" />
			</div>
			<div class="yonghuming">
				<p class="name">确认密码：</p>
				<input type="text" />
			</div>
			<div class="yonghuming">
				<p class="name">手机号：</p>
				<input type="text" />
			</div>
			<div class="yanzhnewgma">
				<p class="name">验证码：</p>
				<input type="text" />
				<button>发送验证码</button>
			</div>
			<div class="remember">
				<input type="checkbox" value="" checked="checked" class="change"/>
				<span class="thisin">我已阅读并同意</span>
				<span class="xieyi">《用户注册协议》</span>
			</div>
			<button class="but">立即注册</button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	@import "../assets/css/register.css";
</style>