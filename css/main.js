$(function(){
    
    let swiper = new Swiper(".main_visual", {
    loop: true,
    slidesPerView: 'auto',
    slideWidth: 1220,
    spaceBetween: 10,
    intialSlide: 1,
    centeredSlides: true,
    speed: 1500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1025: {
            slideWidth: 1305,
            spaceBetween: 30
        }
    }
    });
    // main_visual_slide_event

    $('.test_btn').mouseover(function(){
    $(this).css('background-color', '#DB818F').css('border', '1px solid #DB818F');
    });
    $('.test_btn a').mouseover(function(){
    $(this).css('color', '#F8F6F3');
    });
    $('.test_btn').mouseout(function(){
    $(this).css('background', 'none').css('border', '1px solid #2f2f2f');
    });
    $('.test_btn a').mouseout(function(){
    $(this).css('color', '#2f2f2f');
    }); //main_test_btn_css


    const bestTab = $('.best_sellers .best_tab_box div');
    const bestSheet = $('.best_sellers .slider1');
    const bestslideBox = $('.best_sellers .slide_box');

    let index = 0;

    bestTab.click(function(){
      index = $(this).index();

      bestTab.removeClass('on_tab');
      $(this).addClass('on_tab');

      bestSheet.removeClass('on_sheet');
      bestSheet.eq(index).addClass('on_sheet');
      bestslideBox.scrollLeft(0);
    });

    $('.best_sellers .best_next').click(function(){
      let move;
      if($(window).width() <= 601){
        let slideWidth = $('.slide').outerWidth();
        let gap = parseFloat($('.slide').parent().css('gap'));
        move = slideWidth + gap;
      } else {
        move = 1305;
      }
      bestslideBox.animate({
        scrollLeft: bestslideBox.scrollLeft() + move
      }, 400);
    });
    $('.best_sellers .best_prev').click(function(){
      let move;
      if($(window).width() <= 601){
        move = $('.slide').outerWidth(true);
      } else {
        move = 1305;
      }
      bestslideBox.animate({
        scrollLeft: bestslideBox.scrollLeft() - move
      }, 400);
    });
    

    const colorTab = $('.color_box .color .color_right .col_tab_box div');
    const colorSheet = $('.color_box .color .color_right .color_product_box>div');
    const colorLeft = $('.color_box .color .color_left')
    const colText = $('.color_box .color .color_left .left_text span');
    const colP = $('.color_box .color .color_left .left_text p');
    const bar = $('.color_box .color_product_box .slider');
    
    colorTab.click(function(){
    index = $(this).index();

    colorTab.removeClass('on_tab');
    $(this).addClass('on_tab');

    colorSheet.removeClass('on_sheet');
    colorSheet.eq(index).addClass('on_sheet');

    bar.stop().animate({
        width: '0%',
    }, 200);
    }); // color_box_tab_event

    let isDrag = false;
    let startX = 0;
    let startScroll = 0;
    let currentSheet = null;

    colorSheet.on('mousedown', function(e) {
        currentSheet = $(this);
        isDrag = true;
        startX = e.pageX;
        startScroll = currentSheet.scrollLeft();

        currentSheet.css('scroll-behavior', 'auto');
    });

    $(window).on('mousemove', function(e) {
        if (!isDrag || !currentSheet) return;
        const moveX = e.pageX - startX;
        currentSheet.scrollLeft(
            startScroll - moveX
        );
        updateBar(currentSheet);
    });
    $(window).on('mouseup', function() {
        if (!isDrag || !currentSheet) return;
        isDrag = false;
        snapSlide(currentSheet);
        currentSheet = null;
    });

    function updateBar(sheet) {
      const maxScroll =
      sheet[0].scrollWidth -
      sheet[0].clientWidth;

      if (maxScroll <= 0) {
        bar.css('width', '100%');
        return;
      }
      const percent =
      sheet.scrollLeft() / maxScroll * 100;
      bar.css('width', percent + '%');
    }

    function snapSlide(sheet) {
      const product = sheet.find('.red_product');
      if (product.length <= 2) {
        sheet.stop().animate({
          scrollLeft: 0
      }, 400);
      bar.stop().animate({
        width: '100%'
      }, 400);
      return;
    } //color_box_slide

    const productWidth = product.eq(0).outerWidth();
    const gap = 15;
    const moveAmount = productWidth + gap;
    let page = Math.round(sheet.scrollLeft() / moveAmount);
    const maxScroll = sheet[0].scrollWidth - sheet[0].clientWidth;
    const maxPage = Math.round(maxScroll / moveAmount);
    page = Math.max(0, Math.min(page, maxPage));
    const target = page * moveAmount;

    sheet.stop().animate({
        scrollLeft: target
    }, 400);
    setTimeout(function() {
        updateBar(sheet);
      }, 400);
    }

    $('.tab_color01').click(function(){
    colorLeft.removeClass().addClass('color_left');
    colText.text('01.');
    colP.text('Red Color Make up');
    });
    $('.tab_color02').click(function(){
    colorLeft.removeClass().addClass('color_left02');
    colText.text('02.');
    colP.text('Pink Color Make up');
    });
    $('.tab_color03').click(function(){
    colorLeft.removeClass().addClass('color_left03');
    colText.text('03.');
    colP.text('Lavender Color Make up');
    });
    $('.tab_color04').click(function(){
    colorLeft.removeClass().addClass('color_left04');
    colText.text('04.');
    colP.text('Brown Color Make up');
    });
    // color_box_sheet
    


    $('.more_btn').mouseover(function(){
    $(this).css('background-color', '#DB818F').css('border', '1px solid #DB818F');
    });
    $('.more_btn a').mouseover(function(){
    $(this).css('color', '#F8F6F3');
    });
    $('.more_btn').mouseout(function(){
    $(this).css('background', 'none').css('border', '1px solid #8A847F')
    });
    $('.more_btn a').mouseout(function(){
    $(this).css('color', '#8A847F');
    });
    // more_btn_css
    
    const perTab = $('.personal_box .personal .per_btn .per_tab_box>div');
    const perSheet = $('.personal_box .personal .per_product_box>div');
    const perRight = $('.personal_box .personal .per_box .per_right');
    const perText = $('.personal_box .personal .per_box .per_right .per_right_text span');
    const perP = $('.personal_box .personal .per_box .per_right .per_right_text p');
    
    perTab.click(function(){
    index = $(this).index();

    perTab.removeClass('on_tab');
    $(this).addClass('on_tab');

    perSheet.removeClass('on_sheet02');
    perSheet.eq(index).addClass('on_sheet02');

    }); // personal_box_tab_event

    $('.tab_per01').click(function(){
    perRight.removeClass().addClass('per_right');
    perText.text('01.');
    perP.text('Spring Warm Tone');
    });
    $('.tab_per02').click(function(){
    perRight.removeClass().addClass('per_right02');
    perText.text('02.');
    perP.text('Summer Cool Tone');
    });
    $('.tab_per03').click(function(){
    perRight.removeClass().addClass('per_right03');
    perText.text('03.');
    perP.text('Autumn Warm Tone');
    });
    $('.tab_per04').click(function(){
    perRight.removeClass().addClass('per_right04');
    perText.text('04.');
    perP.text('Winter Cool Tone');
    });
    // personal_box_sheet

    $('.insta_slider').bxSlider({
    minSlides: 6,
    maxSlides: 6,
    slideWidth: 315,
    slideHeight: 315,
    slideMargin: 13,
    ticker: true,
    speed: 50000
    });

    $('.insta_box .bx-wrapper').removeClass().addClass('insta_slider');
    // insta_slide_event
});

document.addEventListener('DOMContentLoaded',function(){
    const wrap = document.querySelector('.clip_box .clip .clip_list');
    const bar = document.querySelector('.clip_box .slider');

    let isDrag = false;
    let startX = 0;

    wrap.addEventListener('mousedown', (e) => {
      isDrag = true;
      startX = e.clientX;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDrag) return;
      wrap.scrollLeft -= e.clientX - startX;
      startX = e.clientX;
    });

    window.addEventListener('mouseup', () => {
      isDrag = false;
    });

    wrap.addEventListener('scroll', () => {
      const maxScroll = wrap.acrollWidth = wrap.clientWidth;
      const percent = 
        maxScroll > 0 ? wrap.scrollLeft /
        maxScroll : 0;
      bar.style.width = percent * 100 + '%';
    });
    // video_slide_bar
});