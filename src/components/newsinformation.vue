<template>
	<div class="newsinfor">
		<div class="header">
			<p class="xain"></p>
			<p class="xain1"></p>
			<div class="header-zi">
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
					<!--<li>我的浏览&nbsp;&nbsp;|</li>
					<li>我的收藏&nbsp;&nbsp;|</li>-->
					<li>个人中心&nbsp;&nbsp;|</li>
					<li>手机版 </li>
				</ul>
			</div>
			<div class="daohang">
				<img src="../assets/img/logo.png" class="logo" />
				<ul class="dh">
					<router-link to="./" @click.native="flushCom">
						<li class="shou">首页</li>
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
			<p class="xuqiu">新闻动态</br> <span>相关行业政策信息、媒体报道和公司举办的活动等</span></p>
			<ul class="newsfenlei">
				<li @click="pingtai">平台动态</li>
				<li @click="hangye">行业新闻</li>
				<li @click="zhengce">政策法规</li>
			</ul>
			</div>
		</div>
		<div class="content1" v-for="x in zuinewinfo">
			<div class="conts">
				<div class="con-left">
				<p class="c-l-t">{{x.title}}</p>
				<div class="c-l-she">
					<p class="c-l-ri">{{x.createTime}}</p>
					<p class="c-l-lai">文章来源：{{x.source}}</p>
					<p class="c-l-liu">浏览量：{{x.pageView}}</p>
					<p class="c-l-zi">字号</p>
					<p class="c-l-jia">+A</p>
					<p class="c-l-jian">-A</p>
				</div>
				<div class="xushu">
					<p class="xushu1">【中国化工仪器网 本网视点】6月20-22日，“2018世界生化、分析仪器与实验室装备中国展”(LABWorld China 2018)在上海新国际博览中心隆重举办。3000余仪器厂家云集四方，集中展示行业新技术新成果。国产液相色谱行业领导者上海伍丰科学仪器有限公司(简称“伍丰仪器”)受邀参展，携全新第三代LC-100液相色谱仪等臻品盛装出席。</p>
					<img :src="x.sourceUrl" class="xutu1" />
					<p class="xubiao1">伍丰仪器展位现场</p>
					<p class="xushu2">当下，中国经济转向了稳中上升的发展模式。同时，食品安全、药品安全、环境保护等成为了全社会的关注焦点，这为分析仪器行业带来了前所未有的机遇。用户对更高准确性、更高灵敏度以及微型化仪器产品的需求更加强烈。对精耕液相色谱领域的伍丰仪器而言，是机遇，同时也是很大的挑战。 　　伍丰仪器成立于1998年，回首20年伍丰发展之路，每一步都坚实有力。公司始终秉持“独立自主地研发优秀的分析仪器，为社会做贡献”的理念，坚持自主研发和创新，并希望打造成为中国液相色谱的领军企业。历经多年发展，伍丰仪器将液相色谱的配置、应用越来越丰富化，技术也走向行业前端，在国内的市场占有率名列前茅。 　　借此盛展召开之际，伍丰仪器重量级成员全新第三代LC-100液相色谱仪、LC-80 ChroMini液相色谱仪重磅来袭，尽显品牌领先风采。</p>
					<p class="xutitle">全新第三代LC-100液相色谱仪</p>
					<img :src="x.coverImg" class="xutu1" />
					<p class="xubiao1">伍丰仪器展位现场</p>
					<p class="xushu3">当下，中国经济转向了稳中上升的发展模式。同时，食品安全、药品安全、环境保护等成为了全社会的关注焦点，这为分析仪器行业带来了前所未有的机遇。用户对更高准确性、更高灵敏度以及微型化仪器产品的需求更加强烈。对精耕液相色谱领域的伍丰仪器而言，是机遇，同时也是很大的挑战。 　　伍丰仪器成立于1998年，回首20年伍丰发展之路，每一步都坚实有力。公司始终秉持“独立自主地研发优秀的分析仪器，为社会做贡献”的理念，坚持自主研发和创新，并希望打造成为中国液相色谱的领军企业。历经多年发展，伍丰仪器将液相色谱的配置、应用越来越丰富化，技术也走向行业前端，在国内的市场占有率名列前茅。 　　借此盛展召开之际，伍丰仪器重量级成员全新第三代LC-100液相色谱仪、LC-80 ChroMini液相色谱仪重磅来袭，尽显品牌领先风采。</p>
				</div>
			</div>
			<div class="con-right1">
				<p class="backlist" @click="back">返回列表</p>
				<p class="x-r-shang">
					<span class="shangyipian">上一篇</span>
					<span class="r-x"></span>
				</p>
				<div class="x-r-wen" v-for="h in shangnew">
					<p>{{h.createTime}}</p>
					<p>{{h.title}}</p>
				</div>
				<p class="x-r-shang">
					<span class="shangyipian">下一篇</span>
					<span class="r-x"></span>
				</p>
				<div class="x-r-wen" v-for="x in xianew">
					<p>{{x.createTime}}</p>
					<p>{{x.title}}</p>
				</div>
				<p class="remen">热门新闻</p>
				<p class="x-r-xin" v-for="f in fivenew">{{f.title}}</p>
			</div>
			</div>
		</div>
		<div class="footer">
			<div class="foot">
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
	</div>
</template>

<script>
	export default {
		data() {
			return {
				news: '',
				arr: [],
				types: '',
				firstnew: [],
				riqi: [],
				zuinews: '',
				zuinewinfo:[],
				fivenew: '',
				shangnew: [],
				xianew: [],
				arrs:'',
				id:this.$route.params.ids,
				iphone:localStorage["username"],
				dianhua:false,
				us:true,
			}
		},
		mounted: function() {
			this.ermennews()
			this.firstxin();
//			console.log(this.id)
			if(this.iphone == '' || this.iphone == undefined) {
				this.us = true;
				this.dianhua = false
			} else {
				this.us = false;
				this.dianhua = true
			}
//			if(this.id==''||this.id==undefined){
//				this.fined();
//				this.ermennews()
//			}else{
//				this.yin = false;
//				this.xian = true;
//				this.firstxin();
//				this.ermennews()
//				
//			}
//			if(this.id==''||this.id==undefined){
//				
//			}
		},
		methods: {
			pingtai(){
				this.types=1
				console.log(this.types)
				this.fined()
			},
			hangye(){
				this.types=2
				this.fined()
			},
			zhengce(){
				this.types=3
				this.fined()
			},
			ermennews(){
				//详情页面右边的五条新闻
				this.$ajax.post(this.$Url + "/ne/sNHn", this.$qs.stringify({})).then(data => {
						console.log(data)
						this.fivenew = data.data.data.list

					})
					.catch(function(error) {
						console.log(error);
					});
			},
			firstxin(id) {
				console.log(id);
				let Id=id
				if(Id==''||Id==undefined){
					Id=this.id
				}
				console.log(Id)
				this.yin = false;
				this.xian = true;
				this.$ajax.post(this.$Url + "/ne/gN", this.$qs.stringify({
						id: Id,
					})).then(data => {
						console.log(data)
						this.zuinewinfo.push(data.data.data.info)
					})
					.catch(function(error) {
						console.log(error);
					});
				//上一篇的新闻
				this.$ajax.post(this.$Url + "/ne/sNuad", this.$qs.stringify({
						id: Id,
					})).then(data => {
						console.log(data)
						this.shangnew.push(data.data.data.previous)
						console.log(this.shangnew)
						this.xianew.push(data.data.data.next)
						console.log(this.xianew)
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			back() {
				this.$router.push({
					name: 'News',
				});
			}, 
			flushCom: function() {
				this.$router.go(0);
			},

		},
	}
</script>

<style scoped>
	@import "../assets/css/news.css";
</style>