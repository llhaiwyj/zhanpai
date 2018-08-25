<template>
	<div class="con-left">
		<div class="f-tit">
			<p class="f-biao">标题</p>
			<input class="f-biaocont" v-model="title" />
		</div>
		<div class="f-cont">
			<p class="f-xiang">详情</p>
			<div class="f-fuwe">
				<el-upload class="avatar-uploader" style="display:none" :action="serverUrl" :show-file-list="false" :on-success="uploadSuccess" :on-error="uploadError" :before-upload="beforeUpload">
				</el-upload>
				 <el-row v-loading="uillUpdateImg">
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
		<button class="f-truefabu" @click="truefa">确认发布</button>
	</div>
</template>

<script>
	import { newArr } from '../../static/city.js'
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
		data() {
			return {
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
				addressA:'',
				addressB:'',
				addressC:'',
				id:localStorage["Id"],
				leibie:'',
				a:'',
				imgs:[],
				iphoneNo:localStorage["username"],
				fenleis:[{
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
		},
		methods: {
			//diqu
			areaprov: function(even) {
				console.log(newArr)
				this.chengshis = [];
				this.provice = even.target.value
				console.log(this.provice)
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
			},
			city(even) {
				this.sanji=[];
				this.citys = even.target.value
				console.log(this.citys)
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
			},
			zheng(even) {
				this.zhen = even.target.value
			},
			fenlei(even){
				this.leibie = even.target.value
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
			uploadSuccess(res, file,) {
				console.log(res)
				// res为图片服务器返回的数据
				// 获取富文本组件实例
				let quill = this.$refs.myQuillEditor.quill;
				// 如果上传成功
				console.log(res);
				if(res.msg === "success" && res.data.imgUrl !== null) {
					// 获取光标所在位置
					let length = quill.getSelection().index;
					 console.log( res.info)
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
				for(let i in newArr) {
					if(newArr[i].id == this.provice) {
						this.addressA = newArr[i].areaName
					}
				};
				for(let i in newArr) {
					for(let k in newArr[i].list) {
						if(newArr[i].list[k].id == this.citys) {
							this.addressB = newArr[i].list[k].areaName
						}
					}
				};
				for(let i in newArr) {
					for(let k in newArr[i].list) {
						for(let j in newArr[i].list[k].list){
							if(newArr[i].list[k].list[j].id == this.zhen) {
								console.log(newArr[i].list[k].list[j].areaName)
							    this.addressC = newArr[i].list[k].list[j].areaName
						    }
						}
					}
				};
				for(let s in this.fenleis){
					if(this.fenleis[s].id==this.leibie){
						this.a=this.fenleis[s].label
					}
				};
				this.$ajax.post(this.$Url + "/as/iA", this.$qs.stringify({
						loginId:this.id,
						title:this.title,
						content:this.content,
						typeA:this.a,
						typeAId:this.leibie,
						addressA:this.addressA,
						addressB:this.addressB,
						addressC:this.addressC,
						addressAId:this.provice,
						addressBId:this.citys,
						addressCId:this.zhen,
						iphoneNo:this.iphoneNo,
					})).then(data => {
						console.log(data)
						if(data.data.msg=='success'){
							this.$emit('success');
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		},
	}
</script>

<style scoped>
	@import "../assets/css/buyinformation.css";
</style>