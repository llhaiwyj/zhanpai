<template>
	<div class="login">
		<div class="header">
			<img src="../assets/img/l.png" class="logo" />
		</div>
		<div class="content">
			<img src="http://39.107.254.193/ossfs/img/153441845731751364.jpg" class="erweima" />
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
				    <span class="norember" @click="rember">忘记密码</span>
					<span class="mianfei" @click="zhuce">注册</span>
				</p>
			</div>
		</div>
		<div class="footer">
			<p class="xian"></p>
			<ul class="nav">
				<li @click="shouye">首页</li>
				<li @click="ud">3D展馆</li>
				<!--<li>求购信息</li>
				<li>求购信息</li>-->
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
				router:localStorage.getItem("router"),
				urls:'',
			};
		},
		mounted(){
			console.log(this.router)
			if(this.router==''||this.router==null||this.router==undefined){
			}else{
				this.urls=this.router.substring(1,30)
			}
		},
		methods: {
			 rember(){
            	this.$router.push({
					name: 'Retrieve',
				});
            },
            zhuce(){
            	this.$router.push({
					name: 'Register',
				});
            },
			deng() {
//				let r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
//				if(!r.test(this.name)) {
//					this.$message.error("请输入正确的手机号码")
//				}else{
					this.$ajax.post(this.$Url + "/login/userLogin", this.$qs.stringify({
						account: this.name,
						password: this.passwords
					})).then(datas => {
						console.log(datas)
						if(datas.data.code == '1') {
							localStorage.removeItem("guanjian");
							localStorage.setItem("ACCESS_TOKEN", datas.data.data.ACCESS_TOKEN);
							localStorage.setItem("username", datas.data.data.userInfo.username);
							localStorage.setItem("Id", datas.data.data.userInfo.id);
							localStorage.setItem("postId", datas.data.data.userInfo.postId);
							if(this.router==''||this.router==null||this.router==undefined){
//								alert(1)
								this.$router.push({
								    name:"Index",
							    });
							}else{
//								alert(2)
//								this.urls=this.router.substring(1,30)
								localStorage.removeItem("router")
								this.$router.push({
								    name: this.urls,
							   });
							}
						}else{
							this.$message.error(datas.data.msg)
						}
					})
					.catch(function(error) {
						console.log(error)
					});
//				}
				
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
			shouye(){
				this.$router.push({
					name: 'Index',
			    });
			},
			ud(){
				window.open(
					encodeURI("http://39.105.31.48:8080/ud/index.html?keyword="),
					"_blank"
				);
			}
		},
	}
</script>

<style scoped>
	@import "../assets/css/login.css";
</style>