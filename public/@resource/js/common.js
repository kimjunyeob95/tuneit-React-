$(function () {
    
    $(document).on('mouseenter','#header .gnb-wrap .gnb > li',function () {
        $(this).addClass('onmouse').siblings('li').removeClass('onmouse');
        //$('header').addClass('active');
    }).on('mouseleave','#header .gnb-wrap .gnb > li',function () {
        $(this).removeClass('onmouse');
        //$('header').removeClass('active');
    });
    $(document).on('click','#header .menu-open', function () {
        $('#header').addClass('moblie-on');
        $('html,body').css({
            height: '100%',
            overflow: 'hidden'
        });
    });

    $(document).on('click','#header .menu-close', function () {
        $('#header').removeClass('moblie-on');
        $('html,body').css({
            height: 'auto',
            overflow: 'visible'
        });
    });

    // 탑버튼
    $(document).on('click','.btn-top',function () {
        $.fn.fullpage.moveTo(1);
    });

    
    // 팝업 닫기
    $(document).on('click','.pop-close',function () {
        $(this).parents('.layer-popup').hide();
        
        if( $(window).width() > 960 ) {
            $('html, body').css({height:'100%',overflow:'hidden'});
            $.fn.fullpage.setAllowScrolling(true); // 20200921 추가
        } else if ( $(window).width() < 960 ) {
            $('html, body').css({height:'initial',overflow:'visible'});
        }
    });
    
    // TAB
    $('.tabs li a').each(function () {
        var this_href = $(this).attr('href');
        $(this).click(function (e) {
            e.preventDefault();
            //탭활성화
            $(this).parent('li').addClass('active').siblings('li').removeClass('active');
            //타켓 디스플레이
            $(this_href).addClass('active').siblings('.tab-content').removeClass('active');
        });
    });
    
    
    
    $(window).resize(function () {
        gnbLine();
    });
    
});
