[![Video Label](http://img.youtube.com/vi/JQFqtvcOhj0/0.jpg)](https://youtu.be/JQFqtvcOhj0)

# 1차 프로젝트 88문방구 FrontEnd 소개

### 배민문방구는 주식회사 우아한 형제들의 사이트로 재미있게 사는 (Live or buy) 경험을 추구하는 문구, 리빙, 책, 콜라보 한정판 제품을 판매하며 고유의 색감과 깔끔한 디자인과 탄탄한 기본적인 기능들이 합쳐져있는 온라인 커머스 사이트

</br>

- 문구 커머스사이트인 배민문방구 클론 프로젝트
- 2주라는 짧은 기간안에 클론
- 사이트 UI만 참고, 외부 라이브러리 사용 없이 코드는 모두 직접 작성
- Git 주소 : https://github.com/wecode-bootcamp-korea/32-1st-88stationery-frontend.git

</br>

# 개발 인원 및 기간

![20220505_205219](https://user-images.githubusercontent.com/66737450/167081567-29defd3c-70e4-4109-8667-ce7e6be0a62a.jpg)

- 개발기간 2022/4/25 ~ 2022/5/6
- 개발인원
  - 프론트엔드 : 정덕우,최규성,이수광,이현석
  - 백엔드 : 안남규,전예찬

# 사용기술

- FrontEnd : React.js, React Router, SASS
- BackEnd : Python, Django, AWS, MySQL

# 협업 툴

- Git
- Trello
- Slack
  Slack / Notion / Trello / Git을 이용해 소통 및 작업과정 공유와 필요한 데이터 정리

# 협업 및 작업 과정

### 매일 매일 스탠딩 미팅으로 진행과정 및 도움요청, 질문사항 정리 및 소통진행

![](https://blog.kakaocdn.net/dn/s58Pb/btrBluyXjoM/WM0JCSxAZrcxMYkNA7xTPK/img.gif)
![image](https://user-images.githubusercontent.com/66737450/167083143-9c2dbced-45aa-4f8a-b9bb-7f799a93bc69.png)
![image (1)](https://user-images.githubusercontent.com/66737450/167083152-b925216e-38a6-4383-b0fb-d7f432ca9587.png)

</br>

# 구현기능

- 메인화면 페이지 구성
- 메뉴바 구성 및 카테고리
- 검색기능
- 사이드바, 회원가입 & 로그인
- 상세페이지, 장바구니
- 1:1 문의 및 댓글 기능
- 마이페이지

# 담당한 부분

### Login
![image](https://user-images.githubusercontent.com/103011139/168606233-3d26a215-f754-4c4e-9bbf-595867fceb5c.png)
- 아이디, 비밀번호 유효성 검사
- 틀린 값일시 알림창 띄우기
- 맞는 값일 경우 통신 후 토큰 받아와 유저 정보 가져오기
- 사이드바에 유저 이름 띄우기

### Inquiry
![image](https://user-images.githubusercontent.com/103011139/168606282-9d8e6ced-e86b-45f7-9588-9bfad27cf5d9.png)
- 로그인 상태가 아닐시 사용불가 알림창 띄우기
- 제목, 텍스트 등 입력시 유저 이름과 등록한 날짜는 자동으로 불러와 생성 후 화면 렌더
- 삭제버튼 누를시 게시물 삭제 후 화면 렌더
- 게시물 내에 댓글 입력값 작성시 유저 이름과 날짜 불러와서 함께 등록 후 화면 렌더
- 게시물 내 삭제 버튼 클릭 시 댓글 삭제 후 화면 렌더

## 자세한 내용은 블로그 및 AWS 홈페이지 주소 확인바람
- 블로그 https://sueboi.tistory.com/25
- AWS http://3.137.123.220:8000/main

# Reference

- 이 프로젝트는 배민문방구 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
