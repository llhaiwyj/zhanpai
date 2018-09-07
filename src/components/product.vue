<template>
	<div class="product" @click="hide">
		<div class="header">
			<p class="xain"></p>
			<p class="xain1"></p>
			<div class="header-zi">
				<Header :t='2' v-on:dianji="dian"></Header>
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
							<li >首页</li>
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
					<button class="kaitong" @click="kaitong">开通展位</button>-->
				<!--</div>-->
				<!--<ul class="leibie">
				<li>实验室仪器</li>
				<li>实验室仪器</li>
				<li>实验室仪器</li>
				<li>实验室仪器</li>
			</ul>-->
				<div class="pro">
					<p class="p-center">产品中心</p>
					<p class="dingwei">海量精密仪器，满足各种工业需求。精确搜索，定位准确</p>
				</div>
			</div>
		</div>
		<div class="search">
			<div class="searz">
				<input type="text" placeholder="请输入搜索内容" class="find" v-model="gaunjain" />
				<p @click="finedss"><img src="../assets/img/icon_search.png" /></p>
			</div>
		</div>
		<div class="content">
			<div class="conts">
				<div class="category">
					<div class="cate">
						<p class="gory1">实验室仪器：</p>
						<div class="gory1-left">
							<p class="gory2">
								<span class="sl" v-for="(l,index) in erjiso" @click="erjio(index,l.id)" :class="{'sls':index===b}">{{l.typeName}}</span>
							</p>
							<p class="gory3" v-show="sanjiso">
								<span class="sl" v-for="(j,index) in sanjileio" @click="sanjio(index,j.id)" :class="{'sls':index===c}">{{j.typeName}}</span>
							</p>
							<p class="gory3" v-show="sijiso">
								<span class="sl" v-for="(s,index) in sijileio" @click="sijio(index,s.id)" :class="{'sls':index===d}">{{s.typeName}}</span>
							</p>
						</div>
					</div>
					<div class="cate">
						<p class="gory1">实验室服务：</p>
						<div class="gory1-left">
							<p class="gory2">
								<span class="sl" v-for="(l,index) in erjisT" @click="erjiT(index,l.id)" :class="{'sls':index===t}">{{l.typeName}}</span>
							</p>
							<p class="gory3" v-show="sanjisT">
								<span class="sl" v-for="(j,index) in sanjileiT" @click="sanjiT(index,j.id)" :class="{'sls':index===c}">{{j.typeName}}</span>
							</p>
							<p class="gory3" v-show="sijisT">
								<span class="sl" v-for="(s,index) in sijileiT" @click="sijiT(index,s.id)" :class="{'sls':index===d}">{{s.typeName}}</span>
							</p>
						</div>
					</div>
					<div class="cate">
						<p class="gory1">家具及配件：</p>
						<div class="gory1-left1">
							<p class="gory2">
								<span class="sl" v-for="(l,index) in erjisS" @click="erjiS(index,l.id)" :class="{'sls':index===s}">{{l.typeName}}</span>
							</p>
							<p class="gory3" v-show="sanjisS">
								<span class="sl" v-for="(j,index) in sanjileiS" @click="sanjiS(index,j.id)" :class="{'sls':index===c}">{{j.typeName}}</span>
							</p>
							<p class="gory3" v-show="sijisS">
								<span class="sl" v-for="(s,index) in sijileiS" @click="sijiS(index,s.id)" :class="{'sls':index===d}">{{s.typeName}}</span>
							</p>
						</div>
					</div>
					<div class="cate">
						<p class="gory1">常用耗材：</p>
						<div class="gory1-left1">
							<p class="gory2">
								<span class="sl" v-for="(l,index) in erjisF" @click="erjiF(index,l.id)" :class="{'sls':index===f}">{{l.typeName}}</span>
							</p>
							<p class="gory3" v-show="sanjisF">
								<span class="sl" v-for="(j,index) in sanjileiF" @click="sanjiF(index,j.id)" :class="{'sls':index===c}">{{j.typeName}}</span>
							</p>
							<p class="gory3" v-show="sijisF">
								<span class="sl" v-for="(s,index) in sijileiF" @click="sijiF(index,s.id)" :class="{'sls':index===d}">{{s.typeName}}</span>
							</p>
						</div>
					</div>
					<!--<div class="cate">
						<p class="gory1">{{leibie[2].typeName}}：</p>
						<div class="gory1-left">
							<p class="gory2">
								<span v-for="(l,index) in erjis2" @click="erji2(index,l.id)">{{l.typeName}}</span>
							</p>-->
					<!--<p class="gory3" v-show="sanjis">
								<span v-for="(j,index) in sanjilei" @click="sanji(index,j.id)">{{j.typeName}}</span>
							</p>
							<p class="gory3" v-show="sijis">
								<span v-for="s in sijilei">{{s.typeName}}</span>
							</p>-->
					<!--</div>
					</div>
					<div class="cate">
						<p class="gory1">{{leibie[3].typeName}}：</p>
						<div class="gory1-left">
							<p class="gory2">
								<span v-for="(l,index) in erjis3" @click="erji3(index,l.id)">{{l.typeName}}</span>
							</p>-->
					<!--<p class="gory3" v-show="sanjis">
								<span v-for="(j,index) in sanjilei" @click="sanji(index,j.id)">{{j.typeName}}</span>
							</p>
							<p class="gory3" v-show="sijis">
								<span v-for="s in sijilei">{{s.typeName}}</span>
							</p>-->
					<!--</div>
					</div>-->
				</div>

				<ul class="chanpin">
					<div class="shuaixuanWrap">
						<p @click="ranking" :class="{'active':0===p}">综合排序</p>
						<p @click="renqi" :class="{'active':1===p}">人气</p>
						<p @click="fabudata" :class="{'active':2===p}">发布时间</p>
						<p @click.stop="diqu" :class="{'active':3===p}">
							<span v-show="szdq">所在地区</span>
							<span v-show="xscs">{{provicename}}</span>
							<span class="xia el-icon-caret-bottom"></span>
						</p>
						<!-- <p>经营模式</p> -->
						<!-- <div class="tiao">共{{total}}条产品信息</div> -->

					</div>
					<ul class="productWrap">
						<li v-for="item in shuju">
							<img v-lazy="item.imgUrl" class="shangpin" :key="item.myimg" @click="chaninfo(item.id)" />
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
					</ul>

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
				<ul class="liandong" id="sheng">
					<li @click="buxain">不限</li>
					<li v-for="se in shengs" @click.stop="shis(se.sid)">
						{{se.sn}}
					</li>
				</ul>
				</ul>
				
				<!--<ul class="ldshi" id="shi" v-show="shiji">
          <li v-for="shis in chengshis" @click.stop="chengshi(shis.sid)">{{shis.sn}}</li>
        </ul>-->
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
	import { newArr } from "../../static/city.js";
	import Header from './header';
	import Footer from './foot';
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
				length: 15,
				shuju: this.$route.params.shop,
				xianginfo: "",
				types: 0,
				gaunjain: localStorage["guanjian"],
				iphone: localStorage["username"],
				userId: localStorage["Id"],
				dianhua: false,
				us: true,
				leibie: "",
				erjilei: "",
				sanjis: false,
				sijis: false,
				erjis1: "",
				erjis2: "",
				erjis3: "",
				sijilei: "",
				b: "",
				c: "",
				d: "",
				t: "",
				s: "",
				f: "",
				//一级
				erjiso: "",
				sanjileio: "",
				sijileio: "",
				sanjiso: false,
				sijiso: false,
				twoo: "",
				//二级
				erjisT: "",
				sanjileiT: "",
				sijileiT: "",
				sanjisT: false,
				sijisT: false,
				twoT: "",
				//三级
				erjisS: "",
				sanjileiS: "",
				sijileiS: "",
				sanjisS: false,
				sijisS: false,
				twoS: "",
				//四级
				erjisF: "",
				sanjileiF: "",
				sijileiF: "",
				sanjisF: false,
				sijisF: false,
				twoF: "",
				//反取类的name值
				erjiname: "",
				sanjiname: "",
				sijiname: "",
				//条件查找
				zonghe: "",
				guanzhu: "",
				shijian: "",
				areas: "",
				areaB: "",
				shengs: [],
				chengshis: [],
				shengkuang: false,
				shiji: false,
				provicename: "",
				cityename: "",
				p:'',
				t:this.$route.params.tabId,
				szdq:true,
				xscs:false,
				infos:false,
			};
		},
		created() {
//			document.onclick = function() {
//				document.getElementById("sheng").style.display = "none";
//			}
		},
		mounted: function() {
			
//			if(this.gaunjain !=''){
//				localStorage.removeItem("gaunjain");
//				this.gaunjain=''
//			}
			if(this.iphone == "" || this.iphone == undefined) {
				this.us = true;
				this.dianhua = false;
			} else {
				this.us = false;
				this.dianhua = true;
			}
			this.fined();
			this.fenlei();
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
				if(this.gaunjain==''||this.gaunjain==null||this.gaunjain=="undefined"){
				    this.gaunjain=''
				    console.log(this.gaunjain)
			    }
				this.$ajax
					.post(
						this.$Url + "/fp/selPWeb",
						this.$qs.stringify({
							pageSize: this.length,
							pageNum: this.currentPage,
							type: this.types,
							two: this.erjiname,
							three: this.sanjiname,
							four: this.sijiname,
							popular: this.guanzhu,
							date: this.shijian,
							synthesis: this.zonghe,
							str:this.gaunjain,
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
			finedss() {
				this.shuju = "";
				localStorage.setItem("guanjian", this.gaunjain);
				this.$ajax
					.post(
						this.$Url + "/fp/selPWeb",
						this.$qs.stringify({
							pageSize: this.length,
							pageNum: this.currentPage,
							str: this.gaunjain
						})
					)
					.then(data => {
						console.log(data);
						this.shuju = data.data.data.list.list;
						this.total = data.data.data.list.total;
						//        if (data.data.code == 1) {
					
						this.$router.push({
							name: "Productserch",
							params: {
								shop: this.shuju,
								totals: this.total
							}
						});
						//        }
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			fenlei() {
				this.$ajax
					.post(this.$Url + "/pt/sTs", this.$qs.stringify())
					.then(data => {
						console.log(data);
						this.leibie = data.data.data.info.list;
						this.erjiso = this.leibie[0].list;
						this.erjisT = this.leibie[1].list;
						this.erjisS = this.leibie[2].list;
						this.erjisF = this.leibie[3].list;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			//一级获取
			erjio(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.t = "";
				this.b = index;
				this.c = "";
				this.d = "";
				this.f = "";
				this.s = "";
				this.twoo = id;
				if(this.two != 0 || this.two != "") {
					this.sijiso = false;
					this.sijisT = false;
					this.sanjisT = false;
					this.sijisS = false;
					this.sanjisS = false;
					this.sijisF = false;
					this.sanjisF = false;
				}
				this.sanjiso = true;
				this.sanjileio = this.erjiso[index].list;
				for(let i in this.erjiso) {
					if(this.twoo == this.erjiso[i].id) {
						this.erjiname = this.erjiso[i].typeName;
					}
				}
				console.log(this.erjiname);
				//    this.fined();
			},
			sanjio(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.c = index;
				this.d = "";
				this.sijiso = true;
				this.sijileio = this.sanjileio[index].list;
				for(let i in this.sanjileio) {
					if(id == this.sanjileio[i].id) {
						this.sanjiname = this.sanjileio[i].typeName;
					}
				}
				console.log(this.sanjiname);
				//    this.fined();
			},
			sijio(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.d = index;
				let four = id;
				for(let i in this.sijileio) {
					if(four == this.sijileio[i].id) {
						this.sijiname = this.sijileio[i].typeName;
					}
				}
				console.log(this.sijiname);
				this.fined();
			},
			//二级获取
			erjiT(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.t = index;
				this.c = "";
				this.d = "";
				this.f = "";
				this.s = "";
				this.twoT = id;
				if(this.twoT != 0 || this.twoT != "") {
					this.sijiso = false;
					this.sanjiso = false;
					this.sijisT = false;
					this.sijisS = false;
					this.sanjisS = false;
					this.sijisF = false;
					this.sanjisF = false;
				}
				this.sanjisT = true;
				this.sanjileiT = this.erjisT[index].list;
				for(let i in this.erjisT) {
					if(this.twoT == this.erjisT[i].id) {
						this.erjiname = this.erjisT[i].typeName;
					}
				}
				console.log(this.erjiname);
				//    this.fined();
			},
			sanjiT(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.c = index;
				this.d = "";
				this.sijisT = true;
				this.sijileiT = this.sanjileiT[index].list;
				for(let i in this.sanjileiT) {
					if(id == this.sanjileiT[i].id) {
						this.sanjiname = this.sanjileiT[i].typeName;
					}
				}
				console.log(this.sanjiname);
				//    this.fined();
			},
			sijiT(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.d = index;
				let fourT = id;
				for(let i in this.sijileiT) {
					if(fourT == this.sijileiT[i].id) {
						this.sijiname = this.sijileiT[i].typeName;
					}
				}
				console.log(this.sijiname);
				this.fined();
			},
			//三级获取
			erjiS(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.s = index;
				this.b = "";
				this.c = "";
				this.d = "";
				this.t = "";
				this.f = "";
				this.twoS = id;
				if(this.twoS != 0 || this.twoS != "") {
					this.sijisS = false;
					this.sijiso = false;
					this.sanjiso = false;
					this.sijisT = false;
					this.sanjisT = false;
					this.sijisF = false;
					this.sanjisF = false;
				}
				this.sanjisS = true;
				this.sanjileiS = this.erjisS[index].list;
				for(let i in this.erjisS) {
					if(this.twoS == this.erjisS[i].id) {
						this.erjiname = this.erjisS[i].typeName;
					}
				}
				console.log(this.erjiname);
				//    this.fined();
			},
			sanjiS(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.c = index;
				console.log(this.c);
				this.d = "";
				this.sijisS = true;
				this.sijileiS = this.sanjileiS[index].list;
				for(let i in this.sanjileiS) {
					if(id == this.sanjileiS[i].id) {
						this.sanjiname = this.sanjileiS[i].typeName;
					}
				}
				console.log(this.sanjiname);
				//    this.fined();
			},
			sijiS(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.d = index;
				let fourS = id;
				console.log(this.d);
				for(let i in this.sijileiS) {
					if(fourS == this.sijileiS[i].id) {
						this.sijiname = this.sijileiS[i].typeName;
					}
				}
				console.log(this.sijiname);
				this.fined();
			},
			//四级获取
			erjiF(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.f = index;
				this.b = "";
				this.c = "";
				this.d = "";
				this.t = "";
				this.s = "";
				this.twoF = id;
				if(this.twoF != 0 || this.twoF != "") {
					this.sijisF = false;
					this.sijiso = false;
					this.sanjiso = false;
					this.sijisT = false;
					this.sanjisT = false;
					this.sijisS = false;
					this.sanjisS = false;
				}
				this.sanjisF = true;
				this.sanjileiF = this.erjisF[index].list;
				for(let i in this.erjisF) {
					if(this.twoF == this.erjisF[i].id) {
						this.erjiname = this.erjisF[i].typeName;
					}
				}
				console.log(this.erjiname);
				//    this.fined();
			},
			sanjiF(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.c = index;
				this.d = "";
				this.sijisF = true;
				this.sijileiF = this.sanjileiF[index].list;
				for(let i in this.sanjileiF) {
					if(id == this.sanjileiF[i].id) {
						this.sanjiname = this.sanjileiF[i].typeName;
					}
				}
				console.log(this.sanjiname);
				//    this.fined();
			},
			sijiF(index, id) {
				this.erjiname = "";
				this.sanjiname = "";
				this.sijiname = "";
				this.d = index;
				let fourF = id;
				//				console.log(four)
				for(let i in this.sijileiF) {
					if(fourF == this.sijileiF[i].id) {
						this.sijiname = this.sijileiF[i].typeName;
					}
				}
				console.log(this.sijiname);
				this.fined();
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
			ranking() {
				this.p=0
				this.zonghe = 1;
				this.guanzhu = 0;
				this.shijian = 0;
				this.fined();
			},
			//人气
			renqi() {
				this.p=1
				this.guanzhu = 1;
				this.shijian = 0;
				this.zonghe = 0;
				this.fined();
			},
			//发布时间
			fabudata() {
				this.p=2
				this.shijian = 1;
				this.guanzhu = 0;
				this.zonghe = 0;
				this.fined();
			},
			//所在地区
			diqu() {
				this.p=3
				this.shengs = [];
				console.log(newArr);
//								this.shengkuang=true
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
				if(this.gaunjain==''||this.gaunjain==null||this.gaunjain==undefined){
					localStorage.removeItem("gaunjain");
				}
				document.getElementById("sheng").style.display = "none";
				this.length=15;
				this.currentPage=1;
				this.areas = id;
				this.chengshis = [];
				//				this.shiji=true
//				document.getElementById("sheng").style.display = "block";
				//    document.getElementById("shi").style.display = "block";
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
							str:this.gaunjain,
							four: this.sijiname,
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
			//公司详情
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
//			tui() {
//				localStorage.removeItem("ACCESS_TOKEN");
//				localStorage.removeItem("username");
//				localStorage.removeItem("Id");
//				localStorage.removeItem("postId");
//				localStorage.removeItem("Data");
//				this.iphone='';
//				this.us = true
//				this.dianhua=false
//				this.$router.push({
//					name: "Index"
//				});
//			},
//			shoucang() {
//				if(this.iphone == '' || this.iphone == null || this.iphone == undefined) {
//					this.$message.error("请先登录")
//					this.$router.push({
//						name: "Login"
//					});
//				} else {
//					this.$router.push({
//						name: "Collection"
//					});
//				}
//			},
//			kaitong(){
//				if(this.iphone == '' || this.iphone == null || this.iphone == undefined) {
//					this.$router.push({
//						name: "Login"
//					});
//				} else {
//					if(this.postId == 0) {
//						window.open(encodeURI("http://39.105.24.238/busys.html#/personalCenter2/index"), "_blank");
//					} else {
//						window.open(encodeURI("http://39.105.24.238/busys.html#/dataAnalysis0/index"), "_blank");
//					}
//				}
//			}
		}
	};
</script>

<style scoped>
	@import "../assets/css/product.css";
</style>