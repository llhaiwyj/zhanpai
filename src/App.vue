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
@import './common/font.css'
*{
	font-family: '思源黑体';
	margin:0px;
	padding:0px;
}
body{
	margin:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:auto;
  width:100%;
 
}
a{
	color:#fff;
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
		background-color:rgba(255,255,255,0.3) !important;
		margin-left: 10px;
		padding: 0px !important;
	}
	.el-carousel__indicators--outside button{
		background-color:rgba(255,255,255,1) !important;
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
	.el-carousel__arrow{
		width:32px;
		height:64px;
		border-radius: 0px !important;
		background:#000 !important;
		background-color:rgba(0,0,0,0.3) !important;
	}
	.el-carousel__arrow--right{
		right:6px;
	}
	.el-carousel__arrow--left{
		left:6px;
	}
	.el-carousel__arrow i{
		font-size: 25px;
	}
	/*.el-carousel__button{
		width:0px !important;
		height:0px !important;
	}*/
#xia .el-select{
	position: absolute !important;
    left: 18px !important;
    top: 5px !important;
    width: 30px !important;
    z-index: 999;
}
#xia .el-input__inner{
	background-color:rgba(255,255,255,0) !important;
}
#xia .el-input__suffix {
    right: -27px !important;
   
}
#xia .el-input__inner{
	color:rgba(255,255,255,0.8) !important;
	border:none !important;
}
#xia .el-input--suffix .el-input__inner{
	padding-left:0px !important;
	padding-right:0px !important;
}
#xia .el-scrollbar{
	width:50px !important;
	background-color:rgba(255,255,255,0) !important;
}
#xia .el-select-dropdown__list{
	background-color:rgba(255,255,255,0) !important;
	text-align: center;
	color: #333;
}
#xia .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
	background-color:rgba(255,255,255,0) !important;
}
#xia .el-select-dropdown{
	/*background-color:rgba(255,255,255,0.8) !important;*/
	background: #fff !important;
	border:none !important;
}
#xia .popper__arrow{
	left:19px !important;
}
#xia .el-select-dropdown__item{
	color: #333 !important;
}
</style>
