document.addEventListener('DOMContentLoaded', function() {
  
  const total = document.querySelector('.total');
  const totalText = document.querySelector('.agreement ul li .txt');
  const terms1 = document.querySelector('.terms01');
  const terms1Text = document.querySelector('.txt02');
  const terms2 = document.querySelector('.terms02');
  const terms2Text = document.querySelector('.txt03');
  const terms3 = document.querySelector('.terms03');
  const terms3Text = document.querySelector('.txt04');

  total.addEventListener('click', function(e){
    if(e.target.closest('.chk_box')){
      return;
    }
    totalText.classList.toggle('active');
  });
  terms1.addEventListener('click',function(e){
    if(e.target.closest('.chk_box')){
      return;
    }
    terms1.classList.toggle('border');
    terms1Text.classList.toggle('on_txt');
  });
  terms2.addEventListener('click',function(e){
    if(e.target.closest('.chk_box')){
      return;
    }
    terms2.classList.toggle('border');
    terms2Text.classList.toggle('on_txt');
  });
  terms3.addEventListener('click',function(e){
    if(e.target.closest('.chk_box')){
      return;
    }
    terms3.classList.toggle('border');
    terms3Text.classList.toggle('on_last');
  });

  const totalTerms = document.getElementById('total_terms');
  const termsEls = document.querySelectorAll('.terms_el');
  const terms01 = document.getElementById('terms_01');
  const terms02 = document.getElementById('terms_02');
  const terms03 = document.getElementById('terms_03');

  totalTerms.addEventListener('click', totalCheck);
  terms01.addEventListener('click', termsCheck);
  terms02.addEventListener('click', termsCheck);
  terms03.addEventListener('click', termsCheck);


  function totalCheck() {
    if(totalTerms.checked) {
      termsEls.forEach((termsEl) => {
        termsEl.checked = true;
      });
    } else{
      termsEls.forEach((termsEl) => {
        termsEl.checked = false;
      });
    }
  } //totalCheck

  function termsCheck() {
    if(terms01.checked === true && terms02.checked === true && terms03.checked === true){
      totalTerms.checked = true;
    } else {
      totalTerms.checked = false;
    }
  } //termsCheck()

  const requiredTerms = document.querySelectorAll('.required');
  const nextBtn = document.querySelector('.btn_next');

  nextBtn.addEventListener('click', function(){
    let allChecked = true;

    requiredTerms.forEach(function(term) {
      if(!term.checked){
        allChecked = false;
      }
    });
    if(!allChecked){
      alert('필수 약관을 모두 동의해주세요.');
      return;
    }
    location.href = './join.html';
  }); //terms_required

});