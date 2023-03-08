$(document).ready(function(){
    $("p").on({
        mouseenter:function(){
            $(this).css("background-color","#F05454");
            $(this).css("color","white");
        },
        mouseleave:function() {
        $(this).css("background-color","#DDDDDD");
        $(this).css("color","black");
        }
    });
});