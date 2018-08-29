<template>
	<div class="serch">
		<div class="header">
			<div class="h-top">
				<img src="../assets/img/dingwei.png" class="dw-ioin" />
				<p class="city">天津</p>
				<p class="login">嘉科仪科技 </p>
				<img src="" class="xinjian" />
				<p class="zhuce">消息 <span>1</span></p>
				<ul class="nav">
					<!--<li>我的浏览&nbsp;&nbsp;|</li>
					<li>我的收藏&nbsp;&nbsp;|</li>-->
					<li>个人中心&nbsp;&nbsp;|</li>
					<li>手机版 </li>
				</ul>
			</div>
			<div class="daohang">
				<img src="../assets/img/logo.png" class="logo" />
				<ul class="dh">
					<router-link to="./" @click.native="flushCom"><li>首页</li></router-link>
					<router-link to="./News" @click.native="flushCom">
						<li>新闻资讯</li>
					</router-link>
					<router-link to="./Product" @click.native="flushCom"><li>产品中心</li></router-link>
					<router-link to="./Buyinformation" @click.native="flushCom"><li>求购信息</li></router-link>
					<router-link to="./Enterprise" @click.native="flushCom"><li>商务合作</li></router-link>
				</ul>
				<button class="kaitong">开通展位</button>
			</div>
		</div>
		<div class="search">
			<input type="text" placeholder="请输入搜索内容" class="find" v-model="guanjian"/>
			<p @click="sousuo"><img src="../assets/img/icon_search.png" /></p>
		</div>
		<div class="content">
			<div class="tagnav">
				全部分类>
			</div>
			<div class="feilei1">
				<p class="xgfl">相关分类：</p>
				<p v-for="(l,index) in leibie" @click="yiji(index,l.id)">{{l.typeName}}</p>
			</div>
			<div class="fenlei2" v-show="erjis">
				<p v-for="(i,index) in erjilei" @click="erji(index,i.id)">{{i.typeName}}</p>
			</div>
			<div class="fenlei2" v-show="sanjis">
				<p v-for="(s,index) in sanjilei" @click="sanji(index,s.id)">{{s.typeName}}</p>
			</div>
			<div class="fenlei2" v-show="sijis">
				<p v-for="(s,index) in sijilei" @click="siji(s.id)">{{s.typeName}}</p>
			</div>
			<div class="shuaixuan">
				<p @click="ranking">综合排序</p>
				<p @click="renqi">人气</p>
			    <p @click="fabudata">发布时间</p>
			    <p @click.stop="diqu">所在地区</p>
			    <p>经营模式</p>
			    <div class="tiao">共{{total}}条产品信息</div>
			    <ul class="liandong" id="sheng" v-show="shengkuang">
			    	<li v-for="se in shengs" @click.stop="shis(se.sid)">
			    		{{se.sn}}
			    	</li>
			    </ul>
			    <ul class="ldshi" id="shi" v-show="shiji">
			    	<li v-for="shis in chengshis" @click.stop="chengshi(shis.sid)">{{shis.sn}}</li>
			    </ul>
			</div>
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

<script scoped>
	document.onclick = function(){
//     alert(document.getElementById('erjilie').style.display)
       document.getElementById('sheng').style.display="none";
        document.getElementById('shi').style.display="none";
//     alert(2)
    }
	import {newArr} from '../../static/city.js'
	export default {
		data() {
			return {
				currentPage: 1,
				total: this.$route.params.totals,
				length: 12,
				leibie:'',
				erjis:false,
				sanjis:false,
				sijis:false,
				erjilei:'',
				sanjilei:'',
				sijilei:'',
				shuju: this.$route.params.shujus,
				zonghe:'',
				guanzhu:'',
				shijian:'',
				areas:'',
				areaB:'',
				guanjian:localStorage["guanjian"],
				shengs:[],
				chengshis:[],
				shengkuang:false,
				shiji:false,
				one:this.$route.params.one,
				two:this.$route.params.two,
				three:this.$route.params.three,
				four:this.$route.params.four,
				
			}
		},
		mounted: function() {
			console.log(this.shuju)
			this.fenlei();
			if(this.shuju==''||this.shuju==undefined){
				this.fined();
			}else{
				
			}
			if(this.one==''){
				
			}else{
				this.fined();
			}
			
		},
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
			fined(){
				this.$ajax.post(this.$Url + "/fp/selPWeb", this.$qs.stringify({
						pageSize: this.length,
						pageNum: this.currentPage,
						synthesis:this.zonghe,
						popular:this.guanzhu,
						date:this.shijian,
						areaA:this.areas,
						areaB:this.areaB,
						str:this.guanjian,
						one:this.one,
						two:this.two,
						three:this.three,
						four:this.four,
					})).then(data => {
						console.log(data)
						this.shuju = data.data.data.list.list
						this.total=data.data.data.list.total
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
								xianginfos: this.xianginfo,
								imglist:data.data.data.imgList,
							}
						});
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			//获取初始分类
			fenlei(){
				this.$ajax.post(this.$Url +"/pt/sTs", this.$qs.stringify()).then(data => {
					console.log(data)
					this.leibie = data.data.data.info.list
				})
				.catch(function(error) {
					console.log(error);
				})
			},
			//综合排序
			ranking(){
				this.zonghe=1
				this.guanzhu=0
				this.shijian=0
				this.fined();
			},
			//人气
			renqi(){
				this.guanzhu=1
				this.shijian=0
				this.zonghe=0
				this.fined();
			},
			//发布时间
			fabudata(){
				this.shijian=1
				this.guanzhu=0
				this.zonghe=0
				this.fined();
			},
			//所在地区
			diqu(){
				this.shengs=[];
				console.log(newArr)
//				this.shengkuang=true
				document.getElementById('sheng').style.display="block";
				for(let d in newArr){
					if(newArr[d].areaParentId=='0'){
						let sf={}
						sf.sn=newArr[d].areaName
						sf.sid=newArr[d].id
						this.shengs.push(sf)
						console.log(this.shengs)
					}
				}
				
			},
			//省下面的市
			shis(id){
				this.areas=id;
				this.chengshis=[];
//				this.shiji=true
				document.getElementById('sheng').style.display="block";
                document.getElementById('shi').style.display="block";
				for(let sh in newArr){
					for(let shis in newArr[sh].list){
						if(newArr[sh].list[shis].areaParentId==id){
							let cs={}
							cs.sn=newArr[sh].list[shis].areaName
							cs.sid=newArr[sh].list[shis].id
							this.chengshis.push(cs)
					    }
					}
				}
				console.log(this.chengshis)
			},
			//获取城市id并且切换搜索数据
			chengshi(even){
				this.areaB=even
				this.fined();
				if(this.areaB!=''){
//					document.getElementById('sheng').style.display="none";
//                  document.getElementById('shi').style.display="none";
					this.shengkuang=false
					this.shiji=false
				}
			},
			//搜索关键字
			sousuo(){
				this.fined();
			},
			//一级分类
			yiji(index,id){
				console.log(id)
				this.one=id
				this.erjilei=this.leibie[index].list
				this.erjis = true
//				var num = index + 1
//				for(var i in this.leibie[index].list) {
//					if(num == this.leibie[i].id) {
//						this.erjilei = this.leibie[i].list
//					}
//				}
			},
			//二级分类
			erji(index,id){
				this.two=id
				this.sanjilei=this.erjilei[index].list
				this.sanjis = true
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
			sanji(index,id){
				this.three=id
			   this.sijis = true
			   this.sijilei=this.sanjilei[index].list
//			   console.log(index)	
//			   let num=index
//			   for(var i in this.sanjilei) {
//					if(num == this.sanjilei[i].id) {
//						this.sijilei = this.sanjilei[i].list
//					}
//				}
			},
			siji(id){
				this.four=id
				this.fined()
			},
			flushCom:function(){
				this.$router.go(0);
			},
			zhan() {
				window.open(encodeURI("http://39.105.31.48:8080/ud/index.html?keyword="), '_blank');
			},

		},
	}
</script>

<style scoped>
@import "../assets/css/productserch.css";
</style>