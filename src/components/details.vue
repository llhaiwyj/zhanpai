<template>
	<div class="details">
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
					<button class="tuichu" v-show="dianhua" @click="tui">退出</button>-->
				<!--<img src="" class="xinjian" />
				    <p class="zhuce">消息 <span>1</span></p>-->
				<!--<ul class="nav">
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
							<li class="shou">产品中心</li>
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
			<div class="conts">
				<div class="tag">{{qinginfo.one}}>{{qinginfo.two}}>{{qinginfo.three}}>{{qinginfo.four}}</div>
				<div class="cont">
					<div class="cont-left">
						<div class="chanpintou">
							<img :src="qinginfo.imgUrl" class="chanpin" v-show="tuyin" />
							<img :src="Url" class="chanpin" v-show="tuxian" />
							<div class="wenzijieshao">
								<p class="fen">分享<img src='../assets/img/icon-fengxiang.png' class="fenxiang" /></p>
								<p class="chanpinming">{{qinginfo.pname}}</p>
								<p class="xiaochanpinming" @click="copyinfo(qinginfo.firmId)">{{qinginfo.firmName}}</p>
								<p class="sa">
									<span class="diqu">地区：{{qinginfo.firmAddress}}</span>
									<span class="changshang" v-show="sheng">厂商类型：生产商</span>
									<span class="changshang" v-show="dai">厂商类型：代理商</span>
									<!--<span class="changshang">厂商类型：{{qinginfo.firmType}}</span>-->
								</p>
								<p class="ba">
									<span class="diqu">品牌：{{qinginfo.brandName}}</span>
									<span class="changshang">型号：{{qinginfo.version}}</span>
								</p>
								<div class="ca">
									<p class="lainxifangshi" @click="lain">联系方式</p>
									<p class="phone" v-show="lainxi">
										<span>电话：17610038211</span>
										<span>QQ:1224948850</span>
										<span>微信:17610038211</span>
									</p>
								</div>
								<!--<p class="dc">应用领域：{{qinginfo.field}}</p>-->
							</div>
							<div class="suotu">
								<span v-for="(i,index) in imgList"><img :src="i.url" class="suot" :class="{'suots':index===b}" @click="xiaotu(i.url,index)" /></span>
								<!--<img :src="qinginfo.imgUrl" class="suot" />
							<img :src="qinginfo.imgUrl" class="suot" />-->
							</div>
						</div>
						<div class="chanpinjieshao">
							<p class="cpjs">产品介绍</p>
							<p class="xian"></p>
							<p class="cahnpinjjie" v-html="qinginfo.introduce"></p>
						</div>
						<!--<div class="chanpintedian">
						<p class="cpjs">产品特点</p>
						<p class="xian"></p>
						<p class="cahnpintet">该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪</p>
					</div>-->
						<div class="chanpincanshu">
							<p class="cpjs">产品参数</p>
							<p class="xian"></p>

							<!--<el-upload class="avatar-uploader" style="display:none" :action="serverUrl" :show-file-list="false" :on-success="uploadSuccess" :on-error="uploadError" :before-upload="beforeUpload">
						</el-upload>
						<quill-editor v-model="qinginfo.detailed" :content="qinginfo.introduce" ref="myQuillEditor" :options="editorOption" @change="onEditorChange($event)" @ready="onEditorReady($event)">
						</quill-editor>-->
							<div class="wenben" v-html="qinginfo.detailed"></div>
						</div>
						<div class="chanpinpeizhi">
							<p class="cpjs">产品配置</p>
							<p class="xian"></p>
							<div class="wenben1">{{qinginfo.configuration}}</div>
						</div>
					</div>
					<div class="cont-right">
						<p class="tongleituijian">同类推荐</p>
						<div class="imgming" v-for="item in tonglei" @click="tuijianxiang(item.id)">
							<img :src="item.url" class="imgxian" />
							<p class="imga">
								<span>{{item.pname}}</span>
							</p>
						</div>
						<!--<div class="imgming">
						<img src="../assets/img/img-zhanwei.png" class="imgxian"/>
						<p class="imga"><span>崂应3026型 红外烟气综合分析仪 智能</span></p>
					</div>
					<div class="imgming">
						<img src="../assets/img/img-zhanwei.png" class="imgxian"/>
						<p class="imga"><span>崂应3026型 红外烟气综合分析仪 智能</span></p>
					</div>-->
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
		<div class="fixed">
			<div class="fixed_right" @click="shoucangs">
				<!--:class="{'fixed_right1':0===a}"-->
				<img src="../assets/img/icon_Collection.png" alt="" v-show="weishoucang">
				<img src="../assets/img/shou.png" v-show="yishoucang" />
			</div>
			<div class="fixed_right">
				<img src="../assets/img/icon_kefu.png" alt="">
			</div>
		</div>
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
		inject: ['reload'],
		data() {
			return {
				iphone: localStorage["username"],
				qinginfo: this.$route.params.xianginfos,
				tonglei: "",
				sheng: false,
				dai: false,
				lainxi: false,
				imgList: this.$route.params.imglist,
				tuyin: true,
				tuxian: false,
				Url: "",
				b: "",
				token: localStorage["ACCESS_TOKEN"],
				uid: localStorage["Id"],
				collStatus: this.$route.params.statudes,
				status: "",
				a: "",
				us: true,
				dianhua: false,
				weishoucang: true,
				yishoucang: false,
				infos: false,
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
			this.fined();
			console.log(this.qinginfo);
			if(this.qinginfo.firmType == 0) {
				this.sheng = true;
			} else {
				this.dai = true;
			}
			console.log(this.collStatus);
			if(this.collStatus == 1) {
				//				alert(1)
				this.yishoucang = true
				this.weishoucang = false
			}
			if(this.qinginfo == '' || this.qinginfo == null || this.qinginfo == undefined) {
				this.$router.push({
					name: "Product"
				});
			}
		},
		methods: {
			xian(b) {
				this.reload()
				//				this.$router.push({
				//					name: "News",
				//				});
				//				this.$router.go(0);

				this.infos = b

			},
			dian(a) {
				this.infos = false

				this.infos = a
			},
			fined() {
				this.$ajax
					.post(this.$Url + "/fp/getPSame", this.$qs.stringify({}))
					.then(data => {
						console.log(data);
						this.tonglei = data.data.data.list;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			tuijianxiang(id) {
				this.qinginfo = "";
				this.$ajax
					.post(
						this.$Url + "/fp/getP",
						this.$qs.stringify({
							id: id
						})
					)
					.then(data => {
						console.log(data);
						this.qinginfo = data.data.data.info;
						if(this.qinginfo.firmType == 0) {
							this.sheng = true;
						} else {
							this.dai = true;
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			flushCom: function() {
				this.$router.go(0);
			},
			lain() {
				this.lainxi = true;
			},
			//			zhan() {
			//				window.open(encodeURI("http://39.105.31.48:8080/ud/index.html?keyword="), '_blank');
			//			},
			xiaotu(url, inde) {
				this.b = inde;
				this.tuyin = false;
				this.tuxian = true;
				this.Url = url;
				console.log(this.Url);
			},
			//收藏产品
			shoucangs() {
				if(
					this.uid == "" ||
					this.uid == undefined ||
					this.token == "" ||
					this.token == undefined
				) {
					this.$message.error("请先登陆然后在收藏");
				}
				this.$ajax
					.post(
						this.$Url + "/fp/CPStatus",
						this.$qs.stringify({
							userId: this.uid,
							productId: this.qinginfo.id,
							status: this.collStatus
						})
					)
					.then(data => {
						console.log(data);
						this.collStatus = data.data.data.status;
						if(this.collStatus == 1) {
							this.yishoucang = true
							this.weishoucang = false
							this.$message.success("收藏成功！")
							//							this.a = 1;
						} else {
							//							alert(2)
							this.yishoucang = false
							this.weishoucang = true
							this.$message.error("已取消收藏")
							//							this.a = 0;
						}
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
				this.iphone = '';
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
			},
			copyinfo(firId) {
				console.log(firId);
				if(firId == null || firId == "" || firId == undefined) {
					firId = 1;
				}
				this.$router.push({
					name: "Enterprise",
					params: {
						firid: firId
					}
				});
			},
		}
	};
</script>

<style scoped>
	@import "../assets/css/details.css";
</style>