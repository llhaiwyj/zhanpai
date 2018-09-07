<template>
	<div class="index">
		<video id="shipin" @mouseover="moveOut" width="100%" height="950" src="https://jkytest.oss-cn-beijing.aliyuncs.com/file/1%E5%88%86%E9%92%9F%E5%B9%BF%E5%91%8A.mp4" class="shipin" autoplay="autoplay" loop="loop"></video>
		<div class="header" @mouseover="moveOut">
			<p class="xain"></p>
			<p class="xain1"></p>
			<div class="header-zi">
				<!--<Header></Header>-->
				<div class="h-top">
					<img src="http://39.107.254.193/ossfs/img/153441845731751364.jpg" class="erwei" id="erwei" />
					<img src="../assets/img/icon－ding.png" class="dw-ioin" />
					<p class="city">天津</p>
					<p class="login" v-show="us">
						<router-link to="./Login" @click.native="flushCom">登陆 / </router-link>
					</p>

					<p class="zhuce" v-show="us">
						<router-link to="./Register" @click.native="flushCom"> 注册</router-link>
					</p>
					<p class="login1" v-show="dianhua" @click="info">{{iphone}}</p>
					<button class="tuichu" v-show="dianhua" @click="tui">退出</button>
					<ul class="nav">
						<li class="shoujiban" style="border:none;padding-right:0;" @click.stop="erwe">手机版</li>
						<li @click="qiye">企业后台</li>
		 				<li @click="shoucang">我的收藏</li>
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
					<button class="kaitong" @click="kaitong">开通展位</button>
				</div>
				<img src="../assets/img/zahn.png" class="biglodo" />
				<div class="sousuo">
					<input type="text" class="sou" placeholder="输入文字" v-model="cont" @keyup.enter="severs"/>
					<el-select v-model="xuan" @change="areaprov">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<!--<select v-model="xuan" v-on:change="areaprov($event)">
						<option selected="selected">3D</option>
						<option>极简</option>
					</select>-->
					<!--<p class="el-icon-arrow-down xiajian"></p>-->
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
				<div class="join" @click="zhan">
					<img src="../assets/img/iocn_zhanguan.png" class="dain" />
					<p>进入展馆</p>
				</div>
				<div class="gereninfor" v-show="inforhide">
					<p class="el-icon-close guanbi" @click="guan"></p>
					<img :src="userinfo.viaUrl" class="i-tx" />
					<div class="i-info">
						<p class="i-gs">{{userinfo.nickname}}</p>
						<p class="i-zh">
							<span>账号：</span>{{userinfo.account}}
						</p>
						<p class="i-xb">
							<span>性别：</span>{{userinfo.sex}}
						</p>
						<p class="i-xb">
							<span>手机：</span>{{userinfo.iphone}}
						</p>
						<p class="i-xb">
							<span>微信：</span>{{userinfo.wechat}}
						</p>
						<p class="i-qq">
							<span>QQ：</span>{{userinfo.qq}}
						</p>
					</div>
					<div class="i-czuo">
						<p @click="xiumima">修改密码</p>
						<button @click="bianji">编辑</button>
					</div>
				</div>
				<div class="i-xiugai" v-show="inforxiugai">
					<div class="i-xg">
						<div class="i-sh">
							<img :src="userinfo.viaUrl" class="i-xiu-tou" />
							<el-upload class="upload-demo" :action="serverUrl" :on-success="uploadSuccess" :on-error="uploadError" :file-list="fileList2" :show-file-list="false">
								<button size="small" type="primary" class="i-shang">上传图片</button>
							</el-upload>
						</div>
						<div class="i-xiu-name">
							<p class="x-na">昵称：</p>
							<input type="text" class="x-n" v-model="userinfo.nickname" />
							<!--<p class="x-n" contenteditable="true" v-model="userinfo.nickname">{{userinfo.nickname}}</p>-->
						</div>
						<div class="i-xiu-xb">
							<p class="x-na">性别：</p>
							<p class="x-xing"><input type="radio" id="one" value="0" name="gender" v-model="sex">男<input type="radio" id="two" value="1" name="gender" v-model="sex">女</p>
						</div>
						<div class="i-xiu-xb">
							<p class="x-na">手机号：</p>

							<input type="text" class="x-xing" v-model="userinfo.iphone" />
							<!--<p class="x-xing" contenteditable="true" v-model="userinfo.iphone">{{userinfo.iphone}}<!--<span>修改</span>-->
							<!--</p>-->
						</div>
						<div class="i-xiu-xb">
							<p class="x-na">微信：</p>
							<input type="text" class="x-xing" v-model="userinfo.wechat" />
							<!--<p class="x-xing" contenteditable="true" v-model="userinfo.wechat">{{userinfo.wechat}}<!--<span>绑定</span>-->
							<!--</p>-->
						</div>
						<div class="i-xiu-xb">
							<p class="x-na">QQ：</p>
							<input type="text" class="x-xing" v-model="userinfo.qq" />
							<!--<p class="x-xing" contenteditable="true" v-model="userinfo.qq">{{userinfo.qq}}-->
							<!--<span>绑定</span>-->
							<!--</p>-->

						</div>
						<div class="i-xiu-an">
							<button @click="xiuwan">确定</button>
							<button @click="quxiao">取消</button>
						</div>
					</div>
				</div>
				<div class="x-mima" v-show="mima">
					<p class="x-m-m">修改密码</p>
					<div class="ymima">
						<p class="x-yuan">原密码：</p>
						<input type="password" class="x-y-nei" v-model="yuanpass" />
					</div>
					<div class="shemima">
						<p class="x-yuan">设置密码：</p>
						<input type="password" class="x-y-nei" v-model="shepass" />
					</div>
					<div class="shemima">
						<p class="x-yuan">确认密码：</p>
						<input type="password" class="x-y-nei" v-model="truepass" />
					</div>
					<div class="i-xiu-anniu">
						<button @click="queding">确定</button>
						<button @click="qx">取消</button>
					</div>
				</div>
			</div>
		</div>
		<div class="contner">
			<div class="con1">
				<div class="con1Wrap" @mouseover="moveOut">

				</div>
				<div class="content">
					<ul class="fenlei">
						<li class="tou">商品中心</li>
						<!--<li v-for="(l,index) in leibie" @click="yilei(index)"><img src=""/>{{l.typeName}}</li>-->
						<li class="fl" @mouseover="yilei(0,'实验室仪器')" :class="{'fl1':0===b}">
							<sapn class="shiyanshi" :class="{'shiyanshis':0===b}"></sapn>实验室仪器</li>
						<li class="fl" @mouseover="yilei(1,'实验室服务')" :class="{'fl1':1===b}">
							<sapn class="fuwu" :class="{'fuwus':1===b}"></sapn>实验室服务</li>
						<li class="fl" @mouseover="yilei(2,'家具及配件')" :class="{'fl1':2===b}">
							<sapn class="jiaju" :class="{'jiajus':2===b}"></sapn>家具及配件</li>
						<li class="fl" @mouseover="yilei(3,'常用耗材')" :class="{'fl1':3===b}">
							<sapn class="haocai" :class="{'haocais':3===b}"></sapn>常用耗材</li>
					</ul>
					<ul class="erjilie" id="erjilie" v-show="erji">
						<li class="lc" v-for="(e,index) in erjilei" @mouseover="sanjilei(index,e.id,e.typeName)" :class="{'lys':index===c}">{{e.typeName}}</li>
					</ul>
					<ul class="sanjilie" id="sanjilie" v-show="erji">
						<li class="lc" v-for="(e,index) in sajnjilei" @mouseover="sijilei(index,e.id,e.typeName)" :class="{'lys1':index===d}">{{e.typeName}}</li>
					</ul>
					<ul class="sijilie" id="sijilie" v-show="erji">
						<li class="lc" v-for="(e,index) in sijnjilei" @click.top="wujilei(e.id,e.typeName)">{{e.typeName}}</li>
					</ul>
					<div class="tu" @mouseover="moveOut">
						<el-carousel indicator-position="outside">
							<el-carousel-item v-for="item in imglist" :key="item">
								<img v-lazy="item.url" :key="item.url" />
							</el-carousel-item>
						</el-carousel>
					</div>
					<!--<img src="../assets/img/img-banner.png" class="tu"/>-->
				</div>
			</div>
			<div class="con2" @mouseover="moveOut">
				<div class="zuixinruzhu">
					<div class="zuixin">
						<p class="zui">最新入驻</p>
						<p class="find" @click="more">查看更多</p>
					</div>
					<ul class="shangjia">
						<li v-for="i in zhanwei" @click="zhanguan(i.id)">
							<p>
								<img v-lazy="i.standCover" class="shangtu" :key="i.standCover" />
							</p>
							<span>{{i.standName}}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="con3" @mouseover="moveOut">
				<div class="new">
					<div class="zuixin">
						<p class="zui">新闻动态</p>
						<p class="find" @click="newmore(undefined)">查看更多</p>
					</div>
					<ul class="dongtai">
						<li v-for="s in newslist" @click="xinwen(s.id)">
							<img v-lazy="s.coverImg" class="newtu" :key="s.coverImg" />
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
			<div class="con4" @mouseover="moveOut">
				<div class="hezuo">
					<div class="zuixin">
						<p class="zui">合作伙伴</p>
						<!--<p class="find">查看更多</p>-->
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
		<div class="footer" @mouseover="moveOut">
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
		</div>
	</div>
</template>
<script src="http://html5media.googlecode.com/svn/trunk/src/html5media.min.js"></script>
<script>
//	import Header from './header'
	export default {
//		components: {
//			Header,
//		},
		data() {
			return {
				imglist: "",
				zhanwei: "",
				newslist: "",
				cont: "",
				newslists: "",
				leibie: "",
				erjilei: "",
				sajnjilei: "",
				sijnjilei: "",
				erji: false,
				shop: "",
				xuan: "",
				iphone: localStorage["username"],
				postId: localStorage["postId"],
				b: "",
				c: "",
				d: "",
				dianhua: false,
				us: true,
				zuinewinfo: [],
				options: [{
						value: "0",
						label: "3D"
					},
					{
						value: "1",
						label: "极简"
					}
				],
				one: "",
				two: "",
				three: "",
				four: "",
				fouername: "",
				inforhide: false,
				inforxiugai: false,
				mima: false,
				//个人信息
				userinfo: '',
				nickname: '',
				sex: 0,
				iphones: '',
				wechat: '',
				qq: '',
				serverUrl: this.$Url + "/upload/singleUploadImg",
				fileList2: [],
				touimg: '',
				yuanpass: '',
				shepass: '',
				truepass: '',
				yiname:'',
				ername:'',
				sanname:'',
				siname:'',
				//				ma:false,
				//				zhis: this.unitys.zhi,
			};
		},
		created() {
			document.onmouseleave = function() {
				//    document.getElementById("erjilie").style.display = "none";
				//    document.getElementById("sanjilie").style.display = "none";
				//    document.getElementById("sijilie").style.display = "none";
				//				this.gereninfor=false
				//				document.getElementById("gereninfor").style.display = "none";

				document.getElementById("shipin").style.loop = "loop";
			};
			document.onclick = function() {
//				alert(1)
				//				this.ma=false
				document.getElementById("erwei").style.display = "none";
			}
			this.xuan = this.options[0].value;
		},

		mounted: function() {
			//			if(this.sex==''){
			//				this.sex=0
			//			}
			console.log(this.iphone);
			if(this.iphone == "" || this.iphone == undefined) {
				this.us = true;
				this.dianhua = false;
			} else {
				this.us = false;
				this.dianhua = true;
			}
			this.fined();
			//			this.directives();
		},
		methods: {
			guan() {
				this.inforhide = false
			},
			queding() {
				if(this.shepass == this.yuanpass) {
					this.$message.error("设置的密码与原密码一致，请重新填写")
				}else if(this.shepass != this.truepass) {
					this.$message.error("两次密码不一致，请核对")
				}else{
					this.xiuwan()
				}
				
			},
			uploadError(file, fileList) {
				console.log(file, fileList);
			},
			uploadSuccess(res, file) {
				console.log(res)
				console.log(file.response.data.imgUrl);
				this.userinfo.viaUrl = file.response.data.imgUrl
			},
			//			huosex(){
			//				console.log(this.sexs)
			//			},
			//			huosexs(){
			//				console.log(this.sex)
			//			},
			xiuwan() {
				console.log(this.userinfo.nickname)
				console.log(this.userinfo.iphone)
				this.$ajax
					.post(this.$Url + "/st/updStaff", this.$qs.stringify({
						nickname: this.userinfo.nickname,
						viaUrl: this.userinfo.viaUrl,
						iphone: this.userinfo.iphone,
						qq: this.userinfo.qq,
						wechat: this.userinfo.wechat,
						sex: this.sex,
						password: this.truepass,
					}))
					.then(datas => {
						console.log(datas)
						if(datas.data.code == '1') {
							this.$message.success(datas.data.msg)
							this.inforxiugai = false
							this.mima=false
							this.inforhide = true
							this.info()
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			quxiao() {
				this.inforxiugai = false
				this.inforhide = true
			},
			qx() {
				this.mima = false
				this.inforhide = true
			},
			moveOut() {
				document.getElementById("erjilie").style.display = "none";
				document.getElementById("sanjilie").style.display = "none";
				document.getElementById("sijilie").style.display = "none";
				document.getElementById("shipin").style.loop = "loop";
			},
			handleClose(e) {
				this.erji = false;
			},
			fined() {
				//获取轮播图片
				this.$ajax
					.post(
						this.$Url + "/ap/sAPli",
						this.$qs.stringify({
							i: 0
						})
					)
					.then(datas => {
						this.imglist = datas.data.data.list;
					})
					.catch(function(error) {
						console.log(error);
					});
				//获取入驻展会
				this.$ajax
					.post(
						this.$Url + "/exStand/query/getNewSettled",
						this.$qs.stringify({
							num: 5
						})
					)
					.then(ret => {
						this.zhanwei = ret.data.data.standList;
					})
					.catch(function(error) {
						console.log(error);
					});
				//获取新闻信息
				this.$ajax
					.post(this.$Url + "/ne/sNnew", this.$qs.stringify())
					.then(suc => {
						//					    console.log(data)
						this.newslist = suc.data.data.list;
						this.newslists = suc.data.data.list2;
					})
					.catch(function(error) {
						console.log(error);
					});
				//获取分类列表
				this.$ajax
					.post(this.$Url + "/pt/sTs", this.$qs.stringify())
					.then(datat => {
						//						console.log(data)
						this.leibie = datat.data.data.info.list;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			severs() {
				console.log(this.xuan);
				if(this.xuan == "0" && this.cont != "") {
					window.open(
						encodeURI(
							"http://39.105.31.48:8080/ud/index.html?keyword=" + this.cont
						),
						"_blank"
					);
					//					window.location.href = encodeURI("http://39.105.31.48:8080/ud/index.html?keyword=" + this.cont)
				} else if(this.xuan == "1" && this.cont != "") {
					this.$ajax
						.post(
							this.$Url + "/fp/selPWeb",
							this.$qs.stringify({
								str: this.cont
							})
						)
						.then(data => {
							console.log(data);
							this.shop = data.data.data.list;
							console.log(this.shop);
							this.$router.push({
								name: "Productserch",
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
				console.log(id);
				this.$router.push({
					name: "Newsinformation",
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
			yilei(index,name) {
				this.yiname=name
				this.b = "";
				this.d = "";
				this.c = "";
				this.one = index;
				this.b = index;
				this.erjilei = "";
				if(this.one != 0) {
					document.getElementById("sanjilie").style.display = "none";
					document.getElementById("sijilie").style.display = "none";
				}
				if(
					this.one == 0 &&
					document.getElementById("sanjilie").style.display == "block"
				) {
					document.getElementById("sanjilie").style.display = "none";
				}
				//				if(document.getElementById('erjilie').style.display=="none"||document.getElementById('erjilie').style.display==''){
				document.getElementById("erjilie").style.display = "block";
				//				}
				//					this.erji = true
				this.erjilei = this.leibie[index].list;
				console.log(this.erjilei);
				//				var num = index + 1
				//				for(var i in this.leibie) {
				//					if(num == this.leibie[i].id) {
				//						this.erjilei = this.leibie[i].list
				//					}
				//				}
			},
			sanjilei(index, id,name) {
				this.ername=name
				this.c = "";
				this.d = "";
				this.two = id;
				this.c = index;
				if(this.two != 0) {
					document.getElementById("sijilie").style.display = "none";
				}
				console.log(this.c);
				(this.sajnjilei = ""),
				(document.getElementById("erjilie").style.display = "block");
				document.getElementById("sanjilie").style.display = "block";
				//				document.getElementById('sanjilie').style.backgroun="#ededed"
				this.sajnjilei = this.erjilei[index].list;
				console.log(this.sajnjilei);
			},
			sijilei(index, id,name) {
				this.sanname=name
				this.d = "";
				this.three = id;
				this.d = index;
				console.log(this.d);
				document.getElementById("erjilie").style.display = "block";
				document.getElementById("sanjilie").style.display = "block";
				document.getElementById("sijilie").style.display = "block";
				(this.sijnjilei = ""), (this.sijnjilei = this.sajnjilei[index].list);
				console.log(this.sijnjilei);
			},
			wujilei(id,name) {
				this.siname=name
				this.b = "";
				this.four = id;
				console.log(this.one);
				for(let i in this.sijnjilei) {
					if(this.four == this.sijnjilei[i].id) {
						this.fouername = this.sijnjilei[i].typeName;
					}
				}
				console.log(this.fouername);
				this.$router.push({
					name: "Productserch",
					params: {
						yinames:this.yiname,
						ernames: this.ername,
						sannames: this.sanname,
						sinames: this.siname,
						four: this.fouername
					}
				});
			},
			zhan() {
				window.open(
					encodeURI("http://39.105.31.48:8080/ud/index.html?keyword="),
					"_blank"
				);
			},
			more() {
				window.open(
					encodeURI("http://39.105.31.48:8080/ud/index.html?keyword="),
					"_blank"
				);
			},
			zhanguan(id) {
				window.open(
					encodeURI("http://39.105.31.48:8080/ud/index.html?id=" + id),
					"_blank"
				);
			},
			//			查看更多跳转新闻列表页
			newmore(id) {
				console.log(id);
				//				this.$router.replace({
				//					path:'./News',
				//					name: 'News',
				//				});
				this.$router.push({
					name: "News",
					params: {
						ids: id
					}
				});
			},
			areaprov() {
				console.log(this.xuan);
			},
			flushCom: function() {
				this.$router.go(0);
			},
			tui() {
				localStorage.removeItem("ACCESS_TOKEN");
				localStorage.removeItem("username");
				localStorage.removeItem("Id");
				localStorage.removeItem("postId");
				localStorage.removeItem("Data");
				localStorage.removeItem("gaunjain");
				this.iphone=''
				this.us = true
				this.dianhua=false
				this.$router.push({
					name: "Index"
				});
			},
			bianji() {
				console.log(this.userinfo.viaUrl)
				this.inforhide = false
				this.inforxiugai = true
			},
			xiumima() {
				this.inforhide = false
				this.inforxiugai = false
				this.mima = true
			},
			info() {
				this.inforhide = true
				this.$ajax
					.post(this.$Url + "/st/sS", this.$qs.stringify({

					})).then(data => {
						console.log(data)
						this.userinfo = data.data.data.user
						if(this.userinfo.sex == 0) {
							this.userinfo.sex = "男"
						} else if(this.userinfo.sex == 1) {
							this.userinfo.sex = "女"
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			erwe() {
				//				document.getElementById("erwei").style.display = "block";
				//				 this.ma=true
				console.log(document.getElementById("erwei").style.display)
				document.getElementById("erwei").style.display = "block";
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
			qiye() {
				if(this.iphone == '' || this.iphone == null || this.iphone == undefined) {
					this.$router.push({
						name: "Login"
					});
				} else {
					//					window.open(encodeURI("http://39.105.24.238/busys.html#/dataAnalysis0/index"),"_blank");
					if(this.postId == 0) {
						window.open(encodeURI("http://39.105.24.238/busys.html#/setUp2/index"), "_blank");
					} else {
						window.open(encodeURI("http://39.105.24.238/busys.html#/dataAnalysis0/index"), "_blank");
					}
				}
				//企业

			},
			kaitong(){
				if(this.iphone == '' || this.iphone == null || this.iphone == undefined) {
					this.$router.push({
						name: "Login"
					});
				} else {
					if(this.postId == 0) {
						window.open(encodeURI("http://39.105.24.238/busys.html#/setUp2/index"), "_blank");
					} else {
						window.open(encodeURI("http://39.105.24.238/busys.html#/boothSetting0/index"), "_blank");
					}
				}
			}
			//			denglu(){
			//				window.open("http://39.105.24.238/busys.html?, '_blank'");
			//			}
		}
	};
</script>

<style scoped>
	@import "../assets/css/index.css";
</style>