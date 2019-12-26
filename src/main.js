
// night mode
temp = false;
$(document).ready(function(){

        $(".night-mode").on("click", nightModeRun);
            
        function nightModeRun(){
                    
            if(temp == false){
                $("#content").css({"background-color": "#17202A", "color": "white"});
                temp = true;
            }
                
            else if(temp == true){
                $("#content").css({"background-color": "white", "color": "black"});
                temp = false;
            }
        }
});



