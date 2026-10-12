$(function(){

    if($(window).width() > 601){
        $(window).scroll(function(){
        if($(window).scrollTop()>= 40){
            $('.header_outer').addClass('fixed');
            $('.btn').addClass('show');
        } else {
            $('.header_outer').removeClass('fixed');
            $('.btn').removeClass('show');
        } 
        
        if($(window).scrollTop()>= 1000){
            $('.pay_tab_box').addClass('show');
            $('.btn').addClass('high');
        } else {
            $('.pay_tab_box').removeClass('show');
            $('.btn').removeClass('high');
        } 

        const val = $(document).height() = $(window).height() - $('.footer').outerHeight();

        if($(window).scrollTop >= val) {
            $('.btn').removeClass();
            $('.btn').addClass('on');
        } else {
            $('.btn').removeClass('on');
        }
        }); // scoll_event
    }

    const imgTab = $('.detail_box .detail_left .img_tab_box>div');
    const backTab = $('.detail_box .detail_left .img_tab_box .back');
    const imgBox = $('.detail_box .detail_left .img_box .big_img');

    imgTab.click(function(){
    index = $(this).index();

    imgTab.removeClass('on_tab');
    $(this).addClass('on_tab');

    backTab.removeClass('on_back');
    backTab.eq(index).addClass('on_back');

    imgBox.removeClass('on_img');
    imgBox.eq(index).addClass('on_img');
    }); //img_tab_click_event


    if($(window).width() > 601){
        const shareTab = $('.detail_box .detail_right .right_icon .share');
        const shareImg = $('.detail_box .detail_right .right_icon .share img');
        const shareSheet = $('.detail_box .detail_right .right_icon .share_box');
        const shareX = $('.detail_box .detail_right .right_icon .share_box .share_f');

        shareTab.click(function(){
        shareImg.attr('src', './img_detail/share_p_f.png');
        shareSheet.slideDown(300);
        });
        shareX.click(function(){
        shareImg.attr('src', './img_detail/share_e.png');
        shareSheet.slideUp(300);
        }); //share_slide_event
    }

    if($(window).width() > 601){
        const exTab = $('.detail_box .detail_right .tab_box .ex_tab span');
        const exText = $('.detail_box .detail_right .tab_box .tab_infor p');

        exTab.click(function(){
        exTab.removeClass('on');
        $(this).addClass('on');

        index = $(this).index();

        exText.removeClass('on_infor');
        exText.eq(index).addClass('on_infor');
        }); //ex_tab_click_event
    }


    let cnt = 1;
    $('.add').click(function(){
    cnt++;
    if(cnt>10){
        cnt = 10;
        alert('최대 10개까지만 구매 가능합니다.');
    }
    $('.count_num').text(cnt);
    });
    $('.min').click(function(){
    cnt--;
    if(cnt<1){
        cnt = 1;
        alert('1개 이상부터 구매 가능합니다.');
    }
    $('.count_num').text(cnt);
    }); //count_event


    if($(window).width() > 601){
        const inforTab = $('.information .infor_tab div');
        const page = $('.information .contents>div');

        inforTab.click(function(){
        let index = $(this).index();
        let point = page.eq(index).offset().top;

        $('html,body').stop().animate({scrollTop: point}, 1000);
        }); //infor_tab_click_event
    }

    const btnOpen = $('.information .contents .detail_page .more_btn .more');
    const btnClose = $('.information .contents .detail_page .more_btn .fold');
    const downPage = $('.information .contents .detail_page .page_bot');

    if($(window).width() > 601){
        btnOpen.click(function(){
        downPage.slideDown(500);
        btnOpen.css('display', 'none');
        btnClose.css('display', 'inline-block');
        });
        btnClose.click(function(){
        downPage.slideUp(500);
        btnClose.css('display', 'none');
        btnOpen.css('display', 'inline-block');
        });
        //more_btn_click_event
    }

    btnOpen.click(function() {
        downPage.show();
        btnOpen.css('display', 'none');
        btnClose.css('display', 'inline-block');
    });
    btnClose.click(function(){
        downPage.hide();
        btnClose.css('display', 'none');
        btnOpen.css('display', 'inline-block');
    });


    if($(window).width() <= 601) {
        $('#notice_tab').prop('checked', false);
        $('#notice_tab02').prop('checked', false);
    }
});