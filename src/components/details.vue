<template>
	<div class="details">
		<div class="header">
			<div class="h-top">
				<img src="../assets/img/dingwei.png" class="dw-ioin" />
				<p class="city">天津</p>
				<p class="login">嘉科仪科技 </p>
				<img src="" class="xinjian" />
				<p class="zhuce">消息 <span>1</span></p>
				<ul class="nav">
					<li>我的浏览&nbsp;&nbsp;|</li>
					<li>我的收藏&nbsp;&nbsp;|</li>
					<li>个人中心&nbsp;&nbsp;|</li>
					<li>手机版 </li>
				</ul>
			</div>
			<div class="daohang">
				<img src="../assets/img/logo.png" class="logo" />
				<ul class="dh">
					<router-link to="./Index" @click.native="flushCom"><li>首页</li></router-link>
					<li @click="zhan">3D展馆</li>
					<router-link to="./Product" @click.native="flushCom"><li>产品中心</li></router-link>
					<router-link to="./Buyinformation" @click.native="flushCom"><li>求购信息</li></router-link>
					<router-link to="./Enterprise" @click.native="flushCom"><li>商务合作</li></router-link>
				</ul>
				<button class="kaitong" @click="zhan">开通展位</button>
			</div>
		</div>
		<div class="content">
			<div class="tag">{{qinginfo.one}}>{{qinginfo.two}}>{{qinginfo.three}}>{{qinginfo.four}}</div>
			<div class="cont">
				<div class="cont-left">
					<div class="chanpintou">
						<img :src="qinginfo.imgUrl" class="chanpin"/>
						<div class="wenzijieshao">
							<p class="fen">分享<img src=''/></p>
							<p class="chanpinming">{{qinginfo.pname}}</p>
							<p class="xiaochanpinming">{{qinginfo.firmName}}</p>
							<p class="sa">
								<span class="diqu">地区：{{qinginfo.firmAddress}}</span>
								<span class="changshang">厂商类型：{{qinginfo.firmType}}</span>
							</p>
							<p class="ba">
								<span class="diqu">品牌：{{qinginfo.brandName}}</span>
								<span class="changshang">型号：{{qinginfo.version}}</span>
							</p>
							<div class="ca">
								<p class="lainxifangshi">联系方式</p>
								<p class="phone">
									<span>电话：17610038211</span>
									<span>QQ:1224948850</span>
									<span>微信:17610038211</span>
								</p>
							</div>
							<p class="dc">应用领域：{{qinginfo.field}}</p>
						</div>
						<div class="suotu">
							<img :src="qinginfo.imgUrl" class="suot"/>
							<img :src="qinginfo.imgUrl" class="suot"/>
							<img :src="qinginfo.imgUrl" class="suot"/>
						</div>
					</div>
					<div class="chanpinjieshao">
						<p class="cpjs">产品介绍</p>
						<p class="xian"></p>
						<p class="cahnpinjjie">{{qinginfo.introduce}}</p>
					</div>
					<!--<div class="chanpintedian">
						<p class="cpjs">产品特点</p>
						<p class="xian"></p>
						<p class="cahnpintet">该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪该款仪器将伍丰公司新开发的微型串联泵、微型可变波长紫外检测器、色谱柱箱、手动进样阀整合在一起构成一体式液相色谱仪</p>
					</div>-->
					<div class="chanpincanshu">
						<p class="cpjs">产品参数</p>
						<p class="xian"></p>
						<div class="wenben">{{qinginfo.detailed}}</div>
					</div>
					<div class="chanpinpeizhi">
						<p class="cpjs">产品配置</p>
						<p class="xian"></p>
						<div class="wenben1">{{qinginfo.configuration}}</div>
					</div>
				</div>
				<div class="cont-right">
					<p class="tongleituijian">同类推荐</p>
					<div class="imgming" v-for="item in tonglei">
						<img :src="item.url" class="imgxian"/>
						<p class="imga"><span>{{item.pname}}</span></p>
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
				<p class="lainxi">泰富总部    0731-52837000  泰富营销   0731-52837288  <br/>总部地址：湖南省湘潭市九华经济技术开发区奔驰路6号   <br/>E-mail：sales@tidfore.com</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				qinginfo: this.$route.params.xianginfos,
				tonglei:'',
			}
		},
		mounted: function() {
			this.fined()
			console.log(this.qinginfo)
		},
		methods: {
			fined(){
				this.$ajax.post(this.$Url+"/fp/getPSame", this.$qs.stringify({})).then(data => {
						console.log(data)
						this.tonglei = data.data.data.list
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			flushCom:function(){
				this.$router.go(0);
			},
			zhan(){
				window.location.href = encodeURI("http://39.105.31.48:8080/ud/index.html?keyword=")
			},

		},
	}
</script>

<style scoped>
	@import "../assets/css/details.css";
</style>