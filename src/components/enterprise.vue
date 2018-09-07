<template>
	<div class="enterprise">
		<div class="header">
			<p class="xain"></p>
			<p class="xain1"></p>
			<div class="header-zi">
				<Header :t='4' v-on:dianji="dian"></Header>
				<Info v-show="infos" v-on:dianjis="xian"></Info>
				<!--<div class="h-top">
					<img src="../assets/img/dingwei.png" class="dw-ioin" />
					<p class="city">天津</p>
					<p class="login" v-show="us">
						<router-link to="./Login" @click.native="flushCom">登陆 / </router-link>
					</p>

					<p class="zhuce" v-show="us">
						<router-link to="./Register" @click.native="flushCom"> 注册</router-link>
					</p>
					<p class="login1" v-show="dianhua">{{iphone}}</p>
					<button class="tuichu" v-show="dianhua" @click="tui">退出</button>
					<!--<img src="" class="xinjian" />
				<p class="zhuce">消息 <span>1</span></p>-->
					<!--ul class="nav">-->
						<!--<li>我的浏览&nbsp;&nbsp;|</li>
					<li>我的收藏&nbsp;&nbsp;|</li>-->
						<!--<li class="shoujiban" style="border:none;padding-right:0;">手机版</li>
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
							<li>求购信息</li>
						</router-link>
						<router-link to="./Enterprise" @click.native="flushCom">
							<li class="shou">商务合作</li>
						</router-link>
					</ul>
					<button class="kaitong" @click="kaitong">开通展位</button>
				</div>-->
			</div>

		</div>
		<div class="search" style="backgroud:#e7e7e7">
			<div class="searz">
				<!-- <input type="text" placeholder="请输入搜索内容" class="find" />
				<p class="quanzhan">搜全站</p>
				<p class="souzhanwei">搜本展位</p> -->
			</div>
		</div>
		<!--<div class="shangjianame">
			<img src="../assets/img/logo.png" class="shangbiao" />
			<p class="ming">大连依利特分析仪器有限公司</p>
		</div>-->
		<div class="content">
			<div class="conts" v-for="i in ente">
				<div class="shangjianame">
					<img :src="i.logo" class="shangbiao" />
					<p class="ming">{{i.firmName}}</p>
				</div>
				<div class="con-left">
					<div class="copyjieshao">
						<p class="copyname">{{i.firmName}}</p>
						<div class="bianhao">展位编号：{{i.license}}
							<!-- <span>证</span> -->
							<img src="../assets/img/iconrz.png" alt="" srcset="" class="rz">
						</div>
						<div class="zhuying">
							<div class="zy">主营产品：</div>
							<div class="jt">{{i.product}}</div>
						</div>
						<div class="hangye">
							<div class="zy">关注行业：</div>
							<div class="jt">{{i.trades}}</div>
						</div>
						<div class="moshi">
							<div class="zy">经营模式：</div>
							<div class="jt">生产商</div>
						</div>
						<div class="diqus">
							<div class="zy">所在地区：</div>
							<div class="jt">{{i.site}}</div>
						</div>
						<div class="lianxifangshi" v-show="lianxi" @click="huoqu">联系方式</div>
						<div class="fangshi" v-show="fangshi">
							<p>电话：{{i.linkPhone}}</p>
							<p>QQ：{{i.qq}}</p>
							<p>微信：{{i.wechat}}</p>
						</div>
					</div>
					<div class="chanpinfenlei">
						<div class="cpfl">产品分类</div>
						<ul>
							<li v-for="c in tree">{{c.a}}</li>
						</ul>
					</div>
				</div>
				<div class="con-right">
					<div class="qiyejianjie">
						<div class="qyjj">公司简介
							<!--<span class="more">查看更多</span>-->
						</div>
						<p class="jieshao" v-html="i.introduce"></p>
					</div>
					<div class="tuijianxhanpin">
						<div class="tjcp">推荐产品
							<!--<span class="more">查看更多</span>-->
						</div>
						<ul class="shangpinshow">
							<li v-for="item in ductlist" @click="chaninfo(item.id)">
								<img :src="item.imgUrl" class="shangpin" />
								<div class="jieshaos">
									<p class="chanpinming">{{item.pname}}</p>
									<p class="diqu">
										<span class="diming">天津</span>
										<span class="lilan">{{item.clickNo}}人看过</span>
									</p>
								</div>
							</li>
							<!--<li>
								<img src="../assets/img/img-zhanwei.png" class="shangpin" />
								<div class="jieshaos">
									<p class="chanpinming">崂应3026型 红外烟气综合分析 仪 智能</p>
									<p class="diqu">
										<span class="diming">天津</span>
										<span class="lilan">522人看过</span>
									</p>
								</div>
							</li>
							<li>
								<img src="../assets/img/img-zhanwei.png" class="shangpin" />
								<div class="jieshaos">
									<p class="chanpinming">崂应3026型 红外烟气综合分析 仪 智能</p>
									<p class="diqu">
										<span class="diming">天津</span>
										<span class="lilan">522人看过</span>
									</p>
								</div>
							</li>-->
						</ul>
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
		<!--<div class="fixed">
			<div class="fixed_right">
				<img src="../assets/img/icon_Collection.png" alt="">
			</div>
			<div class="fixed_right">
				<img src="../assets/img/icon_kefu.png" alt="">
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
				ente: [],
				ductlist: "",
				tree: "",
				lianxi: true,
				fangshi: false,
				firId: this.$route.params.firid,
				iphone: localStorage["username"],
				us: true,
				dianhua: false,
				userId: localStorage["Id"],
				xianginfo:'',
				status:'',
				infos:false,
			};
		},
		mounted: function() {
			if(this.iphone == "" || this.iphone == undefined) {
				this.us = true;
				this.dianhua = false;
			} else {
				this.us = false;
				this.dianhua = true;
			}
			//			this.fined();
			console.log(this.firId);
			if(this.firId == "" || this.firId == null || this.firId == undefined) {
				this.firId = "tianma";
				this.fined();
			} else {
				this.fined();
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
			chaninfo(id) {
				console.log(id);
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
			//	shop(tid){
			//		this.ductlist=''
			//		this.$ajax
			//      .post(
			//        this.$Url + "/fi/getFirmPByPT",
			//        this.$qs.stringify({
			//          id: this.firId,
			//          typeId:tid
			//        })
			//      )
			//      .then(data => {
			//        console.log(data);
			//        this.ductlist = data.data.data.productList;
			//      })
			//      .catch(function(error) {
			//        console.log(error);
			//      });
			//	},
			fined() {
				this.$ajax
					.post(
						this.$Url + "/fi/getFirm",
						this.$qs.stringify({
							id: this.firId
						})
					)
					.then(data => {
						console.log(data);
						this.ente.push(data.data.data.info);
						console.log(this.ente[0].id);
						this.firId = this.ente[0].id
						this.ductlist = data.data.data.productList;
						this.tree = data.data.data.treeList;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			huoqu() {
				this.lianxi = false;
				this.fangshi = true;
			},
			flushCom: function() {
				this.$router.go(0);
			},
			zhan() {
				window.location.href = encodeURI(
					"http://39.105.31.48:8080/ud/index.html?id=" + this.cont
				);
			},
			tui() {
				localStorage.removeItem("ACCESS_TOKEN");
				localStorage.removeItem("username");
				localStorage.removeItem("Id");
				localStorage.removeItem("postId");
				localStorage.removeItem("Data");
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
	@import "../assets/css/enterprise.css";
</style>