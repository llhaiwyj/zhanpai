<template>
	<div class="buy">
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
				<div class="tag"></div>
				<div class="content">
					<!--<xiangqing v-show="xiangqings" v-bind:xiangqingyes="xiangqingye"></xiangqing>
				<fabuxuqiu v-show="fabu" v-on:success="serlfs"></fabuxuqiu>-->
					<div class="con-left" v-show="listshow">
						<div class="leibie">
							<span class="jtfenlei" @click="quanbu">全部</span>
							<span class="jtfenlei" @click="qicai">实验室器材</span>
							<span class="jtfenlei" @click="fuwu">实验室服务</span>
							<span class="jtfenlei" @click="jiaju">实验室家具</span>
							<span class="jtfenlei" @click="haocai">试剂与耗材</span>
							<!-- <span class="jtfenlei">电子电工仪器</span> -->
						</div>
						<div class="zhuangtai" v-show="buyhide">
							<p class="yijiejues" @click="yijiejueall">已解决</p>
							<p class="jingxing selectActive" @click="weijiejueall">未解决</p>
						</div>
						<div class="chaxun" v-show="buyhide">
							<div class="fabutime">
								<span class="otherTitle">发布时间</span><!-- @click="fabudata"-->
								<div class="otehrGroup">
									<img src="../assets/img/iconTime.png" alt="" class="up" @click="sheng" v-show="sh">
									<img src="../assets/img/sj.png" alt="" class="up" @click="sheng" v-show="shs">
									<img src="../assets/img/iconTimeL.png" alt="" class="down" @click="jiang" v-show="ji">
									<img src="../assets/img/xj.png" alt="" class="down" @click="jiang" v-show="jis">
								</div>

							</div>
							<!--<div class="suozaidiqu">所在地区
								<span class="xia el-icon-caret-bottom"></span>
							</div>-->
							<!-- <div class="suozaidiqu">经营模式

								<img src="" alt="">
							</div> -->
							<!-- <div class="suozaidiqu">资深认证
								<span class="xia el-icon-caret-bottom"></span>
							</div> -->
							<div class="chazhao">
								<input type="text" class="sousuokuang" placeholder="请输入关键字" v-model="guanjian" />
								<img src="../assets/img/search@3x.png" @click="sousuo" />
							</div>
						</div>
						<div class="list">
							<ul class="qiulist">
								<li v-for="i in infomation" @click="inforxiang(i.id)">
									<div class="li-left">
										<p class="listname">{{i.title}}</p>
										<p class="listRes">{{i.content}}</p>
										<!--<span class="listnamejie" v-html="i.content"></span>-->
									</div>
									<div class="li-right">
										<span class="li-right-l">
											<span class="renmuch">
												<img src="../assets/img/persens.png" class="xiaoren" />
												<span class="numb">{{i.pageView}}</span>
										</span>
										<!--<span class="liuyan">
								            <img src="../assets/img/icon－x.png" class="xiaoren"/>
								            <span class="numb">1</span>
									    </span>-->
										</span>
										<span class="li-right-r">
											<span class="diming">{{i.addressA}} {{i.addressC}}</span>
										<span class="dhijiant">{{i.createTime}}</span>
										</span>
									</div>
								</li>
								<!--<li>
					<p class="li-left">
						<span class="listname">求购二等标准密度计</span>
						<span class="listnamejie">购二等标准密度计一套，测氨水用的。急需  联系我</span>
					</p>
					<p class="li-right">
						<span class="li-right-l">
							<span class="renmuch">
								<img src="../assets/img/persens.png" class="xiaoren"/>
								<span class="numb">1</span>
						</span>
						<span class="liuyan">
								<img src="../assets/img/icon－x.png" class="xiaoren"/>
								<span class="numb">1</span>
						</span>
						</span>
						<span class="li-right-r">
							<span class="diming">河北 唐山</span>
						<span class="dhijiant">2018/05/31 16:21</span>
						</span>
					</p>
				</li>-->
							</ul>
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
	//	import xiangqing from './buyinforxiangqing.vue'
	//	import fabuxuqiu from './fabuxuqiu.vue'
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
				idi: "",
				xiangqingye: "",
				token: localStorage["ACCESS_TOKEN"],
				shu: "",
				user: "",
				iphone: localStorage["username"],
				dianhua: false,
				us: true,
				fabu: false,
				buyhide: true,
				b: "",
				shijian: '',
				guanjian: '',
				sh:true,
				shs:false,
				ji:true,
				jis:false,
				infos:false,
			};
		},
		mounted: function() {
			console.log(this.token);
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
						this.$Url + "/as/sAty",
						this.$qs.stringify({
							typea: this.typea,
							solve: this.solve,
							pageSize: this.length,
							pageNum: this.currentPage,
							date: this.shijian,
							mstr: this.guanjian,
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
					localStorage.setItem("router",this.$route.path)
					this.$router.push({
						name: "Login"
					});
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
			//查询个人求购信息--未解决---已解决
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
			quanbu(){
				this.typea = '';
				this.fined();
			},
			qicai() {
				this.typea = 0;
				this.fined();
			},
			fuwu() {
				this.typea = 1;
				this.fined();
			},
			jiaju() {
				this.typea = 2;
				this.fined();
			},
			haocai() {
				this.typea = 3;
				this.fined();
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
			yijiejueall() {
				this.solve=1
				this.fined()
			},
			weijiejueall() {
				this.solve=0
				this.fined()
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
//			fabudata() {
//				this.shijian = 1;
//				this.fined();
//			},
			sheng(){
				this.shijian = 0;
				this.sh=false;
				this.shs=true;
				this.ji=true;
				this.jis=false;
				this.fined();
			},
			jiang(){
				this.shijian = 1;
				this.ji=false;
				this.jis=true;
				this.sh=true;
				this.shs=false;
				this.fined();
			},
			sousuo() {
				this.fined();
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