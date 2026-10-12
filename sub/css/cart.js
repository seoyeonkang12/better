$(function(){

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


    $('.add02').click(function(){
    cnt++;
    if(cnt>10){
        cnt = 10;
        alert('최대 10개까지만 구매 가능합니다.');
    }
    $('.count_num02').text(cnt);
    });
    $('.min02').click(function(){
    cnt--;
    if(cnt<1){
        cnt = 1;
        alert('1개 이상부터 구매 가능합니다.');
    }
    $('.count_num02').text(cnt);
    }); //count_event

    $('#all_chk').click(function() {
        $('.chk_list').prop('checked', this.checked);
    });
    $(document).on('change', '.chk_list', function() {
      const total = $('.chk_list').length;
      const checked = $('.chk_list:checked').length;

      if(total === checked){
        $('#all_chk').prop('checked', true);
      } else {
        $('#all_chk').prop('checked', false);
      }
    }); //all_chk

    $('.delete').click(function() {
      if($('input[name=chk_list]:checked').length === 0){
        alert('삭제할 항목을 선택하세요.');
        return;
      }

      $('input[name=chk_list]:checked').each(function() {
        $(this).closest('.all .cart_box .cart_left .list_box').remove();
      });
    });

});