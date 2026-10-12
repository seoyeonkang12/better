$(function(){

    const subTab = $('.sub_worry .tab_box>div');
    const subTitle = $('.sub_worry .worry_right .title .span_title span');
    const subSheet = $('.sub_worry .worry_right .worry_product_box .worry_list_box>div');
    const crumbMenuTxt = $('.all .crumb_menu .crumb_box .txt p');
    const crumbMenu = $('.all .crumb_menu');

    if($(window).width() > 601){
        subTab.click(function(){
        subTab.removeClass('on_tab');
        $(this).addClass('on_tab');

        const index = $(this).index();

        subTitle.removeClass('on_title');
        subTitle.eq(index).addClass('on_title');

        subSheet.removeClass('on_sheet');
        subSheet.eq(index).addClass('on_sheet');
        }); // sub_tab_click_event
    }

    crumbMenuTxt.click(function() {
      crumbMenuTxt.removeClass('on');
      $(this).addClass('on');

      const index = $(this).index();
      
      subSheet.removeClass('on_sheet');
      subSheet.eq(index).addClass('on_sheet');

      crumbMenu.hide();
    });
    $('.all .breadcrumb label').click(function(){
      crumbMenu.show();        
    }); // sub_tab_mobile_click_event

    
    if($(window).width() > 601){
        $('.more_btn').mouseover(function(){
        $(this).css('border', '1px solid #DB818F').css('background-color', '#DB818F').css('color', '#F8F6F3');
        });
        $('.more_btn').mouseout(function(){
        $(this).css('border', '1px solid #8A847F').css('color', '#8A847F').css('background', 'none');
        }); // more_btn_click_event
    }
    

    const botBox = $('.sub_worry .worry_right .worry_product_box .worry_list_box .bot_box');

    $('.more_btn').click(function(){
    botBox.slideToggle(400);
    botBox.css('display','flex');
    }); // product_box_slide_event
    

    const filterTab = $('.sub_worry .worry_right .worry_product_box .filter_box .filter');
    const filterBox = $('.sub_worry .worry_right .worry_product_box .filter_box .filter_sheet');
    const arrowImg = $('.sub_worry .worry_right .worry_product_box .filter_box .filter img');
    const filterS = $('.sub_worry .worry_right .worry_product_box .filter_box ul li');

    if($(window).width() > 601){
        filterTab.click(function(){
            filterBox.slideToggle(300);

            $(this).toggleClass('active');

            if($(this).hasClass('active')){
                arrowImg.attr('src', './images/filter_arrow_b.png');
            } else {
                arrowImg.attr('src', './images/filter_arrow.png');
            }

            filterS.click(function(){
                let index = $(this).index();
                filterS.removeClass('on');
                filterS.eq(index).addClass('on');
            });
        }); //filter_tab_click_event
    }

    if($(window).width() <= 601){
        filterTab.click(function(){
            filterBox.toggle();

            $(this).toggleClass('active');

            if($(this).hasClass('active')){
                arrowImg.attr('src', './images/filter_arrow_b.png');
            } else {
                arrowImg.attr('src', './images/filter_arrow.png');
            }

            filterS.click(function(){
                let index = $(this).index();
                filterS.removeClass('on');
                filterS.eq(index).addClass('on');
            });
        });
    }

});
