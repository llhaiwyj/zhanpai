<template>
	<div class="collection">
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
							<li class="shou">首页</li>
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
					<button class="kaitong" @click="kaitong">开通展位</button>
				</div>-->
			</div>
		</div>
		<div class="content">
			<div class="cont" v-show="zhanpin">
				<p class="shoucang">我的收藏</p>
				<div class="canglei">
					<button class="zahnpin shows" @click="zhanpins" :class="{'show':0===zhan}">收藏展品</button>
					<button class="zahnwei shows" @click="zhanweis" :class="{'show':1===zhan}">收藏展位</button>
				</div>
				<!--<div class="shoucangshu">
					<span>全部23</span>
					<span>全部全部全部全部23</span>
				</div>-->
				<p class="hengxin"></p>
				<div class="zhanpin">
					<div class="zp" v-for="i in list" @click="jinru(i.id)">
						<img :src="i.imgUrl" />
						<p>{{i.pname}}</p>
					</div>
				</div>
				<div class="block">
					<el-row>
						<el-col>
							<div class="pages">
								<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="prev, pager, next" background :total="total">
								</el-pagination>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
			<div class="cont" v-show="zhanwei">
				<p class="shoucang">我的收藏</p>
				<div class="canglei">
					<button class="zahnpin shows" @click="zhanpins" :class="{'show':0===zhan}">收藏展品</button>
					<button class="zahnwei shows" @click="zhanweis" :class="{'show':1===zhan}">收藏展位</button>
					<!--<input type="text" placeholder="输入关键词" />
					<img src="../assets/img/search.png" />-->
				</div>
				<div class="zhanwei">
					<div class="zws" v-for="i in lists">
						<div class="zw-info">
							<img :src="i.standCover" class="zw-tou" @click="usd(i.id)" />
							<div class="zw-we" @click="usd(i.id)">
								<p class="zw-na">{{i.standName}}</p>
								<p class="zw-bh">展馆编号: {{i.exNo}}</p>
								<p class="zw-kf">联系客服</p>
								<img src="../assets/img/icon－x.png" class="zw-xin" />
							</div>
							<p class="el-icon-delete laji" @click="remove(i.id)"></p>
						</div>
					</div>
				</div>
				<div class="block">
					<el-row>
						<el-col>
							<div class="pages">
								<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="prev, pager, next" background :total="total">
								</el-pagination>
							</div>
						</el-col>
					</el-row>
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
				currentPage: 1,
				total: "",
				length: 32,
				token: localStorage["ACCESS_TOKEN"],
				zhanpin: true,
				zhanwei: false,
				list: "",
				lists: "",
				userId: localStorage["Id"],
				iphone: localStorage["username"],
				xianginfo: "",
				status: "",
				dianhua: false,
				us: true,
				zhan:0,
				infos:false,
			};
		},
		mounted: function() {
//			if(this.zhan==''||this.zhan==null||this.zhan==undefined){
//				this.zhan=0
//			}
			this.fined();
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
			handleCurrentChange(page) {
				console.log(page);
				this.currentPage = page;
				if(this.zhanpin == true) {
					this.fined();
				} else {
					this.zhanweis();
				}
			}, //改变条数触发
			handleIndexChange(index) {
				console.log(index);
				this.length = index;
				if(this.zhanpin == true) {
					this.fined();
				} else {
					this.zhanweis();
				}
			},
			fined() {
				this.$ajax
					.post(
						this.$Url + "/fp/selCollP",
						this.$qs.stringify({
							pageSize: this.length,
							pageNum: this.currentPage
						})
					)
					.then(data => {
						console.log(data);
						this.list = data.data.data.list.list;
						this.total = data.data.data.list.total;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			zhanpins() {
				this.zhan=0
				this.zhanwei = false;
				this.zhanpin = true;
				this.fined()
			},
			zhanweis() {
				this.zhan=1
				this.zhanpin = false;
				this.zhanwei = true;
				this.$ajax
					.post(
						this.$Url + "/exStand/admin/getMyCollStands",
						this.$qs.stringify({ 
							pageSize: this.length,
							pageNum: this.currentPage
						})
					)
					.then(data => {
						console.log(data);
						this.lists = data.data.data.pageInfo.list;
						this.total = data.data.data.pageInfo.total;
						//						this.xianginfo = data.data.data.info;
						//						this.status = data.data.data.collStatus
						//						this.$router.push({
						//							name: "Details",
						//							params: {
						//								xianginfos: this.xianginfo,
						//								imglist: data.data.data.imgList,
						//								statudes: this.status
						//							}
						//						});
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			jinru(id) {
				this.$ajax
					.post(
						this.$Url + "/fp/getP",
						this.$qs.stringify({
							id: id,
							userId: this.userId
						})
					)
					.then(data => {
						console.log(data);
						this.xianginfo = data.data.data.info;
						this.status = data.data.data.collStatus;
						this.$router.push({
							name: "Details",
							params: {
								xianginfos: this.xianginfo,
								imglist: data.data.data.imgList,
								statudes: this.status
							}
						});
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			usd(id) {
				window.open(
					encodeURI("http://39.105.31.48:8080/ud/index.html?id=" + id),
					"_blank"
				);
			},
			remove(id) {
				this.$ajax
					.post(
						this.$Url + "/exStand/query/saveStand",
						this.$qs.stringify({
							standId: id,
							collStatus: 1,
							userId: this.userId
						})
					)
					.then(data => {
						console.log(data);
						this.zhanweis();
					})
					.catch(function(error) {
						console.log(error);
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
			kaitong() {
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
	@import "../assets/css/collection.css";
</style>