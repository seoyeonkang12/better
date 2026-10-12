document.addEventListener('DOMContentLoaded', function() {

  const raEmail = document.querySelector('.ra_email');
  const raPhone = document.querySelector('.ra_phone');

  const emailBox = document.querySelector('.email_box');
  const phoneBox = document.querySelector('.phone_box');

  const userId = document.querySelector('.user_id');
  const userName = document.querySelector('.user_name');
  const userEmail = document.querySelector('.user_email');
  const btnPw = document.querySelector('.btn_pw');

  const tel1 = document.getElementById('tel_first');
  const tel2 = document.getElementById('tel_second');
  const tel3 = document.getElementById('tel_third');
  const btnTel = document.querySelector('.btn_tel');

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

  raEmail.addEventListener('click', function() {
    emailBox.classList.add('on');
    phoneBox.classList.remove('on');
    btnPw.style.display = 'block';
    btnTel.style.display = 'none';
  });
  raPhone.addEventListener('click', function() {
    emailBox.classList.remove('on');
    phoneBox.classList.add('on');
    btnPw.style.display = 'none';
    btnTel.style.display = 'block';
  });

  btnPw.addEventListener('click', function() {
    const emailValue = userEmail.value.trim();

    if(userId.value === ''){
      alert('아이디를 입력해 주세요.');
      return;
    }
    if(userName.value === ''){
      alert('이름을 입력해 주세요.');
      return;
    }
    if(emailValue === ''){
      alert('이메일을 입력해 주세요.');
      return;
    }

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailCheck.test(emailValue)){
      alert('올바른 이메일 형식을 입력해 주세요.');
      return;
    }
    const user = users.find(function(user) {
      return user.id === userId.value &&
      user.name === userName.value &&
      user.email === userEmail.value;
    });
    if(user) {
      alert(`회원님의 비밀번호는 ${user.pw}입니다.`);
    } else {
      alert('입력하신 정보로 가입된 회원 아이디는 존재하지 않습니다.');
    }
  }); //id_emailFind


  btnTel.addEventListener('click', function() {
    const phone = tel1.value + tel2.value + tel3.value; 

    if(userId.value === ''){
      alert('아이디를 입력해 주세요.');
      return;
    }
    if(userName.value === ''){
      alert('이름을 입력해 주세요.');
      return;
    }
    if(tel2.value === '' || tel3.value === ''){
      alert('휴대폰 번호를 모두 입력해 주세요.');
      return;
    }
    if(!/^\d{4}$/.test(tel2.value) || !/^\d{4}$/.test(tel3.value)){
      alert('휴대폰 번호 항목이 숫자 형식이 아닙니다.');
      return;
    }
    const user = users.find(function(user) {
      return user.id === userId.value &&
      user.name === userName.value &&
      user.phone === phone;
    });
    if(user) {
      alert(`회원님의 비밀번호는 ${user.pw}입니다.`);
    } else {
      alert('입력하신 정보로 가입된 회원 아이디는 존재하지 않습니다.');
    }
    
  });//id_phoneFind

  tel2.addEventListener('keyup', moveTel);
  
  function moveTel() {
    if(tel2.value.length >=4){
      tel3.value = '';
      tel3.focus();
    }
  }


});