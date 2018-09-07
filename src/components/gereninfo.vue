<template>
	<div>
		<div class="gereninfor" v-show="inforhide">
			<p class="el-icon-close guanbi" @click="guan"></p>
			<img :src="userinfo.viaUrl" class="i-tx" />
			<div class="i-info">
				<p class="i-gs">{{userinfo.nickname}}</p>
				<p class="i-zh">
					<span>账号：</span>{{userinfo.account}}
				</p>
				<p class="i-xb">
					<span>性别：</span>{{userinfo.sex}}
				</p>
				<p class="i-xb">
					<span>手机：</span>{{userinfo.iphone}}
				</p>
				<p class="i-xb">
					<span>微信：</span>{{userinfo.wechat}}
				</p>
				<p class="i-qq">
					<span>QQ：</span>{{userinfo.qq}}
				</p>
			</div>
			<div class="i-czuo">
				<p @click="xiumima">修改密码</p>
				<button @click="bianji">编辑</button>
			</div>
		</div>
		<div class="i-xiugai" v-show="inforxiugai">
			<div class="i-xg">
				<div class="i-sh">
					<img :src="userinfo.viaUrl" class="i-xiu-tou" />
					<el-upload class="upload-demo" :action="serverUrl" :on-success="uploadSuccess" :on-error="uploadError" :file-list="fileList2" :show-file-list="false">
						<button size="small" type="primary" class="i-shang">上传图片</button>
					</el-upload>
				</div>
				<div class="i-xiu-name">
					<p class="x-na">昵称：</p>
					<input type="text" class="x-n" v-model="userinfo.nickname" />
					<!--<p class="x-n" contenteditable="true" v-model="userinfo.nickname">{{userinfo.nickname}}</p>-->
				</div>
				<div class="i-xiu-xb">
					<p class="x-na">性别：</p>
					<p class="x-xing"><input type="radio" id="one" value="0" name="gender" v-model="sex">男<input type="radio" id="two" value="1" name="gender" v-model="sex">女</p>
				</div>
				<div class="i-xiu-xb">
					<p class="x-na">手机号：</p>

					<input type="text" class="x-xing" v-model="userinfo.iphone" />
					<!--<p class="x-xing" contenteditable="true" v-model="userinfo.iphone">{{userinfo.iphone}}<!--<span>修改</span>-->
					<!--</p>-->
				</div>
				<div class="i-xiu-xb">
					<p class="x-na">微信：</p>
					<input type="text" class="x-xing" v-model="userinfo.wechat" />
					<!--<p class="x-xing" contenteditable="true" v-model="userinfo.wechat">{{userinfo.wechat}}<!--<span>绑定</span>-->
					<!--</p>-->
				</div>
				<div class="i-xiu-xb">
					<p class="x-na">QQ：</p>
					<input type="text" class="x-xing" v-model="userinfo.qq" />
					<!--<p class="x-xing" contenteditable="true" v-model="userinfo.qq">{{userinfo.qq}}-->
					<!--<span>绑定</span>-->
					<!--</p>-->

				</div>
				<div class="i-xiu-an">
					<button @click="xiuwan">确定</button>
					<button @click="quxiao">取消</button>
				</div>
			</div>
		</div>
		<div class="x-mima" v-show="mima">
			<p class="x-m-m">修改密码</p>
			<div class="ymima">
				<p class="x-yuan">原密码：</p>
				<input type="password" class="x-y-nei" v-model="yuanpass" />
			</div>
			<div class="shemima">
				<p class="x-yuan">设置密码：</p>
				<input type="password" class="x-y-nei" v-model="shepass" />
			</div>
			<div class="shemima">
				<p class="x-yuan">确认密码：</p>
				<input type="password" class="x-y-nei" v-model="truepass" />
			</div>
			<div class="i-xiu-anniu">
				<button @click="queding">确定</button>
				<button @click="qx">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				inforhide: false,
				inforxiugai: false,
				mima: false,
				//个人信息
				userinfo: '',
				nickname: '',
				sex: 0,
				iphones: '',
				wechat: '',
				qq: '',
				serverUrl: this.$Url + "/upload/singleUploadImg",
				fileList2: [],
				touimg: '',
				yuanpass: '',
				shepass: '',
				truepass: '',
			}
		},
		mounted:function(){
			this.info()
		},
		created() {
			
		},
		methods: {
			guan() {
				this.inforhide = false
				this.$emit('dianjis',false);
			},
			queding() {
				if(this.shepass == this.yuanpass) {
					this.$message.error("设置的密码与原密码一致，请重新填写")
				}else if(this.shepass != this.truepass) {
					this.$message.error("两次密码不一致，请核对")
				}else{
					this.xiuwan()
				}
				
			},
			uploadError(file, fileList) {
				console.log(file, fileList);
			},
			uploadSuccess(res, file) {
				console.log(res)
				console.log(file.response.data.imgUrl);
				this.userinfo.viaUrl = file.response.data.imgUrl
			},
			//			huosex(){
			//				console.log(this.sexs)
			//			},
			//			huosexs(){
			//				console.log(this.sex)
			//			},
			xiuwan() {
				console.log(this.userinfo.nickname)
				console.log(this.userinfo.iphone)
				this.$ajax
					.post(this.$Url + "/st/updStaff", this.$qs.stringify({
						nickname: this.userinfo.nickname,
						viaUrl: this.userinfo.viaUrl,
						iphone: this.userinfo.iphone,
						qq: this.userinfo.qq,
						wechat: this.userinfo.wechat,
						sex: this.sex,
						password: this.truepass,
					}))
					.then(datas => {
						console.log(datas)
						if(datas.data.code == '1') {
							this.$message.success(datas.data.msg)
							this.inforxiugai = false
							this.mima=false
							this.inforhide = true
							this.info()
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			quxiao() {
				this.inforxiugai = false
				this.inforhide = true
			},
			qx() {
				this.mima = false
				this.inforhide = true
			},
			info() {
				this.inforhide = true
				this.$ajax
					.post(this.$Url + "/st/sS", this.$qs.stringify({

					})).then(data => {
						console.log(data)
						this.userinfo = data.data.data.user
						if(this.userinfo.sex == 0) {
							this.userinfo.sex = "男"
						} else if(this.userinfo.sex == 1) {
							this.userinfo.sex = "女"
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			bianji() {
				this.inforhide = false
				this.inforxiugai = true
			},
			xiumima() {
				this.inforhide = false
				this.inforxiugai = false
				this.mima = true
			},
			
		},
	}
</script>

<style>
   @import "../assets/css/share/gereninfo.css";
</style>