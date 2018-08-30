<template>
	<div class="collection">
		<div class="header">
			<p class="xain"></p>
			<p class="xain1"></p>
			<div class="header-zi">
				<div class="h-top">
					<img src="../assets/img/dingwei.png" class="dw-ioin" />
					<p class="city">天津</p>
					<p class="login">嘉科仪科技 </p>
					<img src="" class="xinjian" />
					<p class="zhuce">消息 <span>1</span></p>
					<ul class="nav">
						<!--<li>我的浏览&nbsp;&nbsp;|</li>
					<li>我的收藏&nbsp;&nbsp;|</li>-->
						<li>我的收藏&nbsp;&nbsp;|</li>
						<li>企业后台&nbsp;&nbsp;|</li>
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
			</div>
		</div>
		<div class="content">
			<div class="cont">
				<p class="shoucang">我的收藏</p>
				<div class="canglei">
					<button class="zahnpin">收藏展品</button>
					<button class="zahnwei">收藏展位</button>
				</div>
				<div class="shoucangshu">
					<span>全部23</span>
					<span>全部全部全部全部23</span>
				</div>
				<div class="zhanpin">
					<div class="zp">
						<img src="../assets/img/img-zhanwei.png"  />
						<p>气体检测仪器 气体检测 E32</p>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="foot">
				<div class="wei">
					<ul class="weinav">
						<li>|&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;|</li>
						<li>3D展馆&nbsp;&nbsp;|</li>
						<li>产品中心&nbsp;&nbsp;|</li>
						<li>求购信息&nbsp;&nbsp;|</li>
						<li>商务合作&nbsp;&nbsp;|</li>
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

<script>
</script>

<style scoped>
	@import "../assets/css/collection.css";
</style>