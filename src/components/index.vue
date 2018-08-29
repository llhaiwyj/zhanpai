<template>
	<div class="index">
		<video width="100%" height="950" src="https://jkytest.oss-cn-beijing.aliyuncs.com/file/1%E5%88%86%E9%92%9F%E5%B9%BF%E5%91%8A.mp4" class="shipin" autoplay="autoplay" loop="loop"></video>
		<div class="header">
			<p class="xain"></p>
			<p class="xain1"></p>
			<div class="header-zi">
				<div class="h-top">
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
						<!--	<li>我的浏览&nbsp;&nbsp;|</li>-->
						<li>我的收藏&nbsp;&nbsp;|</li>
						<li>企业后台&nbsp;&nbsp;|</li>
						<!--	<router-link to="./Ceshi" @click.native="flushCom">-->
						<li class="shoujiban">手机版 </li>
						<!--</router-link>-->
					</ul>
				</div>
				<div class="daohang">
					<img src="../assets/img/logo.png" class="logo" />
					<ul class="dh">
						<router-link to="./">
							<li class="shou">首页</li>
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
		</div>
		<div class="contner">
			<div class="con1">
				<div class="content">
					<ul class="fenlei">
						<li class="tou">商品中心</li>
						<!--<li v-for="(l,index) in leibie" @click="yilei(index)"><img src=""/>{{l.typeName}}</li>-->
						<li class="fl" @click.stop="yilei(0)" :class="{'fl1':0===b}">
							<sapn class="shiyanshi" :class="{'shiyanshis':0===b}"></sapn>实验室仪器</li>
						<li class="fl" @click.stop="yilei(1)" :class="{'fl1':1===b}">
							<sapn class="fuwu" :class="{'fuwus':1===b}"></sapn>实验室服务</li>
						<li class="fl" @click.stop="yilei(2)" :class="{'fl1':2===b}">
							<sapn class="jiaju" :class="{'jiajus':2===b}"></sapn>实验室家具</li>
						<li class="fl" @click.stop="yilei(3)" :class="{'fl1':3===b}">
							<sapn class="haocai" :class="{'haocais':3===b}"></sapn>实验室试剂与耗材</li>
					</ul>
					<ul class="erjilie" id="erjilie" v-show="erji">
						<li class="lc" v-for="(e,index) in erjilei" @click.stop="sanjilei(index,e.id)" :class="{'lys':index===c}">{{e.typeName}}</li>
					</ul>
					<ul class="sanjilie" id="sanjilie" v-show="erji">
						<li class="lc" v-for="(e,index) in sajnjilei" @click.stop="sijilei(index,e.id)" :class="{'lys1':index===d}">{{e.typeName}}</li>
					</ul>
					<ul class="sijilie" id="sijilie" v-show="erji">
						<li class="lc" v-for="(e,index) in sijnjilei" @click.stop="wujilei(e.id)">{{e.typeName}}</li>
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
			</div>
			<div class="con2">
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
			</div>
			<div class="con3">
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
			</div>
			<div class="con4">
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
			</div>
		</div>
		<div class="footer">
			<div class="foot">
				<div class="wei">
					<ul class="weinav">
						<li>|&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;|</li>
						<li>3D展馆&nbsp;&nbsp;|</li>
						<li>产品中心&nbsp;&nbsp;|</li>
						<li>求购信息&nbsp;&nbsp;|</li>
						<li>商务合作&nbsp;&nbsp;|</li>
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
				sajnjilei: '',
				sijnjilei: '',
				erji: false,
				shop: '',
				xuan: '3D',
				iphone: localStorage["username"],
				b: '',
				c: '',
				d: '',
				dianhua: false,
				us: true,
				zuinewinfo: [],
				options: [{
					value: '0',
					label: '3D'
				}, {
					value: '1',
					label: '极简'
				}],
				one: '',
				two: '',
				three: '',
				four: '',
				//				zhis: this.unitys.zhi,
			};
		},
		created() {
			document.onclick = function() {
				document.getElementById('erjilie').style.display = "none";
				document.getElementById('sanjilie').style.display = "none";
				document.getElementById('sijilie').style.display = "none";
			}
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
			this.directives()
		},
		methods: {
			handleClose(e) {
				this.erji = false;
			},
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
					window.open(encodeURI("http://39.105.31.48:8080/ud/index.html?keyword=" + this.cont), '_blank');
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
					name: 'Newsinformation',
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
				this.b = '';
				this.d = ''
				this.c = '';
				this.one = index
				this.b = index;
				this.erjilei = '';
				if(this.one != 0) {
					document.getElementById('sanjilie').style.display = "none";
					document.getElementById('sijilie').style.display = "none";
				}
				if(this.one == 0 && document.getElementById('sanjilie').style.display == "block") {
					document.getElementById('sanjilie').style.display = "none";
				}
				//				if(document.getElementById('erjilie').style.display=="none"||document.getElementById('erjilie').style.display==''){
				document.getElementById('erjilie').style.display = "block";
				//				}
				//					this.erji = true
				this.erjilei = this.leibie[index].list
				console.log(this.erjilei)
				//				var num = index + 1
				//				for(var i in this.leibie) {
				//					if(num == this.leibie[i].id) {
				//						this.erjilei = this.leibie[i].list
				//					}
				//				}
			},
			sanjilei(index, id) {
				this.c = '';
				this.d = ''
				this.two = id
				this.c = index;
				if(this.two != 0) {
					document.getElementById('sijilie').style.display = "none";
				}
				console.log(this.c)
				this.sajnjilei = '',
					document.getElementById('erjilie').style.display = "block";
				document.getElementById('sanjilie').style.display = "block";
				//				document.getElementById('sanjilie').style.backgroun="#ededed"
				this.sajnjilei = this.erjilei[index].list
				console.log(this.sajnjilei)
			},
			sijilei(index, id) {
				this.d = ''
				this.three = id
				this.d = index;
				console.log(this.d)
				document.getElementById('erjilie').style.display = "block";
				document.getElementById('sanjilie').style.display = "block";
				document.getElementById('sijilie').style.display = "block";
				this.sijnjilei = '',
					this.sijnjilei = this.sajnjilei[index].list
				console.log(this.sijnjilei)
			},
			wujilei(id) {
				this.b=''
				this.four = id
				console.log(this.one)
				this.$router.push({
					name: 'Productserch',
					params: {
						one: this.one,
						two: this.two,
						three: this.three,
						four: this.four,
					}
				});
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
			tui() {
				localStorage.removeItem('ACCESS_TOKEN')
				this.$router.push({
					name: 'Login',
				});
			}
			//			denglu(){
			//				window.open("http://39.105.24.238/busys.html?, '_blank'");
			//			}
		},
	}
</script>

<style scoped>
	@import "../assets/css/index.css";
</style>