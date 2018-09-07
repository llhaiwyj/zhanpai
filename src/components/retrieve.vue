<template>
	<div class="retrieve">
		<div class="content">
			<div class="header">
				<img src="../assets/img/l.png" class="logo" />
			</div>
			<div class="buzhou">
				<el-steps :active="active" finish-status="success">
					<el-step title="验证身份"></el-step>
					<el-step title="修改密码"></el-step>
					<el-step title="完成"></el-step>
				</el-steps>

			</div>
			<div v-show="yi">
				<p class="benren">为确认是本人操作，请完成以下验证</p>
				<div class="yonghuming">
					<p class="name">账号：</p>
					<input type="text" placeholder="手机号/邮箱" v-model="iphone" />
				</div>
				<div class="yanzhnewgma">
					<p class="name">验证码：</p>
					<input type="text" v-model="yan" />
					<button @click="senter"><span v-show="fahide">发送验证码</span><span v-show="daohide">{{miao}}s</span></button>
				</div>
			</div>
			<div class="xiugai" v-show="er">
				<div class="mimas">
					<p class="names">新密码：</p>
					<input type="password" v-model="passe" />
				</div>
				<p class="tishi">密码由6-16个字符组成，区分大小写（不能是纯数字，不能包含空格）</p>
				<!--<div class="qiangdu">
				<p class="names">密码强度：</p>
			</div>-->
				<div class="truemiam">
					<p class="names">确认密码：</p>
					<input type="password" v-model="passesw" />
				</div>
			</div>
			<el-button v-show="xaioshi" id="next" @click="next" class="next" :class="{'next1':0===a}" display="display">确定</el-button>
			<div class="xiugaiwancheng" v-show="san">
				<img src="../assets/img/icon-OK.png" class="ok" />
				<p class="wanchneg">修改完成</p>
				<p class="fanhui">{{total}}s后返回</p>
			</div>
			<div class="shuoming" v-show="yi">
				<p class="wen">没收到验证码吗？</p>
				<p class="wen1">1、网络通讯异常可能会造成短信丢失，请重新获取或稍后再试.</p>
				<p class="wen1">2、网络通讯异常可能会造成短信丢失，请重新获取或稍后再试.</p>
				<p class="wen1">3、网络通讯异常可能会造成短信丢失，请重新获取或稍后再试.</p>
				<p class="wen1">4、网络通讯异常可能会造成短信丢失，请重新获取或稍后再试.</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 1,
				er: false,
				yi: true,
				san: false,
				iphone: '',
				yan: '',
				passe: '',
				passesw: '',
				xaioshi: true,
				timer: null,
				total: 5,
				a: '',
				miao: 60,
				fahide: true,
				daohide: false,
			};
		},
		methods: {
			next() {
				console.log(this.active)
				//				if(this.active++ > 1) this.active = 0;
				if(this.active == 1 && this.iphone != '' && this.yan != '' && this.miao !== 0) {
					this.a = 0
					if(this.active++ > 1) this.active = 0;
					this.yi = false
					this.er = true
					return;
				} else if(this.active == 2 && this.passe != '' && this.passesw != '') {
					//					alert(2)
					if(this.passesw != this.passe) {
						this.$message.error('两次密码不一致');
					} else {
						this.$ajax.post(this.$Url + "/login/registerUser", this.$qs.stringify({
								code: this.yan,
								phoneNum: this.iphone,
								password: this.passesw
							})).then(datas => {
								console.log(datas)
								if(datas.data.code == '-1') {
									this.$message.error(datas.data.msg)
								}
								console.log(datas.data.data.ACCESS_TOKEN)
								if(this.active++ > 1) this.active = 0;
								this.yi = false
								this.er = false
								this.san = true
								this.xaioshi = false
								let clock = window.setInterval(() => {
									this.total--
										if(this.total == 0) {
											this.yi = true
											this.er = false
											this.san = false
											this.$router.push({
												name: 'Login',
												params: {
													iphone: this.iphone,
													passesw: this.passesw
												}
											});
										}
								}, 1000)
							})
							.catch(function(error) {
								console.log(error);
							});
					}
				} else if(this.active == 3) {
					alert(3)
				}
				//				if(this.passesw!=this.passe){
				//					this.$message.error('两次密码不一致');
				//				}else{
				//					this.yi=false
				//					this.er=false
				//					this.san=true
				//				}
			},
			senter() {
				this.$ajax.post(this.$Url + "/st/getCode", this.$qs.stringify({
						iphone: this.iphone
					})).then(datas => {
						console.log(datas)
					})
					.catch(function(error) {
						console.log(error);
					});
				this.miao = 60
				clearInterval(clocks);
				this.fahide = false;
				this.daohide = true;
				let clocks = window.setInterval(() => {
					this.miao--
						if(this.miao == 0 && this.yan == '') {
							clearInterval(clocks);
							this.$message.error("已超时！请重新获取验证码")
							this.fahide = true;
							this.daohide = false;
						}
				}, 1000)

				//				if(this.iphone==''||this.iphone==null||this.iphone==undefined){
				//					this.$message.error("请先填写手机号")
				//				}else{
				//					
				//				}

			},
		},
	}
</script>

<style scoped>
	@import "../assets/css/retrieve.css";
</style>