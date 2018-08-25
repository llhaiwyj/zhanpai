<template>
	<div class="product">
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
			<ul class="leibie">
				<li>实验室仪器</li>
				<li>实验室仪器</li>
				<li>实验室仪器</li>
				<li>实验室仪器</li>
			</ul>
			<div class="pro">
				<p class="p-center">产品中心</p>
				<p class="dingwei">海量精密仪器，满足各种工业需求。精确搜索，定位准确</p>
			</div>
		</div>
		<div class="search">
			    <input type="text" placeholder="请输入搜索内容" class="find" v-model="gaunjain"/>
				<p @click="finedss"><img src="../assets/img/icon_search.png" /></p>
		</div>
		<div class="content">
			<ul class="chanpin">
				<li v-for="item in shuju" @click="chaninfo(item.id)">
					<img :src="item.imgUrl" class="shangpin" />
					<div class="jieshao">
						<p class="diqu">
							<span class="diming">{{item.firmAddress}}</span>
							<span class="lilan">522人看过</span>
						</p>
						<p class="chanpinming">{{item.pname}}</p>
						<p class="copyname">
							<img src="" />{{item.firmName}}
						</p>
					</div>
				</li>
				<!--<li>
					<img src="../assets/img/img-zhanwei.png" class="shangpin" />
					<div class="jieshao">
						<p class="diqu">
							<span class="diming">天津</span>
							<span class="lilan">522人看过</span>
						</p>
						<p class="chanpinming">崂应3026型 红外烟气综合分析 仪 智能</p>
						<p class="copyname">
							<img src="" />崂应智能技术有限公司
						</p>
					</div>
				</li>-->
			</ul>
		</div>
		<div class="block">
			<el-row>
				<el-col>
					<div class="pages">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="total, sizes, prev, pager, next, jumper" :total="total">
						</el-pagination>
					</div>
				</el-col>
			</el-row>
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
	export default {
		data() {
			return {
				currentPage: 1,
				total: '',
				length: 10,
				shuju: this.$route.params.shop,
				xianginfo: '',
				types:0,
				gaunjain:'',
				iphone:localStorage["username"],
				dianhua:false,
				us:true,
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
		},
//		watch: {
//			'$route' (to, from) {
//				this.$router.go(0);
//			}
//		},
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
				this.$ajax.post(this.$Url + "/fp/selPWeb", this.$qs.stringify({
						pageSize: this.length,
						pageNum: this.currentPage,
						type:this.types
					})).then(data => {
						console.log(data)
						this.shuju = data.data.data.list.list
						this.total = data.data.data.list.total
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			chaninfo(id) {
				console.log(id)
				this.$ajax.post(this.$Url + "/fp/getP", this.$qs.stringify({
						id: id
					})).then(data => {
						console.log(data)
						this.xianginfo = data.data.data.info
						this.$router.push({
							name: 'Details',
							params: {
								xianginfos: this.xianginfo
							}
						});
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			finedss(){
				this.shuju='';
				this.$ajax.post(this.$Url + "/fp/selPWeb", this.$qs.stringify({
						pageSize: this.length,
						pageNum: this.currentPage,
						str:this.guanjian,
					})).then(data => {
						console.log(data)
						this.shuju = data.data.data.list.list
						this.total=data.data.data.list.total
						if(data.data.msg=='success'){
							this.$router.push({
								name: 'Productserch',
								params: {
									shujus: this.shuju,
									totals:this.total
								}
						    });
						}
						
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			flushCom: function() {
				this.$router.go(0);
			},
			zhan() {
				window.open(encodeURI("http://39.105.31.48:8080/ud/index.html?keyword="), '_blank');
			},

		},
	}
</script>

<style scoped>
	@import "../assets/css/product.css";
</style>