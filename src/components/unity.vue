<template>
	 <div class="webgl-content">
      <div id="gameContainer" style="width: 1366px; height: 768px"></div>
       <a href="#" style="left: 1366px/2; position:absolute; =top:768px/2;" id="textNote">{{item}}</a>
    </div>
</template>

<script>
	import  {UnityLoader} from '../assets/js/UnityLoader.js'
    import {UnityProgress} from '../assets/js/UnityProgress.js'
	const zhi = '';
	const admin='admin';
	var gameInstance = UnityLoader.instantiate("gameContainer", "Build/UnityWebGL.json", {onProgress: UnityProgress});
	console.log(gameInstance)
	var xmlhttp = null;
	export default {
		zhi,
		data() {
			return {
				item:this.$route.params.chuanzhi,
			}
		},
		mounted: function() {
			this.GetShellSchemLoadType()
		},
		methods: {
			
//			GetShellSchemLoadType(str) {
//				gameInstance.SendMessage("OtherPlatFormsObj", "GetAllShellSchemLoadMode",this.item)
//			},
//			GetShellSchemLoadType(str) {
//				if(str.length == 0) {
//					document.getElementById("txtHint").innerHTML = "";
//					return;
//				}
//				if(window.XMLHttpRequest) { // 对于 IE7+, Firefox, Chrome, Opera, Safari  
//					xmlhttp = new XMLHttpRequest()
//				} else { // 对于 IE6, IE5  
//					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
//				}
//				xmlhttp.onreadystatechange = function() {
//					if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//						alert(xmlhttp.responseText);
//						alert(zhi)
//						gameInstance.SendMessage("OtherPlatFormsObj", "GetAllShellSchemLoadMode",zhi)
//						
//					}
//				}
//				xmlhttp.open("GET", str, true)
//				xmlhttp.send()
//			},
			GetUserID() {
                    gameInstance.SendMessage("OtherPlatFormsObj", "GetUserID", this.item);
            }
		},
	}
</script>

<style>
   @import "../assets/css/style.css";
</style>