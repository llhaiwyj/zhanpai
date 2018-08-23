  const zhi='';
var gameInstance = UnityLoader.instantiate("gameContainer", "Build/UnityWebGLExhibitionHall.json", { onProgress: UnityProgress });
        function GetHallDataFromServer(str) {
            var xmlhttp = null;
            if (str.length == 0) {
                document.getElementById("txtHint").innerHTML = "";
                return;
            }
            if (window.XMLHttpRequest) {// 对于 IE7+, Firefox, Chrome, Opera, Safari  
                xmlhttp = new XMLHttpRequest();
            }
            else {// 对于 IE6, IE5  
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function (){
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                alert(xmlhttp.responseText);
                gameInstance.SendMessage("OtherPlatFormsObj", "GetAllShellSchemLoadMode", zhi);
            }
        }
            xmlhttp.open("GET", str, true);
            xmlhttp.send();
        }
        function SendConversationData(str) {
            //gameInstance.SendMessage("UnityToJSScriptObj", "ReceiveConversationDataFromServer", "Hello Unity!");
        }