<template>
	<div class="enterprise">
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
					<router-link to="./News" @click.native="flushCom">3D展馆</li></router-link>
					<router-link to="./Product" @click.native="flushCom"><li>产品中心</li></router-link>
					<router-link to="./Buyinformation" @click.native="flushCom"><li>求购信息</li></router-link>
					<router-link to="./Enterprise" @click.native="flushCom"><li>商务合作</li></router-link>
				</ul>
				<button class="kaitong" @click="zhan">开通展位</button>
			</div>
		</div>
		<div class="search">
			<input type="text" placeholder="请输入搜索内容" class="find" />
			<p class="quanzhan">搜全站</p>
			<p class="souzhanwei">搜本展位</p>
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
						<p class="bianhao">展位编号：{{i.license}}<span>证</span></p>
						<p class="zhuying"><span class="zy">主营产品：</span><span class="jt">{{i.product}}</span></p>
						<p class="hangye"><span class="zy">关注行业：</span><span class="jt">{{i.trades}}</span></p>
						<p class="moshi"><span class="zy">经营模式：</span><span class="jt">生产商</span></p>
						<p class="diqus"><span class="zy">所在地区：</span><span class="jt">{{i.site}}</span></p>
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
						<div class="qyjj">公司简介<span class="more">查看更多</span></div>
						<p class="jieshao">{{i.introduce}}</p>
					</div>
					<div class="tuijianxhanpin">
						<div class="tjcp">推荐产品<span class="more">查看更多</span></div>
						<ul class="shangpinshow">
							<li v-for="item in ductlist">
								<img :src="item.imgUrl" class="shangpin" />
								<div class="jieshaos">
									<p class="chanpinming">{{item.pname}}</p>
									<p class="diqu">
										<span class="diming">天津</span>
										<span class="lilan">{{item.clickNo}}人看过</span>
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
							</li>
						</ul>
					</div>
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
				<p class="lainxi">泰富总部 0731-52837000 泰富营销 0731-52837288 <br/>总部地址：湖南省湘潭市九华经济技术开发区奔驰路6号 <br/>E-mail：sales@tidfore.com</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ente: [],
				ductlist: '',
				tree: '',
				lianxi:true,
				fangshi:false,
				
			}
		},
		mounted: function() {
			this.fined();
			
		},
		methods: {
			fined() {
				this.$ajax.post(this.$Url+"/fi/getFirm", this.$qs.stringify({
						id: 1,
					})).then(data => {
						console.log(data)
						this.ente.push(data.data.data.info)
						console.log(this.ente)
						this.ductlist = data.data.data.productList
						this.tree = data.data.data.treeList
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			huoqu(){
				this.lianxi=false
				this.fangshi=true
			},
			flushCom:function(){
				this.$router.go(0);
			},
			zhan(){
				window.location.href = encodeURI("http://39.105.31.48:8080/ud/index.html?id="+ this.cont)
			},
		},
	}
</script>

<style scoped>
	@import "../assets/css/enterprise.css";
</style>