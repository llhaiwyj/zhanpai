<template>
	<div class="con-left">
		<div class="title">
			<p class="midu">求购二等标准密度计</p>
			<!--<button class="huifu">回复</button>-->
		</div>
		<div class="xiangxi">
			<div class="yilun">
				<!--<div class="shang1">
					<img src="" class="bioa" />
					<p class="shangname">天马衡基仪…</p>
				</div>-->
				<p class="x-title">{{xiangqingyes.title}}</p>
				<p class="chnegshi">{{xiangqingyes.addressA}}  {{xiangqingyes.addressB}}  {{xiangqingyes.addressC}}</p>
				<p class="shijian">{{xiangqingyes.createTime}}</p>
			    <p class="x-co" v-html="xiangqingyes.content"></p>
				<p class="x-x"></p>
				<!--<span>回复</span>-->
			</div>
			<!--<div class="yilun">
				<div class="shang">
					<img src="" class="bioa" />
					<p class="shangname">天马衡基仪…</p>
				</div>
				<p class="lianix">购二等标准密度计一套，测氨水用的。急需 联系我</p>
				<p class="chnegshi">天津</p>
				<p class="shijian">2018-05-31 16:21<span>回复</span></p>
			</div>
			<div class="yilun">
				<div class="shang">
					<img src="" class="bioa" />
					<p class="shangname">天马衡基仪…</p>
				</div>
				<p class="lianix">购二等标准密度计一套，测氨水用的。急需 联系我</p>
				<p class="chnegshi">天津</p>
				<p class="shijian">2018-05-31 16:21<span>回复</span></p>
			</div>
			<div class="yilun">
				<div class="shang">
					<img src="" class="bioa" />
					<p class="shangname">天马衡基仪…</p>
				</div>
				<p class="lianix">购二等标准密度计一套，测氨水用的。急需 联系我</p>
				<p class="chnegshi">天津</p>
				<p class="shijian">2018-05-31 16:21<span>回复</span></p>
			</div>
			<div class="yilun">
				<div class="shang">
					<img src="" class="bioa" />
					<p class="shangname">天马衡基仪…</p>
				</div>
				<p class="lianix">购二等标准密度计一套，测氨水用的。急需 联系我</p>
				<p class="chnegshi">天津</p>
				<p class="shijian">2018-05-31 16:21<span>回复</span></p>
			</div>
			<div class="yilun">
				<div class="shang">
					<img src="" class="bioa" />
					<p class="shangname">天马衡基仪…</p>
				</div>
				<p class="lianix">购二等标准密度计一套，测氨水用的。急需 联系我</p>
				<p class="chnegshi">天津</p>
				<p class="shijian">2018-05-31 16:21<span>回复</span></p>
			</div>-->
			<!--<div class="block">
				<el-row>
					<el-col>
						<div class="pages">
							<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="length" layout="total, sizes, prev, pager, next, jumper" :total="total">
							</el-pagination>
						</div>
					</el-col>
				</el-row>
			</div>-->
			<!--<p class="fabiao">发表回复</p>
			<textarea class="neirong"></textarea>
			<button class="fab">发表</button>-->
		</div>
	</div>
</template>

<script>
	export default {
	    props: ['xiangqingyes'],
		data() {
			return {
				
			}
		},
		mounted: function() {
			console.log(this.xiangqingyes)
		},
		methods: {
			
		},
	}
</script>

<style scoped>
   @import "../assets/css/buyinformation.css";
</style>