<template>
	<div class="serch"  @click="hide">
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
					<p class="zhuce">消息
						<span>1</span>
					</p>-->
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
		<div class="search">
			<div class="searz">
				<input type="text" placeholder="请输入搜索内容" class="find" v-model="guanjian" />
				<p @click="sousuo"><img src="../assets/img/icon_search.png" /></p>
			</div>
		</div>
		<div class="content">
			<div class="con1">
				<div class="tagnav" v-show="alllei">
					全部分类>{{yiname}}>{{ername}}>{{sanname}}>{{siname}}
				</div>
				<div class="feilei1" v-show="xianglei">
					<p class="xgfl">相关分类：</p>
					<p class="fl" v-for="(l,index) in leibie" @click="yiji(index,l.id)" :class="{'fls':index===a}">{{l.typeName}}</p>
				</div>
				<div class="fenlei2" v-show="erjis">
					<p class="fl" v-for="(i,index) in erjilei" @click="erji(index,i.id)" :class="{'fls':index===b}">{{i.typeName}}</p>
				</div>
				<div class="fenlei2" v-show="sanjis">
					<p class="fl" v-for="(s,index) in sanjilei" @click="sanji(index,s.id)" :class="{'fls':index===c}">{{s.typeName}}</p>
				</div>
				<div class="fenlei2" v-show="sijis">
					<p class="fl" v-for="(s,index) in sijilei" @click="siji(index,s.id)" :class="{'fls':index===d}">{{s.typeName}}</p>
				</div>
				<div class="shuaixuan">
					<p @click="ranking" :class="{'active':0===p}">综合排序</p>
					<p @click="renqi" :class="{'active':1===p}">人气</p>
					<p @click="fabudata" :class="{'active':2===p}">发布时间</p>
					<p @click.stop="diqu" :class="{'active':3===p}"> 
						<span v-show="szdq">所在地区</span>
						<span v-show="xscs">{{provicename}}</span>
						<span class="xia el-icon-caret-bottom"></span>
					</p>
					<!-- <p>经营模式</p> -->
					<div class="tiao">共{{total}}条产品信息</div>
					<ul class="liandong" id="sheng" v-show="shengkuang">
						<li @click="buxain">不限</li>
						<li v-for="se in shengs" @click.stop="shis(se.sid)">
							{{se.sn}}
						</li>
					</ul>
					<!--<ul class="ldshi" id="shi" v-show="shiji">
						<li v-for="shis in chengshis" @click.stop="chengshi(shis.sid)">{{shis.sn}}</li>
					</ul>-->
				</div>
				<ul class="chanpin">
					<li v-for="item in shuju">
						<img v-lazy="item.imgUrl" class="shangpin" :key="item.myimg" @click="chaninfo(item.id)"/>
						<div class="jieshao">
							<p class="diqu">
								<span class="diming">{{item.areaA}}</span>
								<span class="lilan">{{item.clickNo}}人看过</span>
							</p>
							<p class="chanpinming" @click="chaninfo(item.id)">{{item.pname}}</p>
							<p class="copyname">
								<img src="../assets/img/icon-copy.png" />
								<span class="copys" @click="copyinfo(item.firmId)">{{item.firmName}}</span>
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

<script scoped>
	import { newArr } from "../../static/city.js";
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
				total: this.$route.params.totals,
				length: 15,
				leibie: "",
				erjis: false,
				sanjis: false,
				sijis: false,
				erjilei: "",
				sanjilei: "",
				sijilei: "",
				shuju: this.$route.params.shop,
				zonghe: "",
				guanzhu: "",
				shijian: "",
				areas: "",
				areaB: "",
				guanjian: localStorage["guanjian"],
				iphone: localStorage["username"],
				shengs: [],
				chengshis: [],
				shengkuang: false,
				shiji: false,
				one: this.$route.params.one,
				two: this.$route.params.two,
				three: this.$route.params.three,
				four: this.$route.params.four,
				a: "",
				b: "",
				c: "",
				d: "",
				leinameo: "",
				leinamet: "",
				leinames: "",
				leinamef: "",
				provicename: "",
				cityename: "",
				dianhua: false,
				us: true,
				p: '',
				yiname:this.$route.params.yinames,
				ername:this.$route.params.ernames,
				sanname:this.$route.params.sannames,
				siname:this.$route.params.sinames,
				alllei:false,
				xianglei:true,
				szdq:true,
				xscs:false,
				infos:false,
			};
		},
		created() {
			document.onclick = function() {
				//     alert(document.getElementById('erjilie').style.display)
				document.getElementById("sheng").style.display = "none";
//				document.getElementById("shi").style.display = "none";
				//     alert(2)
			};
		},
		mounted: function() {
			console.log(this.siname)
			console.log(this.four)
			this.fenlei();
			if(this.ername==undefined||this.sanname==undefined||this.siname==undefined||this.ername==''||this.sanname==''||this.siname==''){
				this.xianglei=true;
				this.alllei=false;
			}else{
				this.xianglei=false;
				this.alllei=true;
			}
			//			this.fined();
			if(this.shuju == "" || this.shuju == undefined) {
				this.fined();
			}
			if(this.four == "") {
//				alert(1)
			} else {
//				alert(2)
				this.leinamef=this.four
				this.fined();
			}
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
			buxain(){
				this.provicename=''
				this.shis()
				this.szdq=true;
				this.xscs=false;
			},
			hide(){
				document.getElementById("sheng").style.display = "none";
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
				if(this.guanjian==''||this.guanjian==null||this.guanjian=="undefined"){
				    this.guanjian=''
				    console.log(this.guanjian)
			    }
				this.$ajax
					.post(
						this.$Url + "/fp/selPWeb",
						this.$qs.stringify({
							pageSize: this.length,
							pageNum: this.currentPage,
							synthesis: this.zonghe,
							popular: this.guanzhu,
							date: this.shijian,
							str:this.guanjian,
							//						areaA: this.areas,
							//						areaB: this.areaB,
							str: this.guanjian,
							one: this.leinameo,
							two: this.leinamet,
							three: this.leinames,
							four: this.leinamef
						})
					)
					.then(data => {
						console.log(data);
						this.shuju = data.data.data.list.list;
						this.total = data.data.data.list.total;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			chaninfo(id) {
				console.log(id);
				this.$ajax
					.post(
						this.$Url + "/fp/getP",
						this.$qs.stringify({
							id: id
						})
					)
					.then(data => {
						console.log(data);
						this.xianginfo = data.data.data.info;
						this.$router.push({
							name: "Details",
							params: {
								xianginfos: this.xianginfo,
								imglist: data.data.data.imgList
							}
						});
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			//获取初始分类
			fenlei() {
				this.$ajax
					.post(this.$Url + "/pt/sTs", this.$qs.stringify())
					.then(data => {
						console.log(data);
						this.leibie = data.data.data.info.list;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			//综合排序
			ranking() {
				this.p = 0
				this.zonghe = 1;
				this.guanzhu = 0;
				this.shijian = 0;
				this.fined();
			},
			//人气
			renqi() {
				this.p = 1
				this.guanzhu = 1;
				this.shijian = 0;
				this.zonghe = 0;
				this.fined();
			},
			//发布时间
			fabudata() {
				this.p = 2
				this.shijian = 1;
				this.guanzhu = 0;
				this.zonghe = 0;
				this.fined();
			},
			//所在地区
			diqu() {
				this.p = 3
				this.shengs = [];
				console.log(newArr);
				//				this.shengkuang=true
				document.getElementById("sheng").style.display = "block";
				for(let d in newArr) {
					if(newArr[d].areaParentId == "0") {
						let sf = {};
						sf.sn = newArr[d].areaName;
						sf.sid = newArr[d].id;
						this.shengs.push(sf);
						console.log(this.shengs);
					}
				}
			},
			//省下面的市
			shis(id) {
				document.getElementById("sheng").style.display = "none";
				this.length=15;
				this.currentPage=1;
				this.areas = id;
				this.chengshis = [];
				//				this.shiji=true
//				document.getElementById("sheng").style.display = "block";
//				document.getElementById("shi").style.display = "block";
				for(let sh in newArr) {
					for(let shis in newArr[sh].list) {
						if(newArr[sh].list[shis].areaParentId == id) {
							let cs = {};
							cs.sn = newArr[sh].list[shis].areaName;
							cs.sid = newArr[sh].list[shis].id;
							this.chengshis.push(cs);
						}
					}
				}
				console.log(this.chengshis);
				for(let i in this.shengs) {
					if(this.areas == this.shengs[i].sid) {
						this.provicename = this.shengs[i].sn;
					}
				}
				console.log(this.provicename);
				this.szdq=false,
				this.xscs=true,
				this.$ajax
					.post(
						this.$Url + "/fp/selPWeb",
						this.$qs.stringify({
							pageSize: this.length,
							pageNum: this.currentPage,
							areaA: this.provicename,
							str:this.guanjian,
						})
					)
					.then(data => {
						console.log(data);
						this.shuju = data.data.data.list.list;
						this.total = data.data.data.list.total;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			//获取城市id并且切换搜索数据
			chengshi(even) {
				this.areaB = even;
				console.log(this.areaB);
				//				this.fined();
				for(let i in this.chengshis) {
					if(this.areaB == this.chengshis[i].sid) {
						this.cityename = this.chengshis[i].sn;
					}
				}
				console.log(this.cityename);
				this.$ajax
					.post(
						this.$Url + "/fp/selPWeb",
						this.$qs.stringify({
							pageSize: this.length,
							pageNum: this.currentPage,
							areaB: this.cityename
						})
					)
					.then(data => {
						console.log(data);
						//						this.shengkuang = false
						//					    this.shiji = false
						this.shuju = data.data.data.list.list;
						this.total = data.data.data.list.total;
					})
					.catch(function(error) {
						console.log(error);
					});

				if(this.areaB != "") {
					document.getElementById("sheng").style.display = "none";
					document.getElementById("shi").style.display = "none";
					//					this.shengkuang = false
					//					this.shiji = false
				}
			},
			//搜索关键字
			sousuo() {
				localStorage.setItem("guanjian", this.guanjian);
				this.fined();
			},
			//一级分类
			yiji(index, id) {
				this.a = index;
				this.b = "";
				this.c = "";
				this.d = "";
				console.log(id);
				this.one = id;
				if(this.one != 0 || this.one != "") {
					this.sanjis = false;
					this.sijis = false;
				}
				this.erjilei = this.leibie[index].list;
				this.erjis = true;
				for(let i in this.leibie) {
					if(this.one == this.leibie[i].id) {
						this.leinameo = this.leibie[i].typeName;
					}
				}
				console.log(this.leinameo);
				this.$ajax
					.post(
						this.$Url + "/fp/selPWeb",
						this.$qs.stringify({
							pageSize: this.length,
							pageNum: this.currentPage,
							one: this.leinameo,
							str:this.guanjian
						})
					)
					.then(data => {
						console.log(data);
						this.shuju = data.data.data.list.list;
						this.total = data.data.data.list.total;
					})
					.catch(function(error) {
						console.log(error);
					});
				//				var num = index + 1
				//				for(var i in this.leibie[index].list) {
				//					if(num == this.leibie[i].id) {
				//						this.erjilei = this.leibie[i].list
				//					}
				//				}
			},
			//二级分类
			erji(index, id) {
				this.b = index;
				this.c = "";
				this.d = "";
				this.two = id;
				if(this.two != 0 || this.two != "") {
					this.sijis = false;
				}
				this.sanjilei = this.erjilei[index].list;
				this.sanjis = true;
				for(let i in this.erjilei) {
					if(this.two == this.erjilei[i].id) {
						this.leinamet = this.erjilei[i].typeName;
					}
				}
				console.log(this.leinamet);
				this.$ajax
					.post(
						this.$Url + "/fp/selPWeb",
						this.$qs.stringify({
							pageSize: this.length,
							pageNum: this.currentPage,
							two: this.leinamet,
							str:this.guanjian
						})
					)
					.then(data => {
						console.log(data);
						this.shuju = data.data.data.list.list;
						this.total = data.data.data.list.total;
					})
					.catch(function(error) {
						console.log(error);
					});
				//			   console.log(index)
				//			   let num=index+30
				//			   console.log(this.erjilei)
				//			   for(var i in this.erjilei) {
				//			   	     console.log(this.erjilei[0].id)
				//					if(num == this.erjilei[i].id) {
				//						this.sanjilei = this.erjilei[i].list
				//					}
				//				}
			},
			//			三级分类
			sanji(index, id) {
				this.c = index;
				this.d = "";
				this.three = id;
				this.sijis = true;
				this.sijilei = this.sanjilei[index].list;
				for(let i in this.sanjilei) {
					if(this.three == this.sanjilei[i].id) {
						this.leinames = this.sanjilei[i].typeName;
					}
				}
				console.log(this.leinames);
				this.$ajax
					.post(
						this.$Url + "/fp/selPWeb",
						this.$qs.stringify({
							pageSize: this.length,
							pageNum: this.currentPage,
							three: this.leinames,
							str:this.guanjian
						})
					)
					.then(data => {
						console.log(data);
						this.shuju = data.data.data.list.list;
						this.total = data.data.data.list.total;
					})
					.catch(function(error) {
						console.log(error);
					});
				//			   console.log(index)
				//			   let num=index
				//			   for(var i in this.sanjilei) {
				//					if(num == this.sanjilei[i].id) {
				//						this.sijilei = this.sanjilei[i].list
				//					}
				//				}
			},
			siji(index, id) {
				this.d = index;
				this.four = id;
				for(let i in this.sijilei) {
					if(this.four == this.sijilei[i].id) {
						this.leinamef = this.sijilei[i].typeName;
					}
				}
				console.log(this.leinamef);
				this.$ajax
					.post(
						this.$Url + "/fp/selPWeb",
						this.$qs.stringify({
							pageSize: this.length,
							pageNum: this.currentPage,
							four: this.leinamef,
							str:this.guanjian
						})
					)
					.then(data => {
						console.log(data);
						this.shuju = data.data.data.list.list;
						this.total = data.data.data.list.total;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			flushCom: function() {
				this.$router.go(0);
			},
			zhan() {
				window.open(
					encodeURI("http://39.105.31.48:8080/ud/index.html?keyword="),
					"_blank"
				);
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
	@import "../assets/css/productserch.css";
</style>