<template>
	<div class="footer">
			<div class="foot">
				<div class="wei">
					<ul class="weinav">
						<li @click="first">首页</li>
				        <li @click="news">新闻资讯</li>
						<li @click="prod">产品中心</li>
						<li @click="buy">求购信息</li>
						<li @click="shang">商务合作</li>
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
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted:function(){
			
		},
		created() {
			
		},
		methods: {
			first(){
				this.$router.push({
					name:"Index",
				})
			},
			news(){
				this.$router.push({
					name:"News",
				})
			},
			prod(){
				this.$router.push({
					name:"Product",
				})
			},
			buy(){
				this.$router.push({
					name:"Buyinformation",
				})
			},
			shang(){
				this.$router.push({
					name:"Enterprise",
				})
			},
		},
	}
</script>

<style scoped>
	@import "../assets/css/share/foot.css";
</style>