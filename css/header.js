$(function(){
    
    const searchPop = $('.header_outer .header .header_right .search');
    const searchBox = $('.header_outer .search_popup');
    const searchX = $('.header_outer .search_popup .search_popup_box .popup_title .searchX');

    const searchPop2 = $('.header_outer .header .header_right .search_mobile');
    const searchBox2 = $('.header_outer .search_popup');
    const searchX2 = $('.header_outer .search_popup .search_popup_box .popup_title .searchX');

    const tab = $('.header_outer .gnb_down_menu .down_menu_box .gnb_title div');
    const sheet = $('.header_outer .gnb_down_menu .down_menu_box .menu_list_box>div');
    // let index = 0;/

    if($(window).width() > 601){
      $(window).scroll(function(){
        if($(window).scrollTop()>= 40){
          $('.header_outer').addClass('fixed');
          $('.btn').slideDown(500);
        } else{
          $('.header_outer').removeClass('fixed');
          $('.btn').stop().slideUp(500);
        }
      }); // scoll_event

      $('.top').on('click', function(e){
      e.preventDefault();
          
      $('html, body').stop().animate({
          scrollTop: 0
      }, 1000);
      }); //btn_top_click_event

      
      searchPop.click(function(){
        searchBox.fadeIn();
          $('.header_outer .search_popup .search_popup_box').stop().animate({right: 0}, 400);
        });
        searchX.click(function(){
          searchBox.fadeOut();
          $('.header_outer .search_popup .search_popup_box').stop().animate({right: -600}, 400);
      }); 

      $('.gnb_menu01' ).mouseover(function(){
      $('.gnb_down_menu').slideDown(300);
      });
      $('.gnb_down_menu').mouseleave(function(){
      $(this).stop().slideUp(300);
      }); // gnb_down_menu_slide_event


      tab.click(function(){
      tab.removeClass('on_tab');
      $(this).addClass('on_tab');

      const index = $(this).index();

      sheet.removeClass('on_sheet');
      sheet.eq(index).addClass('on_sheet');

      }); //menu_list_box_tab_event

    } // pc_jQuery



    searchPop2.click(function(){
      searchBox2.fadeIn();
      $('.header_outer .search_popup .search_popup_box').stop().animate({right: 0}, 400);
    });
    searchX2.click(function(){
      searchBox2.fadeOut();
      $('.header_outer .search_popup .search_popup_box').stop().animate({right: -600}, 400);
    }); 

    $('.bar_search').click(function() {
      searchBox2.fadeIn();
      $('.header_outer .search_popup .search_popup_box').stop().animate({right: 0}, 400);
    });
    //search_popup_click_event(mobile)



    if($(window).width() <=601) {
      $('.menu_btn').click(function(){
        $('.gnb_mobile').addClass('on');
        $('body').css('overflow', 'hidden');
      });
      $('.searchX').click(function(){
        $('.gnb_mobile').removeClass('on');
        $('body').css('overflow', '');
      }); 

      $('.btn_product').click(function(){
        $(this).toggleClass('on');
        $(this).siblings('.sub_menu').toggle();
      });
      $('.btn_skincare').click(function(){
        $(this).toggleClass('on');
        $(this).siblings('.detail_menu').toggle();
      });
      $('.btn_makeup').click(function(){
        $(this).toggleClass('on');
        $(this).siblings('.detail_menu').toggle();
      });
      //gnb_mobile
    }
    

    
});