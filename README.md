# 💄 Better — 화장품 쇼핑몰

> **나에게 맞는 뷰티를 발견하다**
> 
> 피부 고민과 퍼스널 컬러를 바탕으로 다양한 뷰티 제품을 탐색할 수 있는 화장품 쇼핑몰입니다.  
> 상품을 둘러보는 과정이 조금 더 편리하고 즐거울 수 있도록 UI를 구성하고, 다양한 인터랙션을 구현했습니다.

🔗 [Better 웹사이트 바로가기](https://seoyeonkang.dothome.co.kr/)

## 📌 프로젝트 개요

Better는 피부 고민과 퍼스널 컬러 등 다양한 기준으로 상품을 탐색할 수 있도록 기획한 화장품 쇼핑몰 프로젝트입니다.  
상품 정보와 할인 혜택을 직관적으로 전달하고, 상품 상세정보부터 리뷰와 배송 안내까지 자연스럽게 탐색할 수 있도록 UI를 구성했습니다.

- **프로젝트 유형 :** 개인 프로젝트
- **개발 기간 :** 2026.05 ~ 2026.06 (약 2주)
- **담당 역할 :** 기획, UI 디자인, 퍼블리싱, 인터랙션 구현
- **작업 환경 :** PC · 모바일 적응형 웹
- **주요 기술 :** HTML5, CSS3, JavaScript, jQuery

## 🛠️ 기술 스택

- **Markup :** HTML5
- **Styling :** CSS3
- **Interaction :** JavaScript, jQuery
- **Slider :** Swiper, bxSlider
- **Data :** JSON
- **Storage :** localStorage

## 🎯 프로젝트 목표

- 직관적인 상품 탐색과 구매를 위한 UI 구성
- 슬라이드 및 스크롤 인터랙션을 활용한 사용자 경험 개선
- JavaScript와 jQuery를 활용한 동적 UI 및 데이터 처리 구현

## ✨ 주요 기능

### 1. 메인 페이지

- 베스트 상품 및 컬러별 상품 슬라이더 구현
- 가로 스크롤을 활용한 상품 목록 구성
- 스크롤 위치에 따른 진행 바 표시

<!-- 메인 페이지 GIF 삽입 -->

### 2. 상품 상세 페이지

- 상품 수량 변경 및 최소·최대 구매 수량 제한
- 상품 상세정보, 리뷰, 배송 안내 탭 구현

<!-- 상품 상세 페이지 GIF 삽입 -->

### 3. 로그인 및 회원가입

- JSON 데이터를 활용한 사용자 정보 확인
- 아이디 저장 기능 구현
- 전체 동의 및 개별 동의 체크박스 연동
  
<!-- 로그인 및 회원가입 GIF 삽입 -->

## 💻 핵심 코드 구현

### 1. 가로 스크롤 및 진행률 표시

가로 스크롤 콘텐츠에서 사용자의 현재 탐색 위치를 직관적으로 확인할 수 있도록 진행률 표시 기능을 구현했습니다.  

**💡 셀프 코드 리뷰**

- `scrollWidth`와 `clientWidth`로 전체 스크롤 가능 거리 계산
- `scrollLeft`를 활용해 현재 스크롤 위치 확인
- 전체 거리 대비 현재 위치의 비율 계산 및 진행률 바 갱신

~~~javascript
$(window).on('mousemove', function(e) {
  if (!isDrag || !currentSheet) return;

  const moveX = e.pageX - startX;
  currentSheet.scrollLeft(startScroll - moveX);
  updateBar(currentSheet);
});
~~~
~~~javascript
function updateBar(sheet) {
  const maxScroll = sheet[0].scrollWidth - sheet[0].clientWidth;

  if (maxScroll <= 0) {
    bar.css('width', '100%');
    return;
  }

  const percent = sheet.scrollLeft() / maxScroll * 100;
  bar.css('width', percent + '%');
}
~~~

### 2. 상품 수량 제어

상품 구매 수량이 최소 1개, 최대 10개로 제한되도록 구현하고, 제한에 도달하면 안내 메시지가 표시되도록 구성했습니다.

**💡 셀프 코드 리뷰**

- 수량 증가·감소에 따른 최소·최대 구매 가능 수량 검사
- 최대 10개 초과 및 최소 1개 미만 시 수량 보정
- 구매 수량 제한에 따른 안내 메시지 표시

~~~javascript
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
~~~

### 3. 로그인 및 약관 동의 처리

JSON 데이터를 활용해 사용자 정보를 확인하고, 아이디 저장과 약관 동의 기능을 통해 로그인 및 회원가입 과정을 편리하게 이용할 수 있도록 구성했습니다.

**💡 셀프 코드 리뷰**

- `fetch()`를 활용한 JSON 회원 데이터 호출
- `find()`로 입력 정보와 일치하는 사용자 탐색
- `localStorage`를 활용한 아이디 저장 및 불러오기
- 전체·개별 약관 체크박스 간 상태 연동
- 필수 약관 동의 여부 및 페이지 이동 처리

<details>
  <summary>login.js</summary>
  
~~~javascript
const saveId = localStorage.getItem('saveId');

if(saveId) {
  userId.value = saveId;
  idSave.checked = true;
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
//login_pw
~~~
</details>

<details>
  <summary>agreement.js</summary>
  
~~~javascript
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
~~~
~~~javascript
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
~~~
</details>

## 📂 프로젝트 폴더 구조

```text
better/
├── css/
│   ├── footer.css
│   ├── header.css
│   ├── header.js
│   ├── main.css
│   ├── main.js
├── images/
├── login/
│   ├── css/
│   ├── images/
│   ├── js/
│       ├── login.js
│       ├── users.json
│   ├── agreement.html
│   ├── find_id.html
│   ├── find_pw.html
│   ├── join.html
│   ├── join_complete.html
│   ├── login.html
├── sub/
│   ├── css/
│   ├── images/
│   ├── img_detail/
│   ├── cart.html
│   ├── detail.html
│   ├── history.html
│   ├── sub.html
└── index.html
```

## 📝 프로젝트 회고

이번 프로젝트를 통해 정적인 화면 구현을 넘어 JavaScript와 jQuery를 활용한 사용자 인터랙션 및 데이터 처리 경험을 쌓았습니다.

`fetch()`, `find()`, `localStorage`를 활용하며 데이터 탐색과 브라우저 저장 방식에 대한 이해를 넓혔습니다.  
앞으로는 공통 기능의 재사용성을 높이고 반응형 레이아웃과 웹 접근성을 고려해 유지보수하기 좋은 웹사이트를 구현할 수 있도록 개발 역량을 키워 나가겠습니다.
