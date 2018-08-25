<template>
	<div class="index">
		<video width="100%" height="950" src="https://jkytest.oss-cn-beijing.aliyuncs.com/file/1%E5%88%86%E9%92%9F%E5%B9%BF%E5%91%8A.mp4" class="shipin" autoplay="autoplay" loop="loop"></video>
		<div class="kong"></div>
		<div class="header">
			<div class="h-top">
				<img src="../assets/img/icon－ding.png" class="dw-ioin" />
				<p class="city">天津</p>
				<p class="login" v-show="us">
					<router-link to="./Login" @click.native="flushCom">登陆 / </router-link>
				</p>

				<p class="zhuce" v-show="us">
					<router-link to="./Register" @click.native="flushCom"> 注册</router-link>
				</p>
				<p class="login" v-show="dianhua">{{iphone}}</p>
				<ul class="nav">
					<li>我的浏览&nbsp;&nbsp;|</li>
					<li @click="zhan">我的收藏&nbsp;&nbsp;|</li>
					<li>个人中心&nbsp;&nbsp;|</li>
					<router-link to="./Indexs" @click.native="flushCom">
						<li class="shoujiban">手机版 </li>
					</router-link>
				</ul>
			</div>
			<div class="daohang">
				<img src="../assets/img/logo.png" class="logo" />
				<ul class="dh">
					<router-link to="./">
						<li>首页</li>
					</router-link>
					<router-link to="./News">
						<li>新闻资讯</li>
					</router-link>
					<router-link to="./Product">
						<li>产品中心</li>
					</router-link>
					<router-link to="./Buyinformation">
						<li>求购信息</li>
					</router-link>
					<router-link to="./Enterprise">
						<li>商务合作</li>
					</router-link>
				</ul>
				<button class="kaitong">开通展位</button>
			</div>
			<img src="../assets/img/zahn.png" class="biglodo" />
			<div class="sousuo">
				<input type="text" class="sou" placeholder="输入文字" v-model="cont" />
				<select v-model="xuan" v-on:change="areaprov($event)">
					<option selected="selected">3D</option>
					<option>极简</option>
				</select>
				<p class="el-icon-arrow-down xiajian"></p>
				<!--<el-select class="sel" v-model="xuan" placeholder="请选择" v-on:change="areaprov($event)">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>-->
				<!--<select v-model="xuan">
					<option selected="selected">3D</option>
					<option>极简</option>
				</select>-->
				<img src="../assets/img/icon_search.png" class="suo" @click="severs" />
			</div>
			<div class="join">
				<img src="../assets/img/iocn_zhanguan.png" class="dain" />
				<p @click="zhan">进入展馆</p>
			</div>
		</div>
		<div class="content">
			<ul class="fenlei">
				<li class="tou">商品中心</li>
				<!--<li v-for="(l,index) in leibie" @click="yilei(index)"><img src=""/>{{l.typeName}}</li>-->
				<li @click="yilei(0)">
					<sapn class="shiyanshi" :class="{'shiyanshis':0===b}"></sapn>实验室仪器</li>
				<li @click="yilei(1)">
					<sapn class="fuwu" :class="{'fuwus':1===b}"></sapn>实验室服务</li>
				<li @click="yilei(2)">
					<sapn class="jiaju" :class="{'jiajus':2===b}"></sapn>实验室家具</li>
				<li @click="yilei(3)">
					<sapn class="haocai" :class="{'haocais':3===b}"></sapn>实验室试剂与耗材</li>
			</ul>
			<ul class="erjilie" v-show="erji">
				<li v-for="e in erjilei" erjilei>{{e.typeName}}</li>
			</ul>
			<div class="tu">
				<el-carousel indicator-position="outside">
					<el-carousel-item v-for="item in imglist" :key="item">
						<img :src="item.url" />
					</el-carousel-item>
				</el-carousel>
			</div>
			<!--<img src="../assets/img/img-banner.png" class="tu"/>-->
		</div>
		<div class="zuixinruzhu">
			<div class="zuixin">
				<p class="zui">最新入驻</p>
				<p class="find" @click="more">查看更多</p>
			</div>
			<ul class="shangjia">
				<li v-for="i in zhanwei" @click="zhanguan(i.id)">
					<p>
						<img :src="i.standCover" class="shangtu" />
					</p>
					<span>{{i.standName}}</span>
				</li>
			</ul>
		</div>
		<div class="new">
			<div class="zuixin">
				<p class="zui">新闻动态</p>
				<p class="find" @click="newmore(undefined)">查看更多</p>
			</div>
			<ul class="dongtai">
				<li v-for="s in newslist" @click="xinwen(s.id)">
					<img :src="s.coverImg" class="newtu" />
					<p>{{s.title}}</p>
				</li>
				<!--<li>
					<img src="../../build/logo.png" class="newtu" />
					<p><span>【药品】</span>天马仪器新药品上</p>
				</li>-->
			</ul>
			<div class="shishi">
				<p v-for="n in newslists" @click="xinwen(n.id)">{{n.title}}</p>
			</div>
		</div>
		<div class="hezuo">
			<div class="zuixin">
				<p class="zui">合作伙伴</p>
				<p class="find">查看更多</p>
			</div>
			<ul class="huoban">
				<li>
					<img src="../assets/img/tu1.png" />
				</li>
				<li>
					<img src="../assets/img/tu2.png" />
				</li>
				<li>
					<img src="../assets/img/tu3.png" />
				</li>
				<li>
					<img src="../assets/img/tu4.png" />
				</li>
				<li>
					<img src="../assets/img/tu5.png" />
				</li>
				<li>
					<img src="../assets/img/tu6.png" />
				</li>
				<li>
					<img src="../assets/img/tu7.png" />
				</li>
				<li>
					<img src="../assets/img/tu8.png" />
				</li>
				<li>
					<img src="../assets/img/tu9.png" />
				</li>
				<li>
					<img src="../assets/img/tu10.png" />
				</li>
				<li>
					<img src="../assets/img/tu11.png" />
				</li>
				<li>
					<img src="../assets/img/tu12.png" />
				</li>
			</ul>
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
				imglist: '',
				zhanwei: '',
				newslist: '',
				cont: '',
				newslists: '',
				leibie: '',
				erjilei: '',
				erji: false,
				shop: '',
				xuan: '3D',
				iphone: localStorage["username"],
				b: '',
				dianhua: false,
				us: true,
				zuinewinfo: [],
				options: [{
					value: '0',
					label: '3D'
				}, {
					value: '1',
					label: '极简'
				}]
				//				zhis: this.unitys.zhi,
			};
		},
		mounted: function() {
			console.log(this.iphone)
			if(this.iphone == '' || this.iphone == undefined) {
				this.us = true;
				this.dianhua = false
			} else {
				this.us = false;
				this.dianhua = true
			}
			this.fined();
		},
		methods: {
			fined() {
				//获取轮播图片
				this.$ajax.post(this.$Url + "/ap/sAPli", this.$qs.stringify({
						i: 0
					})).then(datas => {
						this.imglist = datas.data.data.list
					})
					.catch(function(error) {
						console.log(error);
					});
				//获取入驻展会
				this.$ajax.post(this.$Url + "/exStand/query/getNewSettled", this.$qs.stringify({
						num: 5
					})).then(ret => {
						this.zhanwei = ret.data.data.standList
					})
					.catch(function(error) {
						console.log(error);
					});
				//获取新闻信息	
				this.$ajax.post(this.$Url + "/ne/sNnew", this.$qs.stringify()).then(suc => {
						//					    console.log(data)
						this.newslist = suc.data.data.list
						this.newslists = suc.data.data.list2
					})
					.catch(function(error) {
						console.log(error);
					})
				//获取分类列表	
				this.$ajax.post(this.$Url + "/pt/sTs", this.$qs.stringify()).then(datat => {
						//						console.log(data)
						this.leibie = datat.data.data.info.list

					})
					.catch(function(error) {
						console.log(error);
					});
			},
			severs() {
				console.log(this.xuan)
				if(this.xuan == '3D' && this.cont != '') {
					window.open( encodeURI("http://39.105.31.48:8080/ud/index.html?keyword=" + this.cont), '_blank');
//					window.location.href = encodeURI("http://39.105.31.48:8080/ud/index.html?keyword=" + this.cont)
				} else if(this.xuan == '极简' && this.cont != '') {
					this.$ajax.post(this.$Url + "/fp/selPWeb", this.$qs.stringify({
							str: this.cont
						})).then(data => {
							console.log(data)
							this.shop = data.data.data.list
							console.log(this.shop)
							this.$router.push({
								name: 'Product',
								params: {
									shop: this.shop
								}
							});
						})
						.catch(function(error) {
							console.log(error);
						});
				}

			},
			xinwen(id) {
				console.log(id)
				this.$router.push({
					name: 'News',
					params: {
						ids: id
					}
				});
				//				this.$ajax.post(this.$Url + "/ne/gN", this.$qs.stringify({
				//						id: id,
				//					})).then(data => {
				//						console.log(data)
				//						this.zuinewinfo.push(data.data.data.info)
				//						this.$router.push({
				//								name: 'News',
				//								params: {
				//									zuinewinfos: this.zuinewinfo
				//								}
				//							});
				//						
				//					})
				//					.catch(function(error) {
				//						console.log(error);
				//					});
			},
			yilei(index) {
				this.b = index;
				this.erji = true
				var num = index + 1
				for(var i in this.leibie) {
					if(num == this.leibie[i].id) {
						this.erjilei = this.leibie[i].list
					}
				}
			},
			zhan() {
				window.open(encodeURI("http://39.105.31.48:8080/ud/index.html?keyword="), '_blank');
			},
			more() {
			window.open(encodeURI("http://39.105.31.48:8080/ud/index.html?keyword="), '_blank');
			},
			zhanguan(id) {
				window.open(encodeURI("http://39.105.31.48:8080/ud/index.html?id=" + id), '_blank');
			},
			//			查看更多跳转新闻列表页
			newmore(id) {
				console.log(id)
				//				this.$router.replace({
				//					path:'./News',
				//					name: 'News',
				//				});
				this.$router.push({
					name: 'News',
					params: {
						ids: id
					}
				});
			},
			areaprov(even) {
				this.xuan = even.target.value
				console.log(this.xuan)
			},
			flushCom: function() {
				this.$router.go(0);
			},
//			denglu(){
//				window.open("http://39.105.24.238/busys.html?, '_blank'");
//			}
		},
	}
</script>

<style scoped>
	@import "../assets/css/index.css";
</style>