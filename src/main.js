
// night mode
temp = false;
$(document).ready(function(){

        $(".night-mode").on("click", nightModeRun);
            
        function nightModeRun(){
                    
            if(temp == false){
                $("#container").css({"background-color": "#2d2d2d", "color": "#BDBDBD"});
                $("#nav a").css({"color": "#BDBDBD"});
                $("#nav a").hover(function(){
                    $(this).css({"border-bottom": "3px solid white"})
                }, function(){
                    $(this).css({"border-bottom": "3px solid #1C2833"})
                });
                temp = true;
            }
                
            else if(temp == true){
                $("#container").css({"background-color": "white", "color": "black"});
                $("#nav a").css({"color": "black"});
                temp = false;
            }
        }
});



