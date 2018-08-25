<template>
	<div class="login">
		<div class="header">
			<img src="../assets/img/logo.png" class="logo" />
		</div>
		<div class="content">
			<img src="" class="erweima" />
			<p class="xiazai">下载手机版 更方便</p>
			<div class="xinxi">
				<p class="sanfang">用第三方帐号直接登录</p>
				<div class="gongju">
					<img src="../assets/img/QQ.png" class="qq" />
					<img src="../assets/img/weixin.png" class="weixin" />
				</div>
				<p class="zhanghaodenglu">账号登录</p>
				<p class="zhanghao">
					<input type="text" placeholder="用户名/邮箱/手机号" v-model="name" />
					<img src="../assets/img/persen.png" class="ren" />
				</p>
				<p class="mima">
					<input type="password" placeholder="密码" v-model="passwords" />
					<img src="../assets/img/suo.png" class="suo" />
				</p>
				<p class="remember">
					<input type="checkbox" value="" checked="checked" class="change" />
					<span class="thisin">记住这次的登录信息</span>
				</p>
				<button class="but" @click="deng">登录</button>
				<p class="shanhou">
					<router-link to="./retrieve"><span calss="norember">忘记密码</span></router-link>
					<router-link to="./retrieve"><span class="mianfei">免费注册</span></router-link>
				</p>
			</div>
		</div>
		<div class="footer">
			<p class="xian"></p>
			<ul class="nav">
				<li>首页</li>
				<li>3D展馆</li>
				<li>求购信息</li>
				<li>求购信息</li>
			</ul>
			<p class="copyxinxi">公司信息</p>
			<p class="dizhi"><span>地 址</span>：天津市南开区国际总部基地A1座 </p>
			<p class="zhichi">售前支持：13820400408</p>
			<p class="zhichi">客服电话：400-1011-898</p>
			<p class="zhichi">服务邮箱：400-1011-898</p>
			<p class="guishu">Copyright © 2014 zahd . All Rights Reserved 天津天马衡基仪器有限公司</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				passwords: '',
				iphone: this.$route.params.iphone,
				passesw: this.$route.params.passesw,
			};
		},
		methods: {

			deng() {
				console.log(this.iphone)
				this.$ajax.post(this.$Url + "/login/userLogin", this.$qs.stringify({
						account: this.name,
						password: this.passwords
					})).then(datas => {
						console.log(datas)
						if(datas.data.msg == 'success') {
							localStorage.setItem("ACCESS_TOKEN", datas.data.data.ACCESS_TOKEN);
							localStorage.setItem("username", datas.data.data.userInfo.username);
							localStorage.setItem("Id", datas.data.data.userInfo.id);
							this.$router.push({
								name: 'Index',
							});
						}
					})
					.catch(function(error) {
						console.log(error);
					});
				//				if(this.name==this.iphone&&this.passwords==this.passesw){
				//					this.$router.push({
				//					    name: 'Index',
				//				    });
				//				}else{
				//					this.$message.error('信息不一致');
				//				}

				//				this.$ajax.post(`${this.$url}login/userLogin`, {
				//					account: this.name,
				//					password:this.passwords,
				//				}).then(data => {
				//					console.log(data)
				//				})
				//				.catch((error) => {
				//					this.$message.error('获取数据失败');
				//				})
			},
		},
	}
</script>

<style scoped>
	@import "../assets/css/login.css";
</style>