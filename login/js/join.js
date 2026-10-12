document.addEventListener('DOMContentLoaded', function() {

  const userId = document.getElementById('user_id');
  const userPw1 = document.getElementById('user_pw');
  const userPw2 = document.getElementById('user_pw2');
  const userName = document.getElementById('user_name');

  const userAddr = document.getElementById('user_addr');
  const userAddr2 = document.getElementById('addr02');
  const userAddr3 = document.getElementById('addr03');
  const btnAddr = document.querySelector('.btn_addr');

  const telFirst = document.getElementById('tel_first');
  const telSecond = document.getElementById('tel_second');
  const telThird = document.getElementById('tel_third');

  const pFirst = document.getElementById('p_first');
  const pSecond = document.getElementById('p_second');
  const pThird = document.getElementById('p_third');

  const userEmail = document.getElementById('user_email');
  const emailBox = document.getElementById('email_box');
  const emailUrl = document.getElementById('email_url');

  const btnNext = document.querySelector('.btn_next');
  const idCheck = document.querySelector('.id_check');
  const pwCheck = document.querySelector('.pw_check');
  const pCheck = document.querySelector('.p_check');

  let users = [];

  fetch('./js/users.json')
  .then(response => response.json())
  .then(data => {
      users = data;
      console.log(users);
  })
  .catch(error => {
    console.log('회원 데이터를 불러오지 못했습니다.', error);
  });

  
  let idChecked = false;

  userId.addEventListener('input',function() {
    idChecked = false;
  });
  userId.addEventListener('blur', function() {
    if(idChecked) {
      return;
    }
    const isDuplicate = users.some(function(user){
      return user.id === userId.value;
    });
    if(isDuplicate){
      idCheck.style.display = 'block';
      idCheck.textContent = '이미 사용 중인 아이디입니다.';

      userId.focus();
    } else {
      idCheck.style.display = 'block';
      idCheck.textContent = '사용 가능한 아이디입니다.';
      idChecked = true;
    }
  }); //userId_Checked


  userPw1.addEventListener('change', checkPw);
  function checkPw() {
    if(userPw1.value.length <5){
      alert('사용할 수 없는 비밀번호입니다.');
      userPw1.select();
    }
  }
  userPw2.addEventListener('blur',function(){
    if(userPw1.value !== userPw2.value){
      pwCheck.style.display = 'block';
      pwCheck.textContent = '비밀번호가 일치하지 않습니다';
    } else {
      pwCheck.style.display = 'none';
    }
  }); //userPw_check

  btnAddr.addEventListener('click', function(){
    new daum.Postcode({
      oncomplete: function(data){
        userAddr.value = data.zonecode;
        userAddr2.value = data.address;
        userAddr3.focus();
      }
    }).open();
  }); //address_search_popup


  pSecond.addEventListener('keyup', moveP);
  telSecond.addEventListener('keyup', moveTel);
  
  function moveP() {
    if(pSecond.value.length >=4){
      pThird.focus();
    }
  }
  function moveTel() {
    if(telSecond.value.length >=4){
      telThird.focus();
    }
  }

  const emails = document.info.emailurl;

  emails.addEventListener('change',function() {
    let emailName = emails.options[emails.selectedIndex].text;
    document.getElementById('email_box').value = emailName;
  }); //email_select


  btnNext.addEventListener('click', function(e){
    e.preventDefault();

    if(userId.value === ''){
      alert('아이디를 입력해 주세요.');
      userId.focus();
      return;
    }
    if(userPw1.value === ''){
      alert('비밀번호를 입력해 주세요.');
      userPw1.focus();
      return;
    }
    if(userPw2.value === ''){
      alert('비밀번호 확인을 입력해 주세요.');
      userPw2.focus();
      return;
    }
    if(userPw1.value !== userPw2.value){
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if(userName.value === ''){
      alert('이름을 입력해 주세요.');
      userName.focus();
      return;
    }
    if(userAddr.value === ''){
      alert('주소를 입력해 주세요.');
      return;
    }
    if(pSecond.value === '' || pThird.value === ''){
      alert('휴대전화 번호를 입력해 주세요.');
      pSecond.focus();
      return;
    }
    if(pSecond.value === '' || pThird.value === ''){
      pCheck.style.display = 'block';
      pCheck.textContent = '휴대폰 번호를 모두 입력해 주세요.';
    }
    if(!/^\d{4}$/.test(pSecond.value) || !/^\d{4}$/.test(pThird.value)){
      alert('휴대폰 번호 항목이 숫자 형식이 아닙니다.');
      pSecond.focus();
      return;
    }
    if(userEmail.value === '' || emailBox.value === ''){
      alert('이메일을 입력해 주세요.');
      userEmail.focus();
      return;
    }
    alert('회원가입이 완료되었습니다.');
    location.href = './join_complete.html';
  }); //login_pw


});