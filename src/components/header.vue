<template>
<div>	
	<div class="h-top">
		<img src="http://39.107.254.193/ossfs/img/153441845731751364.jpg" class="erwei" id="erwei" />
		<img src="../assets/img/icon－ding.png" class="dw-ioin" />
		<p class="city">天津</p>
		<p class="login" v-show="us" @click="denglu">
			<!--<router-link to="./Login">-->登陆 / <!--</router-link>-->
		</p>

		<p class="zhuce" v-show="us">
			<router-link to="./Register"> 注册</router-link>
		</p>
		<p class="login1" v-show="dianhua" @click="info">{{iphone}}</p>
		<button class="tuichu" v-show="dianhua" @click="tui">退出</button>
		<ul class="nav">
			<li class="shoujiban" style="border:none;padding-right:0;" @click.stop="erwe">手机版</li>
			<li @click="qiye">企业后台</li>
			<li @click="shoucang">我的收藏</li>
		</ul>
	</div>
	<div class="daohang">
		
		<img src="../assets/img/logo.png" class="logo" />
		<ul class="dh">
			<!--<router-link to="./" >-->
				<li @click="first" :class="{'shou':0===t}">首页</li>
			<!--</router-link>-->
			<!--<router-link to="./News">-->
				<li @click="news" :class="{'shou':1===t}">新闻资讯</li>
			<!--</router-link>-->
			<!--<router-link to="./Product">-->
				<li @click="prod" :class="t==2?'shou':''">产品中心</li>
			<!--</router-link>-->
			<!--<router-link to="./Buyinformation">-->
				<li @click="buy" :class="{'shou':3===t}">求购信息</li>
			<!--</router-link>-->
			<!--<router-link to="./Enterprise">-->
				<li @click="shang" :class="{'shou':4===t}">商务合作</li>
			<!--</router-link>-->
		</ul>
		<button class="kaitong" @click="kaitong">开通展位</button>
	</div>
</div>
</template>

<script>
	export default {
		props:['t'],
		inject:['reload'],
		data() {
			return {
				us:true,
				dianhua:false,
                iphone: localStorage["username"],
			}
		},
		mounted:function(){
			if(this.iphone == "" || this.iphone == undefined) {
				this.us = true;
				this.dianhua = false;
			} else {
				this.us = false;
				this.dianhua = true;
			}
		},
		created() {
			console.log(this.t)
			document.onclick = function() {
//				document.getElementById("erwei").style.display = "none";
			}
		},
		methods: {
			info(){
				this.$emit('dianji',true);
			},
			denglu(){
				localStorage.setItem("router",this.$route.path)
				this.$router.push({
					name:"Login",
				})
			},
			first(){
				this.$router.push({
					name:"Index",
					params:{
						tabId:0
					}
				})
			},
			news(){
//				this.t=1;
//				alert(this.t)
				this.$router.push({
					name:"News",
					params:{
						tabId:1
					}
				})
			},
			prod(){
//				this.t=2;
				this.$router.push({
					name:"Product",
					params:{
						tabId:2
					}
				})
			},
			buy(){
//				this.t=3;
				this.$router.push({
					name:"Buyinformation",
					params:{
						tabId:3
					}
				})
			},
			shang(){
//				this.t=4;
				this.$router.push({
					name:"Enterprise",
					params:{
						tabId:4
					}
				})
			},
			tui() {
				localStorage.removeItem("guanjian");
				localStorage.removeItem("ACCESS_TOKEN");
				localStorage.removeItem("username");
				localStorage.removeItem("Id");
				localStorage.removeItem("postId");
				localStorage.removeItem("Data");
				this.iphone=''
				this.us = true
				this.dianhua=false
				this.reload()
//				this.$router.push({
//					name: "Index"
//				});
			},
			qiye() {
				if(this.iphone == '' || this.iphone == null || this.iphone == undefined) {
					localStorage.setItem("router",this.$route.path)
					this.$router.push({
						name: "Login"
					});
				} else {
					if(this.postId == 0) {
						window.open(encodeURI("http://39.105.24.238/busys.html#/setUp2/index"), "_blank");
					} else {
						window.open(encodeURI("http://39.105.24.238/busys.html#/dataAnalysis0/index"), "_blank");
					}
				}
			},
			shoucang() {
				if(this.iphone == '' || this.iphone == null || this.iphone == undefined) {
					localStorage.setItem("router",this.$route.path)
					this.$message.error("请先登录")
					this.$router.push({
						name: "Login"
					});
				} else {
					this.$router.push({
						name: "Collection"
					});
				}
			},
			erwe() {
				document.getElementById("erwei").style.display = "block";
			},
			kaitong(){
				if(this.iphone == '' || this.iphone == null || this.iphone == undefined) {
					localStorage.setItem("router",this.$route.path)
					this.$router.push({
						name: "Login"
					});
				} else {
					if(this.postId == 0) {
						window.open(encodeURI("http://39.105.24.238/busys.html#/setUp2/index"), "_blank");
					} else {
						window.open(encodeURI("http://39.105.24.238/busys.html#/boothSetting0/index"), "_blank");
					}
				}
			}
		},
	}
</script>

<style scoped>
@import "../assets/css/share/header.css";
</style>