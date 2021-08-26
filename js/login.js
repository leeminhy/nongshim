'use strict';

const loginForm = document.querySelector('form');
const userId = loginForm.querySelector('#userId');
const userPw = loginForm.querySelector('#userPw');
const loginOkBtn = document.querySelector('#loginOkBtn'); 
//ID, PW 정규식
//아이디 : 영문, 숫자 조합 4~12자 
let regIdCheck = /^[a-z]+[a-z0-9]{4,12}$/g;
//비밀번호 : 영문, 숫자, 특수문자 조합 8~16자
let regPwCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/


loginOkBtn.addEventListener('click', loginOkFunc);

function loginOkFunc(event) {
    //ID 유효성 검사
    if(userId.value=='' || userId.value.length<=0){
        alert('아이디를 입력하세요')
        userId.focus();
        return false;
    }
    //영문 숫자(정규식) 조합 4~12자
    if(!regIdCheck.test(userId.value)){
        alert('아이디를 영문, 숫자 조합 4~12자 이내로 입력하세요');
        userId.focus();
        return false;
    }
    //return false 한 번 출력 후 재시도를 하면 통과되는 오류

    //PW 유효성 검사
    if(userPw.value=='' || userPw.value.length<=0){
        alert('패스워드를 입력하세요')
        userPw.focus();
        return false;
    }
    if(!regPwCheck.test(userPw.value)){
        alert('패스워드를 영문, 숫자 조합 4~12자 이내로 입력하세요');
        userPw.focus();
        return false;
    }
    
    console.log('로그인 완료');

    loginForm.submit();

}

//leftarrow 클릭 시 이전페이지
$(document).ready(function(){
	$("#homeBtn").click(function(){
		window.history.back();
	});

});
