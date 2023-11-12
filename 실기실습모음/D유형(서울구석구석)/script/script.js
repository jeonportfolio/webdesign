$(function (){
    //슬라이드 
    let currentIndex = 0;
    $(".imageWrap").append($(".image").first().clone(true)); 

    setInterval(function(){
        currentIndex++;
        $(".imageWrap").animate({marginTop: -400 * currentIndex + "px"},600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".imageWrap").animate({marginTop: 0},0);
                currentIndex = 0;
            },700);
        }; 
    },3000);

    //메뉴 스크립트

    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(300);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(300);
    });


    //팝업 스크립트

    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });

});