<template>
	<div class="xiangqing">
		<div class="header">
			<p class="xain"></p>
			<p class="xain1"></p>
			<div class="header-zi">
				<Header :t='3' v-on:dianji="dian"></Header>
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
							<li>首页</li>
						</router-link>
						<router-link to="./News" @click.native="flushCom">
							<li>新闻资讯</li>
						</router-link>
						<router-link to="./Product" @click.native="flushCom">
							<li>产品中心</li>
						</router-link>
						<router-link to="./Buyinformation" @click.native="flushCom">
							<li class="shou">求购信息</li>
						</router-link>
						<router-link to="./Enterprise" @click.native="flushCom">
							<li>商务合作</li>
						</router-link>
					</ul>
					<button class="kaitong" @click="kaitong">开通展位</button>
				</div>-->
				<p class="xuqiu">您的需求</br> 我们都可以满足</p>
				<button class="fabu" @click="fabuxuqiu">发布需求</button>
			</div>
		</div>
		<div class="cotnet">
			<div class="conts">
				<div class="tag"></div>
				<div class="content">
					<div class="con-left2">
						<div class="f-tit">
							<p class="f-biao">标题</p>
							<input class="f-biaocont" v-model="title" />
						</div>
						<div class="f-cont">
							<p class="f-xiang">详情</p>
							<div class="f-fuwe">
								<el-upload class="avatar-uploader" style="display:none" :action="serverUrl" :show-file-list="false" :on-success="uploadSuccess" :on-error="uploadError" :before-upload="beforeUpload">
								</el-upload>
								<el-row>
									<quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @change="onEditorChange($event)" @ready="onEditorReady($event)">
									</quill-editor>
								</el-row>
							</div>
						</div>
						<div class="f-fenlei">
							<p class="f-biao">分类</p>
							<select class="f-biaocont" v-model="leibie" v-on:change="fenlei($event)">
								<option v-for="item in fenleis" :value="item.id">{{item.label}}
								</option>
							</select>
						</div>
						<div class="f-sanji">
							<p class="f-diqu">地区</p>
							<div class="f-dq">
								<select class="f-shneg" v-model="provice" v-on:change="areaprov($event)">
									<option v-for="item in shengs" :value="item.sid">{{item.sn}}
									</option>
								</select>
								<select class="f-shneg" v-model="citys" v-on:change="city($event)">
									<option v-for="item in chengshis" :value="item.sid">{{item.sn}}
									</option>
								</select>
								<select class="f-shneg" v-model="zhen" v-on:change="zheng($event)">
									<option v-for="item in sanji" :value="item.sid">{{item.sn}}
									</option>
								</select>
							</div>
						</div>
						<div class="dianhua">
							<p class="f-biao">电话</p>
							<input class="f-biaocont" v-model="phone" />
						</div>
						<div class="dianhua">
							<p class="f-biao">QQ</p>
							<input class="f-biaocont" v-model="qq" />
						</div>
						<div class="dianhua">
							<p class="f-biao">微信</p>
							<input class="f-biaocont" v-model="weixin" />
						</div>
						<button class="f-truefabu" @click="truefa">确认发布</button>
					</div>
					<div class="con-right1">
						<div class="geren">
							<div class="gerenname">
								<img src="" class="touxaing" />
								<p class="xname">{{user.username}}</p>
							</div>
							<div class="hangyexinxi">
								<p class="guanhzuhangye">
									<span class="xiaobiao">关注行业:</span>
									<span class="xiangxi"> </span>
								</p>
								<p class="guanhzuhangye">
									<span class="xiaobiao">经营模式:</span>
									<span class="xiangxi"></span>
								</p>
								<p class="guanhzuhangye">
									<span class="xiaobiao">所在地区:</span>
									<span class="xiangxi"></span>
								</p>
							</div>
							<p class="xian"></p>
							<p class="mainqiugou">我的求购</p>
							<div class="yijiejue" @click="yijiejue">
								<img src="../assets/img/icon-yi.png" class="jiebiao" />
								<p class="yj">已解决</p>
								<!--<p class="shuliang">0</p>-->
							</div>
							<div class="weijiejue" @click="weijiejue">
								<img src="../assets/img/icon-wei.png" class="jiebiao" />
								<p class="yj">未解决</p>
								<!--<p class="shuliang">0</p>-->
							</div>
							<button class="fabuxuqiu">发布需求</button>
						</div>
						<div class="xiqiu">
							<p class="edxq">热点需求</p>
							<p class="edxuqius edxuqiusln" v-for="(r,index) in redian" @click="inforxiang(index,r.id)" :class="{'edxuqiusact':index===b}">{{r.title}}</p>
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
	import { newArr } from '../../static/city.js';
	import Header from './header'
	import Footer from './foot'
	import Info from './gereninfo'
	const toolbarOptions = [
		["bold", "italic", "underline", "strike"], // toggled buttons
		["blockquote", "code-block"],
		[{
			header: 1
		}, {
			header: 2
		}], // custom button values
		[{
			list: "ordered"
		}, {
			list: "bullet"
		}],
		[{
			script: "sub"
		}, {
			script: "super"
		}], // superscript/subscript
		[{
			indent: "-1"
		}, {
			indent: "+1"
		}], // outdent/indent
		[{
			direction: "rtl"
		}], // text direction
		[{
			size: ["small", false, "large", "huge"]
		}], // custom dropdown
		[{
			header: [1, 2, 3, 4, 5, 6, false]
		}],
		[{
			color: []
		}, {
			background: []
		}], // dropdown with defaults from theme
		[{
			font: []
		}],
		[{
			align: []
		}],
		["link", "image", "video"],
		["clean"] // remove formatting button
	];
	export default {
		components: {
			Header,
			Footer,
			Info,
		},
		inject:['reload'],
		data() {
			return {
				infos:false,
				dianhua: false,
				us: true,
				fabu: false,
				user: '',
				iphone: localStorage["username"],
				shu: '',
				redian: '',
				shengs: [],
				chengshis: [],
				sanji: [],
				provice: '',
				citys: '',
				zhen: '',
				content: '',
				title: '',
				fenlei: '',
				provicename: '',
				addressA: '',
				addressB: '',
				addressC: '',
				ids: localStorage["Id"],
				leibie: '',
				phone: '',
				qq: '',
				weixin: '',
				a: '',
				b: '',
				imgs: [],
				solve: "",
				id: this.$route.params.ids,
				iphoneNo: localStorage["username"],
				token: localStorage["ACCESS_TOKEN"],
				fenleis: [{
						id: '0',
						label: '实验室器材'
					},
					{
						id: '1',
						label: '实验室服务'
					},
					{
						id: '2',
						label: '实验室家具'
					},
					{
						id: '3',
						label: '试剂与耗材'
					}
				],
				quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
				serverUrl: this.$Url + "/upload/singleUploadImg",
				//				serverfileUrl: this.$api + "/upload/singleUploadFile", // 这里写你要上传的文件服务器地址
				//				header: {
				//					token: localStorage["ACCESS_TOKEN"]
				//				}, // 有的图片服务器要求请求头需要有token之类的参数，写在这里
				detailContent: "", // 富文本内容
				editorOption: {
					placeholder: "",
					theme: "snow", // or 'bubble'
					modules: {
						toolbar: {
							container: toolbarOptions, // 工具栏
							handlers: {
								image: function(value) {
									if(value) {
										document.querySelector(".avatar-uploader input").click();
									} else {
										this.quill.format("image", false);
									}
								}
							}
						}
					}
				}
			}
		},
		mounted: function() {
			
			this.erdain()
			this.gereninfo()
			this.geren()
			console.log(newArr)
			this.shengs = [];
			for(let d in newArr) {
				if(newArr[d].areaParentId == '0') {
					let sf = {}
					sf.sn = newArr[d].areaName
					sf.sid = newArr[d].id
					this.shengs.push(sf)
					console.log(this.shengs)
				}
			}
			if(this.id != '' || this.id != null || this.id != undefined) {
				this.fined()
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
			yijiejue() {
				if(this.token==''||this.token==null||this.token==undefined){
					this.$message.error("请先登陆")
				}else{
					this.solve = 1;
				//    this.buyhide = false;
				//    this.fined();
				this.$router.push({
					name: "Solve",
					params: {
						solveds: this.solve
					}
				});
				}
				
			},
			weijiejue() {
				if(this.token==''||this.token==null||this.token==undefined){
					this.$message.error("请先登陆")
				}else{
					this.solve = 0;
				this.$router.push({
					name: "Solve",
					params: {
						solveds: this.solve
					}
				});
				}
				
				//    this.buyhide = false;
				//    this.fined();
			},
			//diqu
			fined() {
				this.$ajax.post(this.$Url + "/as/gA", this.$qs.stringify({
						id: this.id
					})).then(ret => {
						console.log(ret)
						this.xiangqingye = ret.data.data.ask
						this.title = this.xiangqingye.title
						this.content = this.xiangqingye.content
						this.leibie = this.xiangqingye.typeAId
						this.provice = this.xiangqingye.addressAId
						this.citys = this.xiangqingye.addressBId
						this.zhen = this.xiangqingye.addressCId
						this.phone = this.xiangqingye.iphoneNo
						this.qq = this.xiangqingye.qq
						this.weixin = this.xiangqingye.wechat
						console.log(this.xiangqingye)
						//获取城市
						this.chengshis = [];
						for(let sh in newArr) {
							for(let shis in newArr[sh].list) {
								if(newArr[sh].list[shis].areaParentId == this.provice) {
									let cs = {}
									cs.sn = newArr[sh].list[shis].areaName
									cs.sid = newArr[sh].list[shis].id
									this.chengshis.push(cs)
								}
							}
						}
						//获取地区
						this.sanji = [];
						for(let l in newArr) {
							for(let k in newArr[l].list) {
								//						console.log(newArr[l].list[k].list)
								for(var z in newArr[l].list[k].list) {
									//							console.log(newArr[l].list[k].list[z])
									if(newArr[l].list[k].list[z].areaParentId == this.citys) {
										let cs = {}
										cs.sn = newArr[l].list[k].list[z].areaName
										cs.sid = newArr[l].list[k].list[z].id
										this.sanji.push(cs)
									}
								}
							}
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			gereninfo() {
				this.$ajax.post(this.$Url + "/st/sS", this.$qs.stringify({
//						ACCESS_TOKEN: this.token
					})).then(ret => {
						console.log(ret)
						this.user = ret.data.data.user
						console.log(this.user)
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			geren() {
				this.$ajax.post(this.$Url + "/as/sAso", this.$qs.stringify({
//						ACCESS_TOKEN: this.token
					})).then(data => {
						console.log(data)
						this.shu = data.data.data.data
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			erdain() {
				this.$ajax.post(this.$Url + "/as/sAhot", this.$qs.stringify({}))
					.then(ret => {
						console.log(ret);
						this.redian = ret.data.data.list;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			areaprov: function(even) {
				console.log(newArr);
				this.chengshis = [];
				this.provice = even.target.value;
				console.log(this.provice);
				for(let sh in newArr) {
					for(let shis in newArr[sh].list) {
						if(newArr[sh].list[shis].areaParentId == this.provice) {
							let cs = {};
							cs.sn = newArr[sh].list[shis].areaName;
							cs.sid = newArr[sh].list[shis].id;
							this.chengshis.push(cs);
						}
					}
				}
			},
			city(even) {
				this.sanji = [];
				this.citys = even.target.value;
				console.log(this.citys);
				for(let l in newArr) {
					for(let k in newArr[l].list) {
						//						console.log(newArr[l].list[k].list)
						for(var z in newArr[l].list[k].list) {
							//							console.log(newArr[l].list[k].list[z])
							if(newArr[l].list[k].list[z].areaParentId == this.citys) {
								let cs = {};
								cs.sn = newArr[l].list[k].list[z].areaName;
								cs.sid = newArr[l].list[k].list[z].id;
								this.sanji.push(cs);
							}
						}
					}
				}
			},
			zheng(even) {
				this.zhen = even.target.value;
			},
			fenlei(even) {
				this.leibie = even.target.value;
			},
			beforeUpload() {
				// 显示loading动画
				this.quillUpdateImg = true;
			},
			onEditorChange({
				editor,
				html,
				text
			}) {
				this.content = html;
			},
			onEditorReady(res) {},
			uploadSuccess(res, file) {
				console.log(res);
				// res为图片服务器返回的数据
				// 获取富文本组件实例
				let quill = this.$refs.myQuillEditor.quill;
				// 如果上传成功
				console.log(res);
				if(res.msg === "success" && res.data.imgUrl !== null) {
					// 获取光标所在位置
					let length = quill.getSelection().index;
					console.log(res.info);
					// 插入图片  res.info为服务器返回的图片地址
					quill.insertEmbed(length, "image", res.data.imgUrl);
					// 调整光标到最后
					quill.setSelection(length + 1);
				} else {
					this.$message.error("图片插入失败");
				}
				// loading动画消失
				this.quillUpdateImg = false;
			},

			// 富文本图片上传失败
			uploadError() {
				// loading动画消失
				this.quillUpdateImg = false;
				this.$message.error("图片插入失败");
			},
			truefa() {
				console.log(this.iphone)
				console.log(this.ids)
//				let r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
//				if(!r.test(this.phone)) {
//					this.$message.error("请输入正确的手机号码");
//				}
//				var regexps = /^[1-9][0-9]{4,9}$/gim;
//				if(!regexps.test(this.qq)) {
//					this.$message.error("请输入正确的QQ");
//				}
				//				var  judge = "^[a-zA-Z][a-zA-Z0-9_-]{5,19}$";
				//				if(this.weixin!=myreg){
				//					this.$message.error("请输入正确的微信号")
				//				}
				for(let i in newArr) {
					if(newArr[i].id == this.provice) {
						this.addressA = newArr[i].areaName;
					}
				}
				console.log(this.addressA)
				for(let i in newArr) {
					for(let k in newArr[i].list) {
						if(newArr[i].list[k].id == this.citys) {
							this.addressB = newArr[i].list[k].areaName;
						}
					}
				}
				console.log(this.addressB)
				for(let i in newArr) {
					for(let k in newArr[i].list) {
						for(let j in newArr[i].list[k].list) {
							if(newArr[i].list[k].list[j].id == this.zhen) {
								console.log(newArr[i].list[k].list[j].areaName);
								this.addressC = newArr[i].list[k].list[j].areaName;
							}
						}
					}
				}
				console.log(this.addressC)
				for(let s in this.fenleis) {
					if(this.fenleis[s].id == this.leibie) {
						this.a = this.fenleis[s].label;
					}
				}
				console.log(this.a)
				if(this.ids == ""||this.ids==null||this.ids==undefined) {
					this.$message.error("请您先登陆");
				}else if(
					this.title == "" ||
					this.content == "" ||
					this.provice == "" ||
					this.citys == "" ||
					this.zhen == "" ||
					this.leibie == ""
				) {
					this.$message.error("请您填写完整的发布内容");
				} else {
					this.$ajax.post(this.$Url + "/as/iAsk",this.$qs.stringify({
								loginId: this.ids,
								title: this.title,
								content: this.content,
								typeA: this.a,
								typeAId: this.leibie,
								addressA: this.addressA,
								addressB: this.addressB,
								addressC: this.addressC,
								addressAId: this.provice,
								addressBId: this.citys,
								addressCId: this.zhen,
								iphoneNo: this.phone,
							})
						)
						.then(data => {
							console.log(data);
							if(data.data.msg == "success") {
								this.$router.push({
									name: "Buyinformation"
								});
							}
						})
						.catch(function(error) {
							console.log(error);
						});
				}
			},
			inforxiang(id) {
				this.id = id;
				console.log(this.id);
				this.$router.push({
					name: "Buyinforxiangqing",
					params: {
						ids: this.id
					}
				});
			},
			fabuxuqiu() {
				if(this.token == "" || this.token == undefined) {
					this.$message.error("请先登陆");
				} else {
					this.$router.push({
						name: "Fabuxuqiu"
					});
				}
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
	@import "../assets/css/buyinformation.css";
</style>