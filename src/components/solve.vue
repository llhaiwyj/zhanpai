<template>
	<div class="buy">
		<div class="header">
			<p class="xain"></p>
			<p class="xain1"></p>
			<div class="header-zi">
				<Header v-on:dianji="dian"></Header>
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
						<li class="shoujiban" style="border:none;padding-right:0;">手机版</li>
						<li>企业后台</li>
							<li @click="shoucang">我的收藏</li>
					</ul>
				</div>-->
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
				<p class="s-tag" @click="back">全部求购列表 <!--<span v-show="wei">未解决</span><span v-show="yi">已解决</span>--></p>
				<div class="content">
					<div class="con-left">
						<div class="solvelist" v-for="i in infomation" >
							<div class="s-rq">
								<p>发布时间：{{i.createTime}}</p>
								<p>更新时间：{{i.updateTime}}</p>
							</div>
							<div class="s-lis">
								<div class="s-n-l"  @click="inforxiang(i.id)">
									<p class="s-name">{{i.title}}</p>
									<p class="s-cont">{{i.content}}</p>
								</div>
								<div class="s-cao">
									<span @click="gengxin(i.id)">更新</span><!--<span>已解决</span>-->
								</div>
								<div class="s-zhs">
									<div class="s-ren">
										<img src="../assets/img/persen.png" />{{i.pageView}}
									</div>
									<!--<div class="s-liya">
										<img src="../assets/img/icon－x.png" />30
									</div>-->
								</div>
								<div class="s-caozuo">
									<button @click="remove(i.id)" >删除</button>
									<button @click="bian(i.id)">编辑</button>
								</div>
							</div>
						</div>
						<div class="block">
							<el-row>
								<el-col>
									<div class="pages">
										<el-pagination background layout="prev, pager, next" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" :total="total">
										</el-pagination>
									</div>
								</el-col>
							</el-row>
						</div>
					</div>
					<div class="con-right">
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
								<!-- <p class="shuliang">{{shu.resolved}}</p> -->
							</div>
							<div class="weijiejue" @click="weijiejue">
								<img src="../assets/img/icon-wei.png" class="jiebiao" />
								<p class="yj ">未解决</p>
								<!-- <p class="shuliang">{{shu.unsolved}}</p> -->
							</div>
							<button class="fabuxuqiu" @click="fabuxuqiu">发布需求</button>
						</div>
						<div class="xiqiu">
							<div class="edxq">热点需求</div>
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
				xiangqings: false,
				listshow: true,
				redian: "",
				currentPage: 1,
				total: "",
				length: 10,
				infomation: "",
				typea: "",
				solve: "",
				id: "",
				xiangqingye: "",
				token: localStorage["ACCESS_TOKEN"],
				shu: "",
				user: "",
				iphone: localStorage["username"],
				dianhua: false,
				us: true,
				fabu: false,
				buyhide: true,
				b: '',
				solve: this.$route.params.solveds,
				wei: false,
				yi: false,
				idi:'',
				infos:false,
			};
		},
		mounted: function() {
			console.log(this.solve)
			console.log(this.token);
			//头部显隐判断
			if(this.iphone == "" || this.iphone == undefined) {
				this.us = true;
				this.dianhua = false;
			} else {
				this.us = false;
				this.dianhua = true;
			}
			this.fined();
			this.erdain();
			this.geren();
			this.gereninfo();
			if(this.solve == '1') {
				this.yi = true
				this.wei = false
			} else if(this.solve == '0') {
				this.wei = true
				this.yi = false
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
			inforxiang(id) {
				console.log(id)
//				this.b = index;
//				console.log(this.b);
				this.idi = id;
				console.log(this.idi);
				this.$router.push({
					name: "Buyinforxiangqing",
					params: {
						ids: this.idi,
					}
				});
				//				this.$ajax.post(this.$Url + "/as/gA", this.$qs.stringify({
				//						id: this.id
				//					})).then(ret => {
				//						console.log(ret)
				//						this.xiangqings=true;
				//						this.listshow=false
				//						this.xiangqingye = ret.data.data.ask
				//						console.log(this.xiangqingye)
				//					})
				//					.catch(function(error) {
				//						console.log(error);
				//					});
			},
			//删除
			remove(id) {
				this.$ajax.post(this.$Url + "/as/dA", this.$qs.stringify({
						id: id
					})).then(ret => {
						console.log(ret);
						if(ret.data.code == '1') {
							this.$message.success(ret.data.msg)
							this.fined();
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			//更新
			gengxin(id) {
				this.$ajax.post(this.$Url + "/as/uAda", this.$qs.stringify({
						id: id
					})).then(ret => {
						console.log(ret);
						if(ret.data.code == '1') {
							this.$message.success(ret.data.msg)
							this.fined();
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			bian(id) {
				this.$router.push({
					name: "Fabuxuqiu",
					params: {
						ids: id
					}
				});
			},
			handleCurrentChange(page) {
				console.log(page);
				this.currentPage = page;
				this.fined();
			}, //改变条数触发
			handleIndexChange(index) {
				console.log(index);
				this.length = index;
				this.fined();
			},
			fined() {
				this.$ajax
					.post(
						this.$Url + "/as/sAu",
						this.$qs.stringify({
							solveStatus: this.solve,
							pageSize: this.length,
							pageNum: this.currentPage
						})
					)
					.then(ret => {
						console.log(ret);
						this.infomation = ret.data.data.list.list;
						this.total = ret.data.data.list.total;
						for(let i in this.infomation) {
							this.infomation[i].createTime = this.infomation[
								i
							].createTime.substring(0, 10);
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			//发布需求
			fabuxuqiu() {
				if(this.token == "" || this.token == undefined) {
					this.$message.error("请先登陆");
				} else {
					this.$router.push({
						name: "Fabuxuqiu"
					});
				}
			},
			//查询个人信息
			gereninfo() {
				this.$ajax
					.post(
						this.$Url + "/st/sS",
						this.$qs.stringify({
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
			//查询个人求购信息--未解决---已解决
			geren() {
				this.$ajax
					.post(
						this.$Url + "/as/sAso",
						this.$qs.stringify({
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
			yijiejue() {
				this.solve = 1;
				this.buyhide = false;
				this.wei = false
				this.yi = true
				this.fined();
			},
			weijiejue() {
				this.wei = true
				this.yi = false
				this.solve = 0;
				this.buyhide = false;
				this.fined();
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
			serlfs() {
				this.xiangqings = false;
				this.listshow = true;
				this.fabu = false;
				this.fined();
			},
			flushCom: function() {
				this.$router.go(0);
			},
			zhan() {
				window.open(
					encodeURI("http://39.105.31.48:8080/ud/index.html?id=" + this.cont),
					"_blank"
				);
			},
			back(){
				this.$router.push({
					name: "Buyinformation",
				});
			},
			tui() {
				localStorage.removeItem("ACCESS_TOKEN");
				localStorage.removeItem("username");
				localStorage.removeItem("Id");
				localStorage.removeItem("postId");
				localStorage.removeItem("Data");
				this.iphone='';
				this.us = true
				this.dianhua=false
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