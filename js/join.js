'use strict';


const modalTermsBtn = document.querySelectorAll('.modal-terms-button');
const modalTermsBoxes = document.querySelectorAll('.terms-section-infobox');
const closeBtn = document.querySelectorAll('.close');

modalTermsBtn.forEach((el,idx)=>{
        el.addEventListener('click', function (e) {
            // modalTermsBoxes.for
            console.log(e.target)
            console.log(idx)
            modalTermsBoxes.forEach((el,idx2)=>{
                if(idx==idx2){
                    modalTermsBoxes[idx2].style.display="block";
                    closeBtn[idx2].style.display="block";
                }
        })
    })
})
closeBtn.forEach((el,idx)=>{
    el.addEventListener('click', function (e) {
         modalTermsBoxes[idx].style.display="none";
         closeBtn[idx].style.display="none";
    })
})


// form 유효성 검사
const joinForm = document.querySelector('form');
const userPhoneAuth = document.querySelector('#phoneAuth');
const userPhoneInput = document.querySelectorAll('.phone2');
const userId = joinForm.querySelector('#userId');
const userPw = joinForm.querySelector('#userPw1');
const userPwConfirm = joinForm.querySelector('#userPw2');
const userBirth = joinForm.querySelector('#userBirth');
const userBirthYear = joinForm.querySelector('#userBirth');
const userBirthMonth = joinForm.querySelector('#userBirth');
const userBirthDay = joinForm.querySelector('#userBirth');
const userEmail1 = joinForm.querySelector('#email1');
const userEmail2 = joinForm.querySelector('#email2');
const userEmail3 = joinForm.querySelector('#email3');
const checkIdDuplicate = document.querySelector('#checkIdDuplicate');
const joinOkBtn = document.querySelector('#joinOkBtn'); 
const checkPwText = document.querySelector('span.input-check-text2');

// 년,일 select 동적 생성
appendYear();
appendMonth();
appendDay();

// userEmail3.onchange = emailCheck();
//Id 중복확인 전 Id 유효성 검사
checkIdDuplicate.addEventListener('click',checkIdDuplFunc);
//회원가입 유효성 검사
joinOkBtn.addEventListener('click', joinOkFunc);



function joinOkFunc(){

    //user phoneAuth
    if(userPhoneInput[0].value==''){
        alert('휴대폰 번호1를 입력하세요');
        userPhoneInput[0].focus();
        return false;
    }
    if(userPhoneInput[0].value.length<=0 || userPhoneInput[0].value.length>4){
        alert('휴대폰 번호1를 입력하세요');
        userPhoneInput[0].focus();
        return false;
    }
    if(userPhoneInput[1].value==''){
        alert('휴대폰 번호1를 입력하세요');
        userPhoneInput[1].focus();
        return false;
    }
    if(userPhoneInput[1].value.length<=0 || userPhoneInput[1].value.length>4){
        alert('휴대폰 번호1를 입력하세요');
        userPhoneInput[1].focus();
        return false;
    }

    //Id Check
    if(userId.value=='' || userId.value.length<=0){
        alert('아이디를 입력하세요');
        userId.focus();
        return false;
    }
    if(userId.value.length<4 || userId.value.length>12){
        alert('아이디를 입력하세요')
        userId.focus();
        return false;
    }
    //Pw1 Check
    if(userPw.value=='' || userPw.value.length<=0){
        alert('비밀번호를 입력하세요');
        userPw.focus();
        return false;
    }
    if(userPw.value.length<8 && userPw.value.length>16){
        alert('비밀번호를 입력하세요')
        userPw.focus();
        return false;
    }
    //Pw2(pwConfirmed) Check
    if(!confirmPassword()){
        userPwConfirm.focus();
        return false;
    }
    //
    //userEmail Check
    if(userEmail1.value=='' || userEmail1.value.length<=0){
        alert('이메일1을 입력하세요');
        userEmail1.focus();
        return false;
    }
    if(userEmail2.value=='' || userEmail2.value.length<=0){
        alert('이메일2을 입력하세요');
        userEmail2.focus();
        return false;
    }
        // userEmail 직접입력선택 시
    if(userEmail3.value=='1'){
        userEmail2.getAttribute('readonly');
        userEmail2.setAttribute('readonly',false);
        userEmail2.value=='';
    } else {
        userEmail2.getAttribute('readonly');
        userEmail1.setAttribute('readonly',true);
        userEmail2.value=='';
    }

    

    alert('회원가입 완료')
    // loginForm.submit();

}

function checkIdDuplFunc(){

    //Id Check
    if(userId.value=='' || userId.value.length<=0){
        alert('아이디를 입력하세요');
        userId.focus();
        return false;
    }
    if(userId.value.length<4 && userId.value.length>12){
        alert('아이디를 입력하세요')
        userId.focus();
        return false;
    }

    console.log('중복확인 완료')
}


function confirmPassword(){
    if(userPw.value==userPwConfirm.value){
        checkPwText.innerText ='';
        checkPwText.style.color='#96c11f';
        return true;
    } else {
        checkPwText.innerText ='비밀번호가 일치하지 않습니다';
        checkPwText.style.color='#da1009';
        checkPwText.style.fontWeight='bold';
        userPwConfirm.style.border = '1px solid #da1009';
        userPw.style.border = '1px solid #da1009';
        return false;
    }

}

// 생년월일 select 동적 생성

function appendYear(){
	var date = new Date();
	var year = date.getFullYear();
	var selectValue = document.querySelector("#year");
	var optionIndex = 0;
	for(var i=year;i>=year-100;i--){
			selectValue.add(new Option(i,i),optionIndex++);                        
	}
}
function appendMonth(){
	var selectValue = document.getElementById("month"); 
	var optionIndex = 0;

	for(var i=1;i<=12;i++){
			selectValue.add(new Option(i,i),optionIndex++);
	}
}
function appendDay(){
	var selectValue = document.querySelector("#day");
	var optionIndex = 0;

	for(var i=1;i<=31;i++){
			selectValue.add(new Option(i,i),optionIndex++);
	}
} 
function emailCheck(){
    let j = userEmail3.selectedIndex; //선택항목 index
    let eInput2=userEmail3.options[j].value //선택항목 value
    userEmail2.value = eInput2
    
}

