<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:auto;
  width:100%;
 
}
.el-carousel__indicators {
		width: 100px;
		height: 15px;
		position: absolute !important;
		bottom: 8px !important;
		left: 48%;
	}
	
	.el-carousel__indicators li {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #fff;
		margin-left: 10px;
		padding: 0px !important;
	}
	.el-carousel__button {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #fff;
	}
	.el-carousel{
		height: 100% !important;
		overflow: hidden;
	}
	.el-carousel__container {
		height: 100% !important;
	}
	.el-carousel__item img {
		width: 100%;
		height: 100%;
		/*color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 450px;*/
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	.el-carousel__item:nth-child(2n+1){
		background-color:#fff !important;
	}
	.el-carousel__item:nth-child(2n){
		background-color:#fff !important;
	}
	.el-input__inner{
	background-color:rgba(255,255,255,0) !important;
	border:none !important;
	color:#ccc;
	width:90px !important;
	height:20px !important;
	font-size:14px;
}
.el-input__suffix{
	right:-7px;
	top:11px !important;
}
</style>
