document.addEventListener('DOMContentLoaded', function() {

  const memberTabs = document.querySelectorAll('.container .tab_box>div');
  const tabSheets = document.querySelectorAll('.container .tab_sheet');
  
  memberTabs.forEach(function(tab, index) {
    tab.addEventListener('click', function(){
      memberTabs.forEach(function(tab) {
        tab.classList.remove('on_tab');
      });
      tabSheets.forEach(function(sheet){
        sheet.classList.remove('on_sheet');
      });
      tab.classList.add('on_tab');
      tabSheets[index].classList.add('on_sheet');
    });
  }); //login_tab_click

  const idSave = document.querySelector('.id_save');
  const userId = document.querySelector('.user_id');
  const userPw = document.querySelector('.user_pw');
  const btnLogin = document.querySelector('.btn_login');

  const userName = document.querySelector('.user_name');
  const number = document.querySelector('.number');
  const numberPw = document.querySelector('.number_pw');
  const btnChk = document.querySelector('.btn_check');

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


  const saveId = localStorage.getItem('saveId');

  if(saveId) {
    userId.value = saveId;
    idSave.checked = true;
  }

  btnLogin.addEventListener('click', function(e){
    e.preventDefault();
    if(userId.value === ''){
      alert('아이디를 입력해 주세요.');
      userId.focus();
      return;
    }
    if(userPw.value === ''){
      alert('비밀번호를 입력해 주세요.');
      userPw.focus();
      return;
    }
    const user = users.find(function(user) {
      return user.id === userId.value &&
      user.pw === userPw.value;
    });

    if(user){
      if(idSave.checked){
          localStorage.setItem('saveId', userId.value);
      } else {
          localStorage.removeItem('saveId');
      }
      alert('로그인되었습니다.');
      location.href = '../index.html';
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  }); //login_pw


  btnChk.addEventListener('click', function(e) {
    e.preventDefault();

    if(userName.value === ''){
      alert('주문자명 항목은 필수 입력값입니다.');
      userName.focus();
      return;
    }
    if(number.value === ''){
      alert('주문번호 항목은 필수 입력값입니다.');
      number.focus();
      return;
    }
    if(numberPw.value === ''){
      alert('비회원주문 비밀번호 항목은 필수 입력값입니다.');
      numberPw.focus();
      return;
    }

    const user = users.find(function(user) {
      return user.name === userName.value &&
      user.orderNum === number.value &&
      user.pw === numberPw.value;
    });

    if(user) {
      alert('주문 조회');
      location.href = '../index.html';
    } else {
        lert('유효한 주문 번호가  아닙니다. 다시 입력해 주세요.');
      }
  }); //name_number_numberPw

  btnLogin.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      login();
    }
  });
  btnChk.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      login();
    }
  }); //btn_enter

});