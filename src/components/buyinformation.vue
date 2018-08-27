<template>
	<div class="buy">
		<div class="header">
			<div class="h-top">
				<img src="../assets/img/dingwei.png" class="dw-ioin" />
				<p class="city">天津</p>
				<p class="login" v-show="us">
					<router-link to="./" @click.native="flushCom">登陆 / </router-link>
				</p>

				<p class="zhuce" v-show="us">
					<router-link to="./Register" @click.native="flushCom"> 注册</router-link>
				</p>
				<p class="login" v-show="dianhua">{{iphone}}</p>
				<ul class="nav">
					<li>我的浏览&nbsp;&nbsp;|</li>
					<li>我的收藏&nbsp;&nbsp;|</li>
					<li>个人中心&nbsp;&nbsp;|</li>
					<li>手机版 </li>
				</ul>
			</div>
			<div class="daohang">
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
						<li>求购信息</li>
					</router-link>
					<router-link to="./Enterprise" @click.native="flushCom">
						<li>商务合作</li>
					</router-link>
				</ul>
				<button class="kaitong">开通展位</button>
			</div>
			<p class="xuqiu">您的需求</br> 我们都可以满足</p>
			<button class="fabu" @click="fabuxuqiu">发布需求</button>
		</div>
		<div class="cotnet">
			<div class="tag"></div>
			<div class="content">
				<!--<xiangqing v-show="xiangqings" v-bind:xiangqingyes="xiangqingye"></xiangqing>
				<fabuxuqiu v-show="fabu" v-on:success="serlfs"></fabuxuqiu>-->
				<div class="con-left" v-show="listshow">
					<div class="leibie">
						<p class="jtfenlei" @click="qicai">实验室器材</p>
						<p class="jtfenlei" @click="fuwu">实验室服务</p>
						<p class="jtfenlei" @click="jiaju">实验室家具</p>
						<p class="jtfenlei" @click="haocai">试剂与耗材</p>
					</div>
					<div class="zhuangtai">
						<p class="yijiejues" @click="yijiejue">已解决</p>
						<p class="jingxing" @click="weijiejue">未解决</p>
					</div>
					<div class="chaxun">
						<p class="fabutime">发布时间
							<span class="shang el-icon-caret-top"></span>
							<span class="xia el-icon-caret-bottom"></span>
						</p>
						<p class="suozaidiqu">所在地区
							<span class="xia el-icon-caret-bottom"></span>
						</p>
						<p class="suozaidiqu">经营模式
							<span class="xia el-icon-caret-bottom"></span>
						</p>
						<p class="suozaidiqu">资深认证
							<span class="xia el-icon-caret-bottom"></span>
						</p>
						<p class="chazhao">
							<input type="text" class="sousuokuang" placeholder="请输入关键字" />
							<img src="../assets/img/search.png" />
						</p>
					</div>
					<div class="list">
						<ul class="qiulist">
							<li v-for="i in infomation" @click="inforxiang(i.id)">
								<p class="li-left">
									<span class="listname">{{i.title}}</span>
									<!--<span class="listnamejie" v-html="i.content"></span>-->
								</p>
								<p class="li-right">
									<span class="li-right-l">
							            <span class="renmuch">
								            <img src="../assets/img/persens.png" class="xiaoren"/>
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
								</p>
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
										<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" :total="total">
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
							<p class="guanhzuhangye"><span class="xiaobiao">关注行业:</span><span class="xiangxi"> </span></p>
							<p class="guanhzuhangye"><span class="xiaobiao">经营模式:</span><span class="xiangxi"></span></p>
							<p class="guanhzuhangye"><span class="xiaobiao">所在地区:</span><span class="xiangxi"></span></p>
						</div>
						<p class="xian"></p>
						<p class="mainqiugou">我的求购</p>
						<div class="yijiejue" @click="yijiejue">
							<img src="../assets/img/icon-yi.png" class="jiebiao" />
							<p class="yj">已解决</p>
							<p class="shuliang">{{shu.resolved}}</p>
						</div>
						<div class="weijiejue" @click="weijiejue">
							<img src="../assets/img/icon-wei.png" class="jiebiao" />
							<p class="yj">未解决</p>
							<p class="shuliang">{{shu.unsolved}}</p>
						</div>
						<button class="fabuxuqiu" @click="fabuxuqiu">发布需求</button>
					</div>
					<div class="xiqiu">
						<p class="edxq">热点需求</p>
						<p class="edxuqius" v-for="r in redian" @click="inforxiang(r.id)">{{r.title}}</p>
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
		<div class="footer">
			<div class="wei">
				<ul class="weinav">
					<li>|&nbsp;&nbsp;首页|</li>
					<li>3D展馆&nbsp;&nbsp;|</li>
					<li>产品中心&nbsp;&nbsp;|</li>
					<li>求购信息&nbsp;&nbsp;|</li>
					<li>商务合作&nbsp;&nbsp;|</li>
				</ul>
				<ul class="qibiao">
					<li>
						<img src="../assets/img/tu2.png" />
					</li>
					<li>
						<img src="../assets/img/tu2.png" />
					</li>
					<li>
						<img src="../assets/img/tu2.png" />
					</li>
					<li>
						<img src="../assets/img/tu2.png" />
					</li>
				</ul>
				<p class="dress">©2017 LiVE System.</p>
				<p class="lainxi">泰富总部 0731-52837000 泰富营销 0731-52837288 <br/>总部地址：湖南省湘潭市九华经济技术开发区奔驰路6号 <br/>E-mail：sales@tidfore.com</p>
			</div>
		</div>
	</div>
</template>

<script>
	//	import xiangqing from './buyinforxiangqing.vue'
	//	import fabuxuqiu from './fabuxuqiu.vue'
	export default {
		//		components: {
		//			xiangqing,
		//			fabuxuqiu
		//		},
		data() {
			return {
				xiangqings: false,
				listshow: true,
				redian: '',
				currentPage: 1,
				total: '',
				length: 10,
				infomation: '',
				typea: '',
				solve: '',
				id: '',
				xiangqingye: '',
				token: localStorage["ACCESS_TOKEN"],
				shu: '',
				user: '',
				iphone: localStorage["username"],
				dianhua: false,
				us: true,
				fabu: false,
			}
		},
		mounted: function() {
			if(this.iphone == '' || this.iphone == undefined) {
				this.us = true;
				this.dianhua = false
			} else {
				this.us = false;
				this.dianhua = true
			}
			this.fined();
			this.erdain();
			this.geren();
			this.gereninfo();
		},
		methods: {
			handleCurrentChange(page) {
				console.log(page)
				this.currentPage = page;
				this.fined();
			}, //改变条数触发
			handleIndexChange(index) {
				console.log(index)
				this.length = index;
				this.fined();
			},
			fined() {
				this.$ajax.post(this.$Url + "/as/sAty", this.$qs.stringify({
						typea: this.typea,
						solve: this.solve,
						pageSize:this.length,
						pageNum:this.currentPage,
					})).then(ret => {
						console.log(ret)
						this.infomation = ret.data.data.list.list
						this.total = ret.data.data.list.total
						for(let i in this.infomation) {
							this.infomation[i].createTime = this.infomation[i].createTime.substring(0, 10)
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			//发布需求
			fabuxuqiu() {
				this.$router.push({
					name: 'Fabuxuqiu',
				});
			},
			//查询个人信息
			gereninfo() {
				this.$ajax.post(this.$Url + "/st/sS", this.$qs.stringify({
						ACCESS_TOKEN: this.token
					})).then(ret => {
						console.log(ret)
						this.user = ret.data.data.user
						console.log(this.user)
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			//查询个人求购信息--未解决---已解决
			geren() {
				this.$ajax.post(this.$Url + "/as/sAso", this.$qs.stringify({
						ACCESS_TOKEN: this.token
					})).then(data => {
						console.log(data)
						this.shu = data.data.data.data
					})
					.catch(function(error) {
						console.log(error);
					});
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
				this.solve = 1;
				this.fined();
			},
			weijiejue() {
				this.solve = 0;
				this.fined();
			},
			inforxiang(id) {
				this.id = id
				console.log(this.id)
				this.$router.push({
					name: 'Buyinforxiangqing',
					params: {
						ids: this.id
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
				this.$ajax.post(this.$Url + "/as/sAhot", this.$qs.stringify({

					})).then(ret => {
						console.log(ret)
						this.redian = ret.data.data.list
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
				window.open(encodeURI("http://39.105.31.48:8080/ud/index.html?id=" + this.cont), '_blank');
			},
		},
	}
</script>

<style scoped>
	@import "../assets/css/buyinformation.css";
</style>