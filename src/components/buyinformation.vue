<template>
	<div class="buy">
		<div class="header">
			<div class="h-top">
				<img src="../assets/img/dingwei.png" class="dw-ioin" />
				<p class="city">天津</p>
				<p class="login">登陆 / </p>
				<p class="zhuce"> 注册</p>
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
					<router-link to="./Index" @click.native="flushCom">
						<li>首页</li>
					</router-link>
					<li @click="zhan">3D展馆</li>
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
				<button class="kaitong" @click="zhan">开通展位</button>
			</div>
			<p class="xuqiu">您的需求</br> 我们都可以满足</p>
			<button class="fabu">发布需求</button>
		</div>
		<div class="cotnet">
			<div class="tag"></div>
			<div class="content">
				<xiangqing v-show="xiangqings" v-bind:xiangqingye="xiangqingye"></xiangqing>
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
							<img src="../assets/img/icon_search.png" />
						</p>
					</div>
					<div class="list">
						<ul class="qiulist">
							<li v-for="i in infomation" @click="inforxiang(i.id)">
								<p class="li-left">
									<span class="listname">{{i.title}}</span>
									<span class="listnamejie">{{i.content}}</span>
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
							<p class="xname">张先生</p>
						</div>
						<div class="hangyexinxi">
							<p class="guanhzuhangye"><span class="xiaobiao">关注行业:</span><span class="xiangxi">实验仪器、化学原料 </span></p>
							<p class="guanhzuhangye"><span class="xiaobiao">经营模式:</span><span class="xiangxi">生产商</span></p>
							<p class="guanhzuhangye"><span class="xiaobiao">所在地区:</span><span class="xiangxi">天津 南开区</span></p>
						</div>
						<p class="xian"></p>
						<p class="mainqiugou">我的求购</p>
						<div class="yijiejue">
							<img src="../assets/img/icon-yi.png" class="jiebiao" />
							<p class="yj">已解决</p>
							<p class="shuliang">{{shu.resolved}}</p>
						</div>
						<div class="weijiejue">
							<img src="../assets/img/icon-wei.png" class="jiebiao" />
							<p class="yj">未解决</p>
							<p class="shuliang">{{shu.unsolved}}</p>
						</div>
						<button class="fabuxuqiu">发布需求</button>
					</div>
					<div class="xiqiu">
						<p class="edxq">热点需求</p>
						<p class="edxuqius" v-for="r in redian">{{r.title}}</p>
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
	import xiangqing from './buyinforxiangqing.vue'
	export default {
		components: {
			xiangqing,
		},
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
				token:localStorage["ACCESS_TOKEN"],
				shu:'',
			}
		},
		mounted: function() {
			this.fined();
			this.erdain();
			this.geren();
		},
		methods: {
			handleCurrentChange(page) {
				console.log(page)
				this.currentPage = page;
			}, //改变条数触发
			handleIndexChange(index) {
				console.log(index)
				this.length = index;
			},
			fined() {
				this.$ajax.post(this.$Url + "/as/sAty", this.$qs.stringify({
						typea: this.typea,
						solve: this.solve
					})).then(ret => {
						console.log(ret)
						this.infomation = ret.data.data.list
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			geren(){
				this.$ajax.post(this.$Url+"/as/sAso", this.$qs.stringify({
						ACCESS_TOKEN:this.token
					})).then(data => {
						console.log(data)
						this.shu=data.data.data.data
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
				this.$ajax.post(this.$Url + "/as/gA", this.$qs.stringify({
						id: this.id
					})).then(ret => {
						this.xiangqings=true;
						this.listshow=false
						console.log(ret)
						this.xiangqingye = ret.data.data.list
					})
					.catch(function(error) {
						console.log(error);
					});
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
			flushCom: function() {
				this.$router.go(0);
			},
			zhan() {
				window.location.href = encodeURI("http://39.105.31.48:8080/ud/index.html?id=" + this.cont)
			},
		},
	}
</script>

<style scoped>
	@import "../assets/css/buyinformation.css";
</style>