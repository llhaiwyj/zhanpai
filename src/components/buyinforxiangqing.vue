<template>
	<div class="xiangqing" @click="hide">
		<div class="header">
			<p class="xain"></p>
			<p class="xain1"></p>
			<div class="header-zi">
				<Header :t='3' v-on:dianji="dian"></Header>
				<Info v-show="infos" v-on:dianjis="xian"></Info>
				<!--<div class="h-top">
					<img src="../assets/img/icon－ding.png" class="dw-ioin" />
					<p class="city">天津</p>
					<p class="login" v-show="us">
						<router-link to="./Login" @click.native="flushCom">登陆 / </router-link>
					</p>

					<p class="zhuce" v-show="us">
						<router-link to="./Register" @click.native="flushCom"> 注册</router-link>
					</p>
					<p class="login1" v-show="dianhua">{{iphone}}</p>
					<button class="tuichu" v-show="dianhua" @click="tui">退出</button>
					<ul class="nav">
						<!--<li>我的浏览&nbsp;&nbsp;|</li>
					<li>我的收藏&nbsp;&nbsp;|</li>-->
						<!--<li class="shoujiban" style="border:none;padding-right:0;">手机版</li>
						<li>企业后台</li>
						<li @click="shoucang">我的收藏</li>
					</ul>-->
				<!--</div>-->
				<!--<div class="daohang">
					<img src="../assets/img/logo.png" class="logo" />
					<ul class="dh">
						<router-link to="./" @click.native="flushCom">
							<li>首页</li>
						</router-link>
						<router-link to="./News" @click.native="flushCom">
							<li>新闻资讯</li>
						</router-link>
						<router-link to="./Product" @click.native="flushCom">
							<li>产品中心</li>
						</router-link>
						<router-link to="./Buyinformation" @click.native="flushCom">
							<li class="shou">求购信息</li>
						</router-link>
						<router-link to="./Enterprise" @click.native="flushCom">
							<li>商务合作</li>
						</router-link>
					</ul>
					<button class="kaitong" @click="kaitong">开通展位</button>
				</div>-->
				<p class="xuqiu">您的需求</br> 我们都可以满足</p>
				<button class="fabu" @click="fabuxuqiu">发布需求</button>
			</div>
		</div>
		<div class="cotnet">
			<div class="conts">
				<div class="tag"></div>
				<div class="content">
					<div class="con-left1">
						<!--<div class="title">
							<p class="midu">求购二等标准密度计</p>
							<!--<button class="huifu">回复</button>-->
						<!--</div>--> 
						<div class="xiangxi1">
							<div class="yilun">
								<p class="x-title">{{xiangqingye.title}}</p>
								<p class="chnegshi">{{xiangqingye.addressA}} {{xiangqingye.addressB}} {{xiangqingye.addressC}}</p>
								<p class="shijian">{{xiangqingye.createTime}}</p>
								<p class="x-x"></p>
								<p class="x-co" v-html="xiangqingye.content"></p>

								<!--<span>回复</span>-->
							</div>
							<!--<div class="yilun">
				<div class="shang">
					<img src="" class="bioa" />
					<p class="shangname">天马衡基仪…</p>
				</div>
				<p class="lianix">购二等标准密度计一套，测氨水用的。急需 联系我</p>
				<p class="chnegshi">天津</p>
				<p class="shijian">2018-05-31 16:21<span>回复</span></p>
			</div>
		
			<!--<div class="block">
				<el-row>
					<el-col>
						<div class="pages">
							<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="total, sizes, prev, pager, next, jumper" :total="total">
							</el-pagination>
						</div>
					</el-col>
				</el-row>
			</div>-->
							<!--<p class="fabiao">发表回复</p>
			<textarea class="neirong"></textarea>
			<button class="fab">发表</button>-->
			               <button class="xq-huo" @click.stop="huoqu">获取联系方式</button>
			               <div class="xq-lian" id="xq-lian">
			               	   <p><span>手机号码：</span>{{xiangqingye.iphoneNo}}</p>
			               	   <p><span>QQ：</span>{{xiangqingye.qq}}</p>
			               	   <p><span>微信：</span>{{xiangqingye.wechat}}</p>
			               </div>
						</div>
					</div>
					<div class="con-right1">
						<div class="geren">
							<div class="gerenname">
								<img src="" class="touxaing" />
								<p class="xname">{{user.username}}</p>
							</div>
							<div class="hangyexinxi">
								<p class="guanhzuhangye">
									<span class="xiaobiao">关注行业:</span>
									<span class="xiangxi"> </span>
								</p>
								<p class="guanhzuhangye">
									<span class="xiaobiao">经营模式:</span>
									<span class="xiangxi"></span>
								</p>
								<p class="guanhzuhangye">
									<span class="xiaobiao">所在地区:</span>
									<span class="xiangxi"></span>
								</p>
							</div>
							<p class="xian"></p>
							<p class="mainqiugou">我的求购</p>
							<div class="yijiejue" @click="yijiejue">
								<img src="../assets/img/icon-yi.png" class="jiebiao" />
								<p class="yj">已解决</p>
								<!--<p class="shuliang">0</p>-->
							</div>
							<div class="weijiejue" @click="weijiejue">
								<img src="../assets/img/icon-wei.png" class="jiebiao" />
								<p class="yj">未解决</p>
								<!--<p class="shuliang">0</p>-->
							</div>
							<button class="fabuxuqiu" @click="fabuxuqiu">发布需求</button>
						</div>
						<div class="xiqiu">
							<p class="edxq">热点需求</p>
							<p class="edxuqius edxuqiusln" v-for="(r,index) in redian" @click="inforxiang(index,r.id)" :class="{'edxuqiusact':index===b}">{{r.title}}</p>
							<!--<div class="xuqiupin" v-for="r in redian">
							<img src="" class="cqp" />
							<p class="chanpinname">{{r.title}}</p>
						</div>-->
							<!--<div class="xuqiupin">
							<img src="" class="cqp" />
							<p class="chanpinname">N75 恒温水浴锅</p>
						</div>
						<div class="xuqiupin">
							<img src="" class="cqp" />
							<p class="chanpinname">N75 恒温水浴锅</p>
						</div>-->
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
		<!--<div class="footer">
			<div class="foot">
				<div class="wei">
					<ul class="weinav">
						<li>首页</li>
						<li>3D展馆</li>
						<li>产品中心</li>
						<li>求购信息</li>
						<li>商务合作</li>
					</ul>
					<ul class="qibiao">
						<li>
							<img src="../assets/img/logo-baidu.png" class="baidu" />
						</li>
						<li>
							<img src="../assets/img/logo-weibo.png" class="weibo" />
						</li>
						<li>
							<img src="../assets/img/logo-weixin.png" class="weixin" />
						</li>
						<li>
							<img src="../assets/img/logo-xinlang.png" class="xinlang" />
						</li>
					</ul>
					<p class="dress">©2017 LiVE System.</p>
					<p class="lainxi">泰富总部 0731-52837000 泰富营销 0731-52837288 <br/>总部地址：湖南省湘潭市九华经济技术开发区奔驰路6号 <br/>E-mail：sales@tidfore.com</p>
				</div>
			</div>
		</div>-->
	</div>
</template>

<script>
	import Header from './header'
	import Footer from './foot'
	import Info from './gereninfo'
	export default {
		components: {
			Header,
			Footer,
			Info,
		},
		inject:['reload'],
		data() {
			return {
				xiangqingye: "",
				redian: "",
				id: this.$route.params.ids,
				dianhua: false,
				us: true,
				fabu: false,
				user: "",
				iphone: localStorage["username"],
				token: localStorage["ACCESS_TOKEN"],
				shu: "",
				b: this.$route.params.a,
				sanzhong:false,
				solve: "",
				infos:false,
			};
		},
		mounted: function() {
			//			console.log(this.xiangqingyes)
			this.inforxiangs();
			this.erdain();
			this.gereninfo();
			this.geren();
			if(this.iphone == "" || this.iphone == undefined) {
				this.us = true;
				this.dianhua = false;
			} else {
				this.us = false;
				this.dianhua = true;
			}
		},
		methods: {
			xian(b){
				this.reload()
//				this.$router.push({
//					name: "News",
//				});
//				this.$router.go(0);
			   
			   this.infos=b
			    
			},
			dian(a){
				this.infos=false
				
				this.infos=a
			},
			yijiejue() {
				if(this.token==''||this.token==null||this.token==undefined){
					this.$message.error("请先登陆")
				}else{
					this.solve = 1;
				//    this.buyhide = false;
				//    this.fined();
				this.$router.push({
					name: "Solve",
					params: {
						solveds: this.solve
					}
				});
				}
				
			},
			weijiejue() {
				if(this.token==''||this.token==null||this.token==undefined){
					this.$message.error("请先登陆")
				}else{
					this.solve = 0;
				this.$router.push({
					name: "Solve",
					params: {
						solveds: this.solve
					}
				});
				}
				
				//    this.buyhide = false;
				//    this.fined();
			},
			hide(){
//				this.sanzhon=false
				document.getElementById('xq-lian').style.display="none"
			},
			huoqu(){
				if(this.token==''||this.token==null||this.token==undefined){
					this.$message.error("请先登陆");
					this.$router.push({
						name: "Login"
					});
				}else{
					document.getElementById('xq-lian').style.display="block"
				}
				
			},
			gereninfo() {
				this.$ajax
					.post(
						this.$Url + "/st/sS",
						this.$qs.stringify({
							ACCESS_TOKEN: this.token
						})
					)
					.then(ret => {
						console.log(ret);
						this.user = ret.data.data.user;
						console.log(this.user);
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			geren() {
				this.$ajax
					.post(
						this.$Url + "/as/sAso",
						this.$qs.stringify({
							ACCESS_TOKEN: this.token
						})
					)
					.then(data => {
						console.log(data);
						this.shu = data.data.data.data;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			inforxiang(index, id) {
				this.b = index;
				this.$ajax
					.post(
						this.$Url + "/as/gA",
						this.$qs.stringify({
							id: id
						})
					)
					.then(ret => {
						console.log(ret);
						this.xiangqingye = ret.data.data.ask;
						console.log(this.xiangqingye);
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			inforxiangs() {
				console.log(this.id)
				this.$ajax
					.post(
						this.$Url + "/as/gA",
						this.$qs.stringify({
							id: this.id
						})
					)
					.then(ret => {
						console.log(ret);
						this.xiangqingye = ret.data.data.ask;
						console.log(this.xiangqingye);
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			erdain() {
				this.$ajax
					.post(this.$Url + "/as/sAhot", this.$qs.stringify({}))
					.then(ret => {
						console.log(ret);
						this.redian = ret.data.data.list;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			fabuxuqiu() {
				if(this.token == "" || this.token == undefined) {
					this.$message.error("请先登陆");
				} else {
					this.$router.push({
						name: "Fabuxuqiu"
					});
				}
			},
			tui() {
				localStorage.removeItem("ACCESS_TOKEN");
				localStorage.removeItem("username");
				localStorage.removeItem("Id");
				localStorage.removeItem("postId");
				localStorage.removeItem("Data");
				this.iphone='';
				this.us = true
				this.dianhua = false
				this.$router.push({
					name: "Index"
				});
			},
			shoucang() {
				if(this.iphone == '' || this.iphone == null || this.iphone == undefined) {
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
			kaitong(){
				if(this.iphone == '' || this.iphone == null || this.iphone == undefined) {
					this.$router.push({
						name: "Login"
					});
				} else {
					if(this.postId == 0) {
						window.open(encodeURI("http://39.105.24.238/busys.html#/personalCenter2/index"), "_blank");
					} else {
						window.open(encodeURI("http://39.105.24.238/busys.html#/dataAnalysis0/index"), "_blank");
					}
				}
			}
		}
	};
</script>

<style scoped>
	@import "../assets/css/buyinformation.css";
</style>