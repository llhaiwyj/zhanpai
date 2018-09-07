<template>
	<div class="con-left">
		<div class="leibie">
			<p class="jtfenlei" @click="qicai">实验室器材</p>
			<p class="jtfenlei" @click="fuwu">实验室服务</p>
			<p class="jtfenlei" @click="jiaju">实验室家具</p>
			<p class="jtfenlei" @click="haocai">试剂与耗材</p>
		</div>
		<div class="zhuangtai">
			<p class="yijiejues" @click="yijiejue">已解决</p>
			<p class="jingxing" @click="weijiejue">未解决</p>
		</div>
		<div class="chaxun">
			<p class="fabutime">发布时间
				<span class="shang el-icon-caret-top"></span>
				<span class="xia el-icon-caret-bottom"></span>
			</p>
			<p class="suozaidiqu">所在地区
				<span class="xia el-icon-caret-bottom"></span>
			</p>
			<p class="suozaidiqu">经营模式
				<span class="xia el-icon-caret-bottom"></span>
			</p>
			<p class="suozaidiqu">资深认证
				<span class="xia el-icon-caret-bottom"></span>
			</p>
			<p class="chazhao">
				<input type="text" class="sousuokuang" placeholder="请输入关键字" />
				<img src="../assets/img/icon_search.png" />
			</p>
		</div>
		<div class="list">
			<ul class="qiulist">
				<li v-for="i in infomation" @click="inforxiang(i.id)">
					<p class="li-left">
						<span class="listname">{{i.title}}</span>
						<span class="listnamejie">{{i.content}}</span>
					</p>
					<p class="li-right">
						<span class="li-right-l">
							<span class="renmuch">
								<img src="../assets/img/persens.png" class="xiaoren" />
								<span class="numb">{{i.pageView}}</span>
						    </span>
						<!--<span class="liuyan">
								<img src="../assets/img/icon－x.png" class="xiaoren" />
								<span class="numb">1</span>
							</span>-->
						</span>
						<span class="li-right-r">
							<span class="diming">{{i.addressA}} {{i.addressC}}</span>
						<span class="dhijiant">{{i.createTime}}</span>
						</span>
					</p>
				</li>
				<!--<li>
					<p class="li-left">
						<span class="listname">求购二等标准密度计</span>
						<span class="listnamejie">购二等标准密度计一套，测氨水用的。急需  联系我</span>
					</p>
					<p class="li-right">
						<span class="li-right-l">
							<span class="renmuch">
								<img src="../assets/img/persens.png" class="xiaoren"/>
								<span class="numb">1</span>
						</span>
						<span class="liuyan">
								<img src="../assets/img/icon－x.png" class="xiaoren"/>
								<span class="numb">1</span>
						</span>
						</span>
						<span class="li-right-r">
							<span class="diming">河北 唐山</span>
						<span class="dhijiant">2018/05/31 16:21</span>
						</span>
					</p>
				</li>-->
			</ul>
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
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentPage: 1,
				total: '',
				length: 10,
				infomation: '',
				typea: '',
				solve: '',
				id: '',
				xiangqingye: '',
				zhi:
			}
		},
		mounted: function() {
			this.fined();
		},
		methods: {
			handleCurrentChange(page) {
				console.log(page)
				this.currentPage = page;
			}, //改变条数触发
			handleIndexChange(index) {
				console.log(index)
				this.length = index;
			},
			fined() {
				this.$ajax.post(this.$Url + "/as/sAty", this.$qs.stringify({
						typea: this.typea,
						solve: this.solve
					})).then(ret => {
						console.log(ret)
						this.infomation = ret.data.data.list
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			qicai() {
				this.typea = 0;
				this.fined();
			},
			fuwu() {
				this.typea = 1;
				this.fined();
			},
			jiaju() {
				this.typea = 2;
				this.fined();
			},
			haocai() {
				this.typea = 3;
				this.fined();
			},
			yijiejue() {
				this.solve = 1;
				this.fined();
			},
			weijiejue() {
				this.solve = 0;
				this.fined();
			},
			inforxiang(id) {
				this.id = id
				this.$ajax.post(this.$Url + "/as/gA", this.$qs.stringify({
						id: this.id
					})).then(ret => {
						console.log(ret)
						this.xiangqingye = ret.data.data.list
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			flushCom: function() {
				this.$router.go(0);
			}
		},
	}
</script>

<style scoped>
	@import "../assets/css/buyinformation.css";
</style>