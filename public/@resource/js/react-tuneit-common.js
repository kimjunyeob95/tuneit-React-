const apiUrl = "https://dev.achakey.net";
var location_path = window.location.pathname;
var about_javascript = function(){
    var total_count;
    let articles= [];
    let total_articles = [];
    let total_articles_const = [];
    var language_select = $('.language-btn.active').data('language');
    $.ajax({ 
        url: apiUrl+"/api/v1/tuneit/news?lang="+language_select+"&page", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
        data: articles, // HTTP 요청과 함께 서버로 보낼 데이터 
        method: "GET", // HTTP 요청 메소드(GET, POST 등) 
        dataType: "json", // 서버에서 보내줄 데이터의 타입 
        success: function(data){
            total_count = Math.ceil(data.data.totalCount/3);
            for(var i=1; i<total_count+1;i++){
                var count = 1;
                $.ajax({ 
                    url: apiUrl+"/api/v1/tuneit/news?lang="+language_select+"&page="+i, // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
                    data: articles, // HTTP 요청과 함께 서버로 보낼 데이터 
                    method: "GET", // HTTP 요청 메소드(GET, POST 등) 
                    dataType: "json", // 서버에서 보내줄 데이터의 타입 
                    success: function(data){
                        articles.push(data.data.list);
                        if(count==total_count){
                            articles.map(function(article){
                                article.map(function(sub_article){
                                    total_articles.push(sub_article);
                                    total_articles_const.push(sub_article);
                                });
                            });
                        };
                    },
                    complete: function(){
                        count++;
                    }
                });
                
            };      
        },
        complete : function(){
            
        }
    });
    $(document).on('click','.language-btn', function(e){
        e.preventDefault();
        language_select = $(this).data('language');
        total_count = 0;
        articles= [];
        total_articles = [];
        total_articles_const = [];
        
        $.ajax({ 
            url: apiUrl+"/api/v1/tuneit/news?lang="+language_select+"&page", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
            data: articles, // HTTP 요청과 함께 서버로 보낼 데이터 
            method: "GET", // HTTP 요청 메소드(GET, POST 등) 
            dataType: "json", // 서버에서 보내줄 데이터의 타입 
            success: function(data){
                total_count = Math.ceil(data.data.totalCount/3);
                for(var i=1; i<total_count+1;i++){
                    var count = 1;
                    $.ajax({ 
                        url: apiUrl+"/api/v1/tuneit/news?lang="+language_select+"&page="+i, // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
                        data: articles, // HTTP 요청과 함께 서버로 보낼 데이터 
                        method: "GET", // HTTP 요청 메소드(GET, POST 등) 
                        dataType: "json", // 서버에서 보내줄 데이터의 타입 
                        success: function(data){
                            articles.push(data.data.list);
                            if(count==total_count){
                                articles.map(function(article){
                                    article.map(function(sub_article){
                                        total_articles.push(sub_article);
                                        total_articles_const.push(sub_article);
                                    });
                                });
                            };
                        },
                        complete: function(){
                            count++;
                        }
                    });
                    
                };      
            },
            complete : function(){
                
            }
        });
    });
    
    //news 튠잇 소식 자세히 보기
    $(document).on('click','.open-news',function(){
        total_articles=total_articles.sort(function(a,b){
            return b['id']-a['id'];
        });
        total_articles_const=total_articles_const.sort(function(a,b){
            return b['id']-a['id'];
        });
        var idx = Number($(this).data('idx'));
        var prev_idx;
        var next_idx;
        
        total_articles_const.forEach(function(item,index){
            if(item.id==idx){
                prev_idx = index-1;
                next_idx = index+1;
            };
        });
        const select_article = total_articles.filter(function(item){ return item.id==idx});
        if(select_article[0].imagePath != null){
            $('.detail img').attr('src',select_article[0].imagePath);
        }else{
            $('.detail img').attr('src','../@resource/images/@thumb/thumb_pop_img.jpg');
        }
        $('.cont-header .date').text(select_article[0].releaseDate);
        $('.cont-header .subject').text(select_article[0].title);
        $('.cont-header .text').text(select_article[0].summary);
        $('.cont-body .detail p').html(select_article[0].contents);
        if(total_articles_const[prev_idx] != null){
            $('.form-paging ul').children().eq(0).css('display','block');
            $('.form-paging ul').children().eq(0).children('a').attr('data-idx',total_articles_const[prev_idx].id);
            $('.form-paging ul').children().eq(0).children('a').text(total_articles_const[prev_idx].title);
        }else{
            $('.form-paging ul').children().eq(0).css('display','none');
        }
        if(total_articles_const[next_idx] != null){
            $('.form-paging ul').children().eq(1).css('display','block');
            $('.form-paging ul').children().eq(1).children('a').attr('data-idx',total_articles_const[next_idx].id);
            $('.form-paging ul').children().eq(1).children('a').text(total_articles_const[next_idx].title);
        }else{
            $('.form-paging ul').children().eq(1).css('display','none');
        }
        $('.pop-view').css('display','block');
        var screenWidth = $(window).innerWidth();
        if (screenWidth > 960) {
            $(".scrolling-area-y").mCustomScrollbar({
                axis: "y",
                autohideScrollbar: true,
                scrollInertia: 100
            });
        }
        
        $(window).resize(function() {
            var screenWidth = $(window).innerWidth();
            if (screenWidth > 960) {
                $(".scrolling-area-y").mCustomScrollbar({
                    axis: "y",
                    autohideScrollbar: true,
                    scrollInertia: 100
                });
            }
        });
        $('html,body').css({height:'100%',overflow:'hidden'});
        $.fn.fullpage.setAllowScrolling(false); 
        return false;
    });
    $(document).on('click','#prev-article', function(){
        total_articles=total_articles.sort(function(a,b){
            return b['id']-a['id'];
        });
        total_articles_const=total_articles_const.sort(function(a,b){
            return b['id']-a['id'];
        });
        var idx = Number($('#prev-article').attr('data-idx'));
        var prev_idx;
        var next_idx;
        total_articles_const.forEach(function(item,index){
            if(item.id==idx){
                prev_idx = index-1;
                next_idx = index+1;
            };
        });
        const select_article = total_articles.filter(function(item){return item.id==idx});
        if(select_article[0].imagePath != null){
            $('.detail img').attr('src',select_article[0].imagePath);
        }else{
            $('.detail img').attr('src','../@resource/images/@thumb/thumb_pop_img.jpg');
        }
        $('.cont-header .date').text(select_article[0].releaseDate);
        $('.cont-header .subject').text(select_article[0].title);
        $('.cont-header .text').text(select_article[0].summary);
        $('.cont-body .detail p').html(select_article[0].contents);
        if(total_articles_const[prev_idx] != null){
            $('.form-paging ul').children().eq(0).css('display','block');
            $('.form-paging ul').children().eq(0).children('a').attr('data-idx',total_articles_const[prev_idx].id);
            $('.form-paging ul').children().eq(0).children('a').text(total_articles_const[prev_idx].title);
        }else{
            $('.form-paging ul').children().eq(0).css('display','none');
        }
        if(total_articles_const[next_idx] != null){
            $('.form-paging ul').children().eq(1).css('display','block');
            $('.form-paging ul').children().eq(1).children('a').attr('data-idx',total_articles_const[next_idx].id);
            $('.form-paging ul').children().eq(1).children('a').text(total_articles_const[next_idx].title);
        }else{
            $('.form-paging ul').children().eq(1).css('display','none');
        }
        return false;
    });
    $(document).on('click','#next-article',function(){
        total_articles=total_articles.sort(function(a,b){
            return b['id']-a['id'];
        });
        total_articles_const=total_articles_const.sort(function(a,b){
            return b['id']-a['id'];
        });
        var idx = Number($('#next-article').attr('data-idx'));
        var prev_idx;
        var next_idx;
        total_articles_const.forEach(function(item,index){
            if(item.id==idx){
                prev_idx = index-1;
                next_idx = index+1;
            };
        })
        const select_article = total_articles.filter(function(item){return item.id==idx});
        
        if(select_article[0].imagePath != null){
            $('.detail img').attr('src',select_article[0].imagePath);
        }else{
            $('.detail img').attr('src','../@resource/images/@thumb/thumb_pop_img.jpg');
        }
        $('.cont-header .date').text(select_article[0].releaseDate);
        $('.cont-header .subject').text(select_article[0].title);
        $('.cont-header .text').text(select_article[0].summary);
        $('.cont-body .detail p').html(select_article[0].contents);
        if(total_articles_const[prev_idx] != null){
            $('.form-paging ul').children().eq(0).css('display','block');
            $('.form-paging ul').children().eq(0).children('a').attr('data-idx',total_articles_const[prev_idx].id);
            $('.form-paging ul').children().eq(0).children('a').text(total_articles_const[prev_idx].title);
        }else{
            $('.form-paging ul').children().eq(0).css('display','none');
        }
        if(total_articles_const[next_idx] != null){
            $('.form-paging ul').children().eq(1).css('display','block');
            $('.form-paging ul').children().eq(1).children('a').attr('data-idx',total_articles_const[next_idx].id);
            $('.form-paging ul').children().eq(1).children('a').text(total_articles_const[next_idx].title);
        }else{
            $('.form-paging ul').children().eq(1).css('display','none');
        }
        return false;
    });
}

function motion() {
    $('.btn-top').click(function () {
        $('.btn-top').click(function () {
            $.fn.fullpage.moveTo(1);
        });        
    });
    setTimeout(function () {
       $(".section-wrap").addClass("active");
   },100);
}
function close_popup(){
    $('.pop-close').on('click', function () {
        var offset = $('#news').offset();
        $('html,body').animate({scrollTop : offset.top});
        $(this).parents('.layer-popup').hide();
        if( $(window).width() > 960 ) {
            $('html, body').css({height:'100%',overflow:'hidden'});
            $.fn.fullpage.setAllowScrolling(true); // 20200921 추가
        } else if ( $(window).width() < 960 ) {
            $('html, body').css({height:'initial',overflow:'visible'});
        }
    });
}
// pc gnb hover effect
function gnbLine() {
    var location_path = window.location.pathname;
    

    var $el2, leftPos2, newWidth2,
        left_position = 0;
        $language = $("#language");
    $language.append("<span class='lang-underline'></span>");
    var $magicLine2 = $("#language .lang-underline");
    if($('#header').data('language')=='en'){
        left_position = 42;
    }
    $magicLine2
        .width($("#language .active a span").width())
        .css("left", left_position)
        .data("origLeft2", $magicLine2.position().left)
        .data("origWidth2", $magicLine2.width());

    $("#language li a").hover(function () {
        $el2 = $(this);
        leftPos2 = $el2.position().left;
        newWidth2 = $el2.width();
        $magicLine2.stop().animate({
            left: leftPos2,
            width: newWidth2
        });
    }, function () {
        $magicLine2.stop().animate({
            left: $magicLine2.data("origLeft2"),
            width: $magicLine2.data("origWidth2")
        });
    });
   


}

function slider_main(){
    const slider = $(".intro-slider");
    
    $(".intro-slider").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: false,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    vertical: false,
                    verticalScrolling: false,
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    speed: 1500  

                }
            }
        ]
    });

    var windowWidth = $(window).width();
    
if(windowWidth > 960) {
    slider.on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));

    //ticking machine
    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;

    $('.progressbar-wrap .progressbar').each(function(index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 8);
        $('#header a').click(function(){
            clearInterval(tick);
        })
    }

    function interval() {
        if (($('.intro-slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.intro-slider .slick-track div[aria-hidden="false"]').data("slickIndex");
            if (progressBarIndex == 1) {;
                $(".progress-tab01, .progress-tab03, .progress-tab04").removeClass('on');
                $(".progress-tab02").addClass('on');
            }
            else if (progressBarIndex == 2) {
                $(".progress-tab02, .progress-tab04, .progress-tab01").removeClass('on');
                $(".progress-tab03").addClass('on');
            }
            else if (progressBarIndex == 3) {
                $(".progress-tab03 , .progress-tab01, .progress-tab02").removeClass('on');
                $(".progress-tab04").addClass('on');
            }

            else if (progressBarIndex == 0) {
                $(".progress-tab02, .progress-tab03, .progress-tab04").removeClass('on');
                $(".progress-tab01").addClass('on');
            }
            startProgressbar();
        } else {
            percentTime += 1 / (time + 5);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.intro-slider').slick('slickNext');
                if (progressBarIndex == 0) {
                    $(".progress-tab01").removeClass('on');
                    $(".progress-tab02").addClass('on');

                }
                else if (progressBarIndex == 1) {
                    $(".progress-tab02").removeClass('on');
                    $(".progress-tab03").addClass('on');

                }
                else if (progressBarIndex == 2) {
                    $(".progress-tab03").removeClass('on');
                    $(".progress-tab04").addClass('on');
                }
                else if (progressBarIndex == 3) {
                    $(".progress-tab04").removeClass('on');
                    $(".progress-tab01").addClass('on');
                }
                progressBarIndex++;
                if (progressBarIndex > 2) {
                    progressBarIndex = 0;
                }
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    startProgressbar();
    // End ticking machine

    $('.progressbar-wrap .progress-tab').click(function() {
        clearInterval(tick);
        var goToThisIndex = $(this).find(".progressbar").data("slickIndex");
        $('.intro-slider').slick('slickGoTo', goToThisIndex, false);
        startProgressbar();
    });
}
}

function fullpage_about(){
    
    $('#fullpage').fullpage({ //201013 수정
        autoScrolling: true,
        fitToSection: false,
        navigation: false,
        showActiveTooltip: false,
        scrollOverflow: false,
        fitToSection: true,
        //verticalCentered: false,
        bigSectionsDestination: 'top',
        fixedElements: '',
        touchSensitivity: 5,
        scrollingSpeed: 1000,
        navigation: true,
        navigationTooltips: ['BULID', 'MAKE', 'THINK', 'HISTORY', 'PEOPLES', 'NEWS'],
        showActiveTooltip: true,
        // anchors: ['0', 'aboutmake', 'aboutthink', 'abouthistory', 'aboutpeoples', 'aboutnews', 'footer'],
        responsiveWidth: 960,
        afterResponsive: function(isResponsive){
           if(isResponsive){
               $.fn.fullpage.setAutoScrolling(false);
           }
           else{
               $.fn.fullpage.setAutoScrolling(true);
           }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 1 && direction == 'down') {
                $(".section-wrap").removeClass('active');
            }
            if (index == 6 && direction == 'down') {
                $('#fp-nav').show().css({
                    opacity: '0'
                }, 500); 
                var screenWidth = $(window).innerWidth();
                if (screenWidth > 960 ) {
                    $('.btn-top').animate({bottom:'284px'}); 
                } else {
                    $('.btn-top').animate({bottom:'30px'});
                }
            }   
            if (index == 7 && direction == 'up') {
                var screenWidth = $(window).innerWidth();
                if (screenWidth > 960 ) {
                    $('.btn-top').animate({bottom: '50px'}); 
                } else {
                    $('.btn-top').animate({bottom: '30px'}); 
                }
            }
        },
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                motion();            
            }
            if (index == 6) {
                $('#fp-nav').show().css({
                    opacity: '1'
                }, 100);
            }
        }
    });
    
    // only mobile slider
    var swiper;
    function mobileSlider() {
        var screenWidth = $(window).innerWidth();
        if (screenWidth < 960 && swiper == undefined) {
            swiper = true;
    
            // BUILD Slider
            buildSlider = new Swiper('.build .swiper-container', {
                effect: 'coverflow',
                loop: false,
                centeredSlides: true,
                slidesPerView: 1,
                initialSlide: 1,
                keyboardControl: true,
                mousewheelControl: true,
                lazyLoading: true,
                preventClicks: false,
                preventClicksPropagation: false,
                lazyLoadingInPrevNext: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 100,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                },
            });
    
            // MAKE Slider
            makeSlider = new Swiper('.make .swiper-container', {
                slidesPerView: 'auto',
                loop: false,
                centeredSlides: true,
                spaceBetween: 30,
                pagination: {
                    el: '.make .swiper-pagination',
                    type: 'fraction'
                },
                scrollbar: {
                    el: '.make .swiper-scrollbar',
                    hide: false,
                },
            });
    
            // THINK Slider
            thinkSlider = new Swiper('.think .swiper-container', {
                slidesPerView: 'auto',
                loop: false,
                centeredSlides: true,
                spaceBetween: 30,
                pagination: {
                    el: '.think .swiper-pagination',
                    type: 'fraction'
                },
                scrollbar: {
                    el: '.think .swiper-scrollbar',
                    hide: false,
                },
            });
            
        
            
        } else if (screenWidth > 960 && swiper == true) { // 960 이상일때 swiper 해제
                        //    console.log('피씨');
                        //    console.log("destroy");
            makeSlider.destroy();
            thinkSlider.destroy();
            buildSlider.destroy();
    
            swiper = undefined;
            $('.swiper-wrapper').removeAttr('style');
            $('.swiper-slide').removeAttr('style');
        }
    }
    setTimeout(function() {
        mobileSlider();    
    }, 100);
    
    
    $(window).resize(function() {
        mobileSlider();
        if($('.initialslide').hasClass('swiper-slide-active') == true ) {
            $('.circle.gray').removeClass('active');
        }
    });
    
    // build 자세히 보기 버튼
    $('.build .circle .btn.detail').on('click', function() {
        $(this).parents('.circle').addClass('active');
    });
    $('.build .circle .btn.close').on('click', function() {
        $(this).parents('.circle').removeClass('active');
    });
    return false;
}
function fullpage_product(){
    $('#fullpage').fullpage({
        autoScrolling: true,
        fitToSection: false,
        navigation: false,
        showActiveTooltip: false,
        scrollOverflow: false,
        fitToSection: true,
        verticalCentered: false,
        bigSectionsDestination: 'top',
        fixedElements: '',
        scrollingSpeed: 1000,
        navigation: true,
        navigationTooltips: ['PLATFORM', 'ACHAKEY', 'AUTO Q', 'TUIX IoT'],
        showActiveTooltip: true,
        responsiveWidth: 960,
        afterResponsive: function(isResponsive){
           if(isResponsive){
               $.fn.fullpage.setAutoScrolling(false);
           }
           else{
               $.fn.fullpage.setAutoScrolling(true);
           }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 1 && direction == 'down') {
                $(".section-wrap").removeClass('active');
            }
            if (index == 4 && direction == 'down') {
                $('#fp-nav').show().css({
                    opacity: '0'
                }, 500); 
                var screenWidth = $(window).innerWidth();
                if (screenWidth > 960 ) {
                    $('.btn-top').animate({bottom:'284px'}); 
                } else {
                    $('.btn-top').animate({bottom:'30px'});
                }
            }
            if (index == 5 && direction == 'up') {
                var screenWidth = $(window).innerWidth();
                if (screenWidth > 960 ) {
                    $('.btn-top').animate({bottom: '50px'}); 
                } else {
                    $('.btn-top').animate({bottom: '30px'}); 
                }
            }
        },
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                motion();            
            }
            if (index == 4) {
                $('#fp-nav').show().css({
                    opacity: '1'
                }, 100);
            }
        }
    });
}  
function product_video(){
    var youTubeUrl ='https://www.youtube.com/embed/Meqfm8vHku8';
    
	$('.pop-close').on('click', function(){
        var offset = $('#tuix').offset();
        $('html,body').animate({scrollTop : offset.top});
        $('.video-area iframe').prop('src', '');
        $(this).addClass('already');
	});
    
    $('.open-vod').on('click',function (){
        $('#popVOD').show();
        $('html, body').css({height:'100%',overflow:'hidden'});
        $.fn.fullpage.setAllowScrolling(false);

        if($('.pop-close').hasClass('already')){
            $('.video-area iframe').prop('src', youTubeUrl);
        }
        
    })
    
	$('.open-vod').each(function() {
		var $target = $(this).attr("href");
		$('#video-area-html').html('<iframe id="playVideo" width="720" height="406" src='+youTubeUrl+'" frameborder="0" allow="accelerometer;encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        return false;
	});
}
function fullpage_solution(){
    var lang_type = $('#header').data('language');
    var array_gnb;
    if(lang_type=='ko'){
        array_gnb = ['SOLUTION', '스마트 교대 시스템', '디지털 차키 공유', '전기자동차 디지털 차키'];
    }else {
        array_gnb = ['SOLUTION', 'Driver shift system', 'Digital key sharing', 'Digital key supply'];
    }
    $('#fullpage').fullpage({
        autoScrolling: true,
        fitToSection: false,
        navigation: false,
        showActiveTooltip: false,
        scrollOverflow: false,
        fitToSection: true,
        verticalCentered: false,
        bigSectionsDestination: 'top',
        fixedElements: '',
        scrollingSpeed: 1000,
        navigation: true,
        navigationTooltips: array_gnb,
        showActiveTooltip: false,
        responsiveWidth: 960,
        afterResponsive: function(isResponsive){
            if(isResponsive){
                $.fn.fullpage.setAutoScrolling(false);
            }
            else{
                $.fn.fullpage.setAutoScrolling(true);
            }
         },
         onLeave: function (index, nextIndex, direction) {
             if (index == 1 && direction == 'down') {
                 $(".section-wrap").removeClass('active');
             }
             if (index == 4 && direction == 'down') {
                 $('#fp-nav').show().css({
                     opacity: '0'
                 }, 500);
                 var screenWidth = $(window).innerWidth();
                 if (screenWidth > 960 ) {
                     $('.btn-top').animate({bottom:'284px'});
                 } else {
                     $('.btn-top').animate({bottom:'30px'});
                 }
             }
             if (index == 5 && direction == 'up') {
                 var screenWidth = $(window).innerWidth();
                 if (screenWidth > 960 ) {
                     $('.btn-top').animate({bottom: '50px'}); 
                 } else {
                     $('.btn-top').animate({bottom: '30px'}); 
                 }
             }
         },
         afterLoad: function (anchorLink, index) {
             if (index == 1) {
                 motion();
             }
             if (index == 4) {
                 $('#fp-nav').show().css({
                     opacity: '1'
                 }, 100);
             }
     
         }
    });
}  

function fullpage_contact(){
    $('#fullpage').fullpage({
        autoScrolling: true,
        fitToSection: false,
        navigation: false,
        showActiveTooltip: false,
        fitToSection: true,
        verticalCentered: false,
        bigSectionsDestination: 'top',
        fixedElements: '',
        scrollingSpeed: 1000,
        navigation: true,
        navigationTooltips: ['MAP', 'CONTACT'],
        showActiveTooltip: true,
        scrollOverflow: false,
        responsiveWidth: 960,
        afterResponsive: function(isResponsive){
            if(isResponsive){
                $.fn.fullpage.setAutoScrolling(false);
            }
            else{
                $.fn.fullpage.setAutoScrolling(true);
            }
         },
         onLeave: function (index, nextIndex, direction) {
             if (index == 1 && direction == 'down') {
                 $(".section-wrap").removeClass('active');
             }
             if (index == 2 && direction == 'down') {
                 $('#fp-nav').show().css({
                     opacity: '0'
                 }, 500);  
                 var screenWidth = $(window).innerWidth();
                 if (screenWidth > 960 ) {
                     $('.btn-top').animate({bottom:'284px'}); 
                 } else {
                     $('.btn-top').animate({bottom:'30px'});
                 }
             } 
             if (index == 3 && direction == 'up') {
                 var screenWidth = $(window).innerWidth();
                 if (screenWidth > 960 ) {
                     $('.btn-top').animate({bottom: '50px'}); 
                 } else {
                     $('.btn-top').animate({bottom: '30px'}); 
                 }
             }
         },
         afterLoad: function (anchorLink, index) {
             if (index == 1) {
                 motion();            
             }
             if (index == 2) {
                 $('#fp-nav').show().css({
                     opacity: '1'
                 }, 100);
             }
         }
    });
    $('#form-submit').click(function(){
        if($('input[name=comName]').val() ==''){
            alert('회사명을 입력하세요.');
            $('input[name=comName]').focus();
            return false;
        }else if($('input[name=name]').val() ==''){
            alert('이름을 입력하세요.');
            $('input[name=name]').focus();
            return false;
        }else if($('input[name=telNo]').val() ==''){
            alert('연락이 가능한 휴대폰번호를 입력하세요.');
            $('input[name=telNo]').focus();
            return false;
        }else if($('input[name=email]').val() ==''){
            alert('연락이 가능한 이메일을 입력하세요.');
            $('input[name=email]').focus();
            return false;
        }else if($('#contents').val() ==''){
            alert('상세내용을 입력하세요.');
            $('#contents').focus();
            return false;
        }else if(!$('#isAgree').is(':checked')){
            alert('개인정보처리방침에 동의하세요.');
            $('#isAgree').focus();
            return false;
        }else{
            var post_data = {
                comName : $('input[name=comName]').val(),
                name : $('input[name=name]').val(),
                telNo : $('input[name=telNo]').val(),
                email : $('input[name=email]').val(),
                contents : $('#contents').val(),
                isAgree : "Y",
            }

            $.ajax({ 
                url: apiUrl+"/api/v1/tuneit/contactus", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
                data: post_data, // HTTP 요청과 함께 서버로 보낼 데이터 
                method: "POST", // HTTP 요청 메소드(GET, POST 등) 
                dataType: "json", // 서버에서 보내줄 데이터의 타입 
                success: function(data){
                    alert('문의가 되었습니다');
                    $('input[name=comName]').val('');
                    $('input[name=name]').val('');
                    $('input[name=telNo]').val('');
                    $('input[name=email]').val('');
                    $('#contents').val('');
                    $('#isAgree').prop('checked',false);
                }
            });
        }
    });
    //byte 체크
    $('.textarea').keyup(function(){
       bytesHandler(this);
    });
    function getTextLength(str) {
       var len = 0;
       for (var i = 0; i < str.length; i++) {
           if (escape(str.charAt(i)).length == 6) {
               len++;
          }
           len++;
      }
       return len;
    }
    function bytesHandler(obj){
       var text = $(obj).val();
       $('span.bytes').text(getTextLength(text));
    }
}
$(document).on('click','.language-btn',function(){
    $('body').removeAttr('class');
    $('body').addClass($('#header').data('language'));
    gnbLine();
})
$(document).on('click','#header .gnb-wrap a,#mobileMenu .gnb a, #main-link, .footer-href, .language-btn',function(e){
    // e.preventDefault();
    $('#fp-nav').css('opcity','0');
    var screenWidth = $(window).innerWidth();
    var current_a = $(this).data('href');
    if(location_path != 'main'){$.fn.fullpage.destroy('all');}
    
    if(location_path == 'main' && current_a=='main' && e.currentTarget.className != "language-btn"){
        $(".intro-slider").slick("unslick");
    };
    if(current_a == 'main'){
        location_path = 'main';
    }else{
        location_path = current_a;
    }
    if(current_a=='main'){
        $('#wrap').removeClass('sub').addClass('main');
    }else{
        $('#wrap').removeClass('main').addClass('sub');
    }
    
    // if($(this).data('href') == "/about" && screenWidth <= 960){
    //     // location.href = '/about';
    // }else if($(this).data('href') == "/product" && screenWidth <= 960){
    //     // location.href = '/product';
    // }else if($(this).data('href') == "/solution" && screenWidth <= 960){
    //     // location.href = '/solution';
    // }else if($(this).data('href') == "/contact" && screenWidth <= 960){
    //     // location.href = '/contact';
    // }else if($(this).data('href') == "main" && screenWidth <= 960){
    //     // location.href = '/';
    // }
    $('#menu li').removeClass('active');
    
    var pathname = $(this).data('href');
    var agent = navigator.userAgent.toLowerCase();
        if(pathname.indexOf("/about") != -1){
            if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) { // IE 일 경우
                setTimeout(function(){
                    $('#menu').children().eq(0).addClass('active');
                    fullpage_about();
                }, 100);
            }else{
                $('#menu').children().eq(0).addClass('active');
                fullpage_about();
            }
            setTimeout(function() {
                // HISTORY Slider
                var historySlider = new Swiper('.history .all-slider', {
                    slidesPerView: 'auto',
                    spaceBetween: 60,        
                    freeMode: true,
                    touchRatio: 1,
                    noSwiping: false,
                    allowTouchMove: false,
                    breakpoints: {
                        960: {
                            slidesPerView: 3.6,
                            spaceBetween: 30,
                            noSwiping: false,
                            allowTouchMove: true,
                            touchRatio: 0,
                        }
                    }
                });
    
                // PEOPLES Slider
                var peopleSlider = new Swiper('.peoples .swiper-container', {
                    slidesPerView: 1.4,
                    //spaceBetween: 30,  
                    scrollbar: {
                        el: '.peoples .swiper-scrollbar',
                        hide: false,
                    },
                    navigation: {
                        nextEl: '.peoples .swiper-button-next',
                        prevEl: '.peoples .swiper-button-prev',
                    },
                    pagination: {
                                el: '.peoples .swiper-pagination',
                                type: 'fraction',
                            },
                    breakpoints: {
                        960: {
                            direction: 'vertical',
                            slidesPerView: 2.4,
                            slidesPerColumn: 2,
                            spaceBetween: 0,
                            pagination: false,
                        }
                    }
                });
    
                // NEWS Slider
                var newsSlider = new Swiper('.news .all-slider', {
                    slidesPerView: 'auto',
                    noSwiping: true,
                    loopFillGroupWithBlank: true,
                    loop: false,
                    speed : 500, 
                    pagination: {
                        el: '.news .swiper-pagination',
                        type: 'fraction',
                    },
                    navigation: {
                        nextEl: '.news .swiper-button-next',
                        prevEl: '.news .swiper-button-prev',
                    },
                    scrollbar: {
                        el: '.news .swiper-scrollbar',
                        hide: false,
                    },
                    breakpointsInverse: true,
                    breakpoints: {              
                        960: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 30,
                            freeMode: true,
                            allowTouchMove: false,
                        }
                    }
                });
                $(".scrolling-area-x").mCustomScrollbar({
                    axis: "x"
                });
                
                // news팝업 내용 스크롤
                $("layer-popup .scrolling-area-y").mCustomScrollbar({
                    axis: "y"
                });
            }, 1000);
            gnbLine();
            close_popup();
        }else if(pathname.indexOf("/product") != -1) {
            
            
            if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) { // IE 일 경우
                setTimeout(function(){
                    $('#menu').children().eq(1).addClass('active');
                    fullpage_product();
                    product_video();
                    gnbLine(); 
                }, 100);
            }else{
                $('#menu').children().eq(1).addClass('active');
                fullpage_product();
                product_video();
                gnbLine();
            }
            
            
        }else if(pathname.indexOf("/solution") != -1){
            
            if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) { // IE 일 경우
                setTimeout(function(){
                    $('#menu').children().eq(2).addClass('active');
                    fullpage_solution();
                    gnbLine();
                }, 100);
            }else{
                $('#menu').children().eq(2).addClass('active');
                fullpage_solution();
                gnbLine();
            }
            
        }else if(pathname.indexOf("/contact") != -1){
            
            if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) { // IE 일 경우
                setTimeout(function(){
                    $('#menu').children().eq(3).addClass('active');
                    fullpage_contact();
                    gnbLine();
                }, 100);
            }else{
                $('#menu').children().eq(3).addClass('active');
                fullpage_contact();
                gnbLine();
            }
            
        }else{
            if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) { // IE 일 경우
                setTimeout(function(){
                    slider_main();    
                }, 100);
            }else{
                slider_main();
            }
            gnbLine();
        }
        if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) { // IE 일 경우
            setTimeout(function(){
                $('#fullpage').removeClass('time-none');  
            }, 100);
        }else{
            $('#fullpage').removeClass('time-none');
        }
        
});

$(document).ready(function(){
    about_javascript();
    location_path = window.location.pathname;
    if(location_path == '/'){
        location_path = 'main';
    }else{
        location_path = location_path;
    }
    if(location_path == "/about"){
        $('#menu').children().eq(0).addClass('active');
        setTimeout(function() {
            // HISTORY Slider
            var historySlider = new Swiper('.history .all-slider', {
                slidesPerView: 'auto',
                spaceBetween: 60,        
                freeMode: true,
                touchRatio: 1,
                noSwiping: false,
                allowTouchMove: false,
                breakpoints: {
                    960: {
                        slidesPerView: 3.6,
                        spaceBetween: 30,
                        noSwiping: false,
                        allowTouchMove: true,
                        touchRatio: 0,
                    }
                }
            });

            // PEOPLES Slider
            var peopleSlider = new Swiper('.peoples .swiper-container', {
                slidesPerView: 1.4,
                //spaceBetween: 30,  
                scrollbar: {
                    el: '.peoples .swiper-scrollbar',
                    hide: false,
                },
                navigation: {
                    nextEl: '.peoples .swiper-button-next',
                    prevEl: '.peoples .swiper-button-prev',
                },
                pagination: {
                            el: '.peoples .swiper-pagination',
                            type: 'fraction',
                        },
                breakpoints: {
                    960: {
                        direction: 'vertical',
                        slidesPerView: 2.4,
                        slidesPerColumn: 2,
                        spaceBetween: 0,
                        pagination: false,
                    }
                }
            });

            // NEWS Slider
            var newsSlider = new Swiper('.news .all-slider', {
                slidesPerView: 'auto',
                noSwiping: true,
                loopFillGroupWithBlank: true,
                loop: false,
                speed : 500,
                pagination: {
                    el: '.news .swiper-pagination',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.news .swiper-button-next',
                    prevEl: '.news .swiper-button-prev',
                },
                scrollbar: {
                    el: '.news .swiper-scrollbar',
                    hide: false,
                },
                breakpointsInverse: true,
                breakpoints: {              
                    960: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 30,
                        freeMode: true,
                        allowTouchMove: false,
                    }
                }
            });

            $(".scrolling-area-x").mCustomScrollbar({
                axis: "x"
            });
            
            // news팝업 내용 스크롤
            $("layer-popup .scrolling-area-y").mCustomScrollbar({
                axis: "y"
            });
        }, 1000);
        fullpage_about();
        
        close_popup();
    }else if(location_path == "/product"){
        $('#menu').children().eq(1).addClass('active');
        product_video();
        fullpage_product();
    }else if(location_path == "/solution"){
        $('#menu').children().eq(2).addClass('active');
        fullpage_solution();
    }else if(location_path == "/contact"){
        $('#menu').children().eq(3).addClass('active');
        fullpage_contact();
        setTimeout(function() {
            motion(); 
        }, 100);
    }else{
        slider_main();
    }
    $('#fullpage').removeClass('time-none');
    setTimeout(function() {
        // gnbLine();
    }, 100);
});

    

window.addEventListener('popstate', function(e) {
    // e.preventDefault();
    console.log(window.location.pathname,location_path);
    location_path = window.location.pathname;
    
    $('#fp-nav').css('opcity','0');
    var screenWidth = $(window).innerWidth();
    if(screenWidth > 960 && location_path != '/'){$.fn.fullpage.destroy('all');}
    
    if(location_path=='/'){
        $('#wrap').removeClass('sub').addClass('main');
    }else{
        $('#wrap').removeClass('main').addClass('sub');
    }
    
    if($(this).data('href') == "/about" && screenWidth <= 960){
        location.href = '/about';
    }else if($(this).data('href') == "/product" && screenWidth <= 960){
        location.href = '/product';
    }else if($(this).data('href') == "/solution" && screenWidth <= 960){
        location.href = '/solution';
    }else if($(this).data('href') == "/contact" && screenWidth <= 960){
        location.href = '/contact';
    }else if($(this).data('href') == "main" && screenWidth <= 960){
        location.href = '/';
    }
    $('#menu li').removeClass('active');

        if(location_path =="/about"){
            $('#menu').children().eq(0).addClass('active');
            
            fullpage_about();
            about_javascript();
            setTimeout(function() {
                // HISTORY Slider
                var historySlider = new Swiper('.history .all-slider', {
                    slidesPerView: 'auto',
                    spaceBetween: 60,        
                    freeMode: true,
                    touchRatio: 1,
                    noSwiping: false,
                    allowTouchMove: false,
                    breakpoints: {
                        960: {
                            slidesPerView: 3.6,
                            spaceBetween: 30,
                            noSwiping: false,
                            allowTouchMove: true,
                            touchRatio: 0,
                        }
                    }
                });
    
                // PEOPLES Slider
                var peopleSlider = new Swiper('.peoples .swiper-container', {
                    slidesPerView: 1.4,
                    //spaceBetween: 30,  
                    scrollbar: {
                        el: '.peoples .swiper-scrollbar',
                        hide: false,
                    },
                    navigation: {
                        nextEl: '.peoples .swiper-button-next',
                        prevEl: '.peoples .swiper-button-prev',
                    },
                    pagination: {
                                el: '.peoples .swiper-pagination',
                                type: 'fraction',
                            },
                    breakpoints: {
                        960: {
                            direction: 'vertical',
                            slidesPerView: 2.4,
                            slidesPerColumn: 2,
                            spaceBetween: 0,
                            pagination: false,
                        }
                    }
                });
    
                // NEWS Slider
                var newsSlider = new Swiper('.news .all-slider', {
                    slidesPerView: 'auto',
                    noSwiping: true,
                    loopFillGroupWithBlank: true,
                    loop: false,
                    speed : 500, 
                    pagination: {
                        el: '.news .swiper-pagination',
                        type: 'fraction',
                    },
                    navigation: {
                        nextEl: '.news .swiper-button-next',
                        prevEl: '.news .swiper-button-prev',
                    },
                    scrollbar: {
                        el: '.news .swiper-scrollbar',
                        hide: false,
                    },
                    breakpointsInverse: true,
                    breakpoints: {              
                        960: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 30,
                            freeMode: true,
                            allowTouchMove: false,
                        }
                    }
                });
                $(".scrolling-area-x").mCustomScrollbar({
                    axis: "x"
                });
                
                // news팝업 내용 스크롤
                $("layer-popup .scrolling-area-y").mCustomScrollbar({
                    axis: "y"
                });
            }, 1000);
            gnbLine();
            close_popup();
        }else if(location_path=="/product") {
            $('#menu').children().eq(1).addClass('active');
            product_video();
            fullpage_product();
            gnbLine();
        }else if(location_path=="/solution"){
            $('#menu').children().eq(2).addClass('active');
            fullpage_solution();
            gnbLine();
        }else if(location_path=="/contact"){
            $('#menu').children().eq(3).addClass('active');
            fullpage_contact();
            gnbLine();
        }else{
            slider_main();
        }
        $('#fullpage').removeClass('time-none');

});