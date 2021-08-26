'use strict';


//scrollTop button
const scrollTopBtn = document.querySelector('#scroll-top-button');
window.scroll(function(){
    // if(window.pageYoffset.scrollTop()>100){
    if(window.pageYoffset>100){
        scrollTopBtn.style.opacity =1;
        scrollTopBtn.style.transition = "all 0.35s";;
    } else if(window.pageYoffset>100){
        scrollTopBtn.style.opacity =0;
        scrollTopBtn.style.transition = "all 0.35s";;
    }
});
scrollTopBtn.addEventListener('click',function(e){
    window.scrollTo(0,0);
});

    const header = document.querySelector(".header");
    const topHeader = document.querySelector(".top-header");
    const bottomHeader = document.querySelector(".bottom-header");
    const headerHeight = header.clientHeight;
    // const headerHeight = 
    
//sec2로 이통하는 스크롤 버튼
const section2 = document.querySelector('.section.sec2')
const sec2MoveBtn = document.querySelector('.scrollBtn')

    sec2MoveBtn.addEventListener('click',function(e){
    sec2MoveBtn.style.transition = "all 0.25s";
    window.scroll({top:section2.offsetTop});
});

//////////////////////////////
//    header
//스크롤 내리면 헤더 숨겨지고
//도중 스크롤을 올렸을 때 nav만 출력된다
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset + (200 + 'px');
        if (prevScrollpos + 100 > currentScrollPos) {
            document.querySelector(".header").style.top = "0px";
            document.querySelector(".header").style.transition = "all 0.35s";
        } else {
            document.querySelector(".header").style.top = "-122px";
        }
        prevScrollpos = currentScrollPos;
    }

const gnbUl = document.querySelector('.gnb>ul');
const gnbUlLi = document.querySelectorAll('.gnb>ul>li');
const gnbWhiteBg = document.querySelector('.nav_white_bg');
const NLIVE =document.querySelector('.N-LIVE');

// NLIVE.addEventListener('mousemove', function(event){
//     gnbWhiteBg.classList.remove('whiteBgOn');
// });

gnbUlLi.forEach((el,idx)=>{
    el.addEventListener('mousemove', function(event){
    gnbWhiteBg.classList.add('whiteBgOn');
    });
    el.addEventListener('mouseout', function(event){
        gnbWhiteBg.classList.remove('whiteBgOn');
    });
});


// 사이트맵 클릭 시 페이지 구현
const spanMenuBtn = document.querySelector('span.menu.nav')
const spanMenuNav = document.querySelector('.res-nav')
const closeBtn2 = document.querySelector('.closeBtn')
spanMenuBtn.addEventListener('click', function(event){
    spanMenuNav.classList.add('navOpen');
})
closeBtn2.addEventListener('click',function(event){
    spanMenuNav.classList.remove('navOpen');

})


//goTo mouseover시 menu addClass
const goTo = document.querySelector('.goTo>ul')
const goToSubs = document.querySelectorAll('li.goTo-sub')
const goToMenu = document.querySelectorAll('li.goTo-sub>ul')


goTo.addEventListener('mouseout',function(event){
    let _target = event.target;
        goToSubs.forEach((el,idx)=>{
            if(_target==el){
                console.log('_target')
                goToMenu.forEach((el2,idx2)=>{
                    if(idx==idx2){
                        console.log('menuOn')
                        el2.classList.remove('menuOn')
                    } 
                    else {
                        el2.classList.remove('menuOn')
                    }
                });
            }
            
        });
});
    goToMenu.forEach((el) => {
        el.addEventListener('mouseout', function (event) {
            event.target.classList.remove('menuOn')
        });
    });




////////////////////////////////
//   container
//sec1 gallery
const gallery = document.querySelector('.gallery')
const galleryUl = document.querySelector('.gallery>ul')
const galleryUlLi = document.querySelectorAll('.gallery>ul>li')
const galleryLiH1 = document.querySelectorAll('.gallery>ul>li>h1')
const bcon = document.querySelector('.bcon')
const itemsUl = document.querySelector('.items>ul')
const itemsUlLi = document.querySelectorAll('.items>ul>li')
const sec2SlideItemTextBox =document.querySelectorAll('.item-text-box')
const sec2SlideItemText1 =document.querySelector('.item-text1')
const sec2SlideItemText2 =document.querySelector('.item-text2');
const arrItemText = [
    { 'itemText1' : '인생을 맛있게, 농심', 'itemText2' : ''},
    { 'itemText1' : '행복한 가치를 더합니다', 'itemText2' : ''},
    { 'itemText1' : '일상의 가치를 더합니다', 'itemText2' : ''},
    { 'itemText1' : 'Lovely Life, Lovely Food', 'itemText2' : '인생을 맛있게, 농심'},
]


const sec1BgArr = [];
for(let i=0; i<galleryUlLi.length; i++){
    sec1BgArr.push(`url(img/sec1_${i}.jpg) no-repeat 50% /cover`);
    galleryUlLi[i].style.background = sec1BgArr[i]
}

let i=-1;
function autoGallery(){
    if(i>=galleryUlLi.length-1) i=-1;
    i++;
    
    let gap = galleryUlLi[0].clientWidth;
    console.log(i);
    console.log(gap);
    
    gallery.style.transition= "all 0.5s";
    gallery.style.transform= 'translateX(-' + (gap * i) + 'px';

    galleryTextAnimation(i);

    itemsUlLi.forEach((el,idx2)=>{
        if(i==idx2){
            el.classList.add('on');
            galleryTextAnimation(i);
        } else {
            el.classList.remove('on');
        }
    });

    if(i>=galleryUlLi.length-1) i=-1;
}
let setIn = setInterval(autoGallery,5000);



function galleryTextAnimation(key){
    sec2SlideItemTextBox.forEach((el,idx)=>{
        if(i==idx){
            el.children[0].innerText=arrItemText[key].itemText1;
            el.children[1].innerText=arrItemText[key].itemText2;
            el.classList.add('textAnimationOn')
        } else {
            el.classList.remove('textAnimationOn')
        }
    });
}


const gBtns = document.querySelectorAll('.gBtn')
const playBtn = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause')


pauseBtn.addEventListener('click',()=>{
    clearInterval(setIn);
    console.log('stop');
    pauseBtn.classList.add('playPauseHide');
    playBtn.classList.remove('playPauseHide')
});
playBtn.addEventListener('click',()=>{
    setIn = setInterval(autoGallery,5000);
    console.log('play');
    playBtn.classList.add('playPauseHide');
    pauseBtn.classList.remove('playPauseHide')
});

const overOut=document.querySelectorAll('.overOut')

itemsUlLi.forEach((el,idx)=>{
    el.addEventListener('click',(event)=>{
        let _target=event.target;

        if(_target==el){
            console.log(`item idx : ${idx}`);
            console.log(_target);
            console.log(el);

            itemsUlLi.forEach((el,idx2)=>{
                if(idx==idx2){
                    el.classList.add('on');
                    galleryTextAnimation(idx);
                } else {
                    el.classList.remove('on');
                }
            })
            
            i=idx;
            galleryTextAnimation(idx);

            let gap = galleryUlLi[0].clientWidth;
            gallery.style.transform= 'translateX(-' + (gap * idx) + 'px';
            gallery.style.transition= "all 0.5s";
        } 
    });
});


//즉시실행함수
(()=>autoGallery())();



//section.sec2 banner
const sec2Con = document.querySelector('.section.sec2>.sec-con')
const sec2SlideUl = document.querySelector('ul.slide_items_list')
const sec2SlideLi = document.querySelectorAll('li.slide_item');
const sec2SlideImg = document.querySelectorAll('.slide_item>.thumbnail-img')
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIdx = 0,
    slideCount = sec2SlideLi.length,
    slideWidth = sec2SlideLi[0].offsetWidth,
    slideMargin = 50;


    // for(let i = 0; i <= slideCount; i++){
    //     if(i%2==0){
    //         sec2SlideLi[i].style.marginTop = '75px';
    //     }
    // }

//Section.sec2 slide js

makeClone();

function makeClone() {
    //li 전체를 마지막 뒤에 clone 생성
    for(let i=0; i<slideCount; i++){
        let cloneSlide = sec2SlideLi[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        sec2SlideUl.appendChild(cloneSlide);
    }
    //li 전체를 처음 앞에 clone 생성
    for(let i = slideCount - 1; i>=0; i--){
        let cloneSlide = sec2SlideLi[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        sec2SlideUl.prepend(cloneSlide);
    }
    
    updateWidth();
    setInitialPos();
    setTimeout(function(){
        sec2SlideUl.classList.add('animated')
    },100)
};

function updateWidth(){
    let currentSlides = document.querySelectorAll('li.slide_item');
    let newSlideCount = currentSlides.length;
    //ul width
    let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    sec2SlideUl.style.width = newWidth;
};

//prev시 초기위치를 잡는 콜백함수
function setInitialPos(){
    let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    sec2SlideUl.style.transform = 'translateX(' + initialTranslateValue+'px)';
};

    //ul width
    sec2SlideUl.style.width= (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

    //slide controls
    nextBtn.addEventListener('click', function(){
        moveSlide(currentIdx + 1);
    });
    prevBtn.addEventListener('click', function(){
        moveSlide(currentIdx - 1);
    });

    //loop slide
function moveSlide(num){
    sec2SlideUl.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);

    if(currentIdx == slideCount || currentIdx == -slideCount){
        setTimeout(function(){
            sec2SlideUl.classList.remove('animated')
            sec2SlideUl.style.left='0px';
            currentIdx = 0;
        },500)
        setTimeout(function(){
            sec2SlideUl.classList.add('animated')
        },600)
    }
}




//section.sec4 slide

//sec4 배경이미지
// const sec4Slide = document.querySelector('.sec4-slide')
// const thumbnailImg = sec4Slide.querySelectorAll('.thumbnail-img');
// const BgArr=[];

// for(let i=0; i<thumbnailImg.length; i++){
//     BgArr.push(`url(img/sec4_${i}.jpg) no-repeat 50% /cover`);
//     thumbnailImg[i].style.background=BgArr[i];
// }

// //슬라이드 구현하기
// //동작 정의
// //1. 슬라이드 이동은 마우스, 터치 및 클릭 상호 작용으로 가능해야 한다
// //2. 변속은 앞뒤로

// //초기화
// var slider = document.getElementById('slider'),
//     sliderItems = document.getElementById('slides'),
//     prev = document.querySelector('.control.prev'),
//     next = document.querySelector('.control.next');

// //원하는 요소로 슬라이더를 초기화하는 함수를 선언하고 호출하기
// slide(slider, sliderItems, prev, next);

// //호출함수
// function slide(wrapper, items, prev, next) {
//     //함수에 필요한 변수 선언
//     var posX1 = 0,
//         posX2 = 0,
//         posInitial,
//         posFinal,
//         threshold = 100,
//         slides = items.getElementsByClassName('slide'),
//         slidesLength = slides.length,
//         slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
//         firstSlide = slides[0],
//         lastSlide = slides[slidesLength - 1],
//         cloneFirst = firstSlide.cloneNode(true),
//         cloneLast = lastSlide.cloneNode(true),
//         index = 0,
//         allowShift = true;

//     // 가장 첫 번째와 마지막 슬라이드 복제
//     // 첫 번째 슬라이드에서 뒤로 슬라이드하면 마지막 슬라이드를 보고 
//     // 마지막 슬라이드에서 앞으로 슬라이드하면 첫 번째 슬라이드
//     items.appendChild(cloneFirst);
//     items.insertBefore(cloneLast, firstSlide);
//     //모두 렌더링되면 슬라이드 목록에 클래스를 추가
//     wrapper.classList.add('loaded');

//     //이벤트 정의
//     //마우스/터치 상호 작용이 시작, 발생 및 종료되는 이벤트 설정
//     //마우스 이벤트
//     items.onmousedown = dragStart;

//     // 터치 이벤트
//     items.addEventListener('touchstart', dragStart);
//     items.addEventListener('touchend', dragEnd);
//     items.addEventListener('touchmove', dragAction);

//     // 클릭 이벤트
//     prev.addEventListener('click', function () {
//         shiftSlide(-1)
//     });
//     next.addEventListener('click', function () {
//         shiftSlide(1)
//     });

//     // Transition events
//     items.addEventListener('transitionend', checkIndex);

//     //onmousedown, touchend
    
//     //드래그, 슬라이딩, 이동이 시작된 곳
//     //초기 위치는 현재 항목 offset, 이벤트 유형에 따라 첫 번째 X 위치 설정
//     function dragStart(e) {
//         e = e || window.event;
//         e.preventDefault();
//         posInitial = items.offsetLeft;
//         console.log(`posInitial: ${posInitial}`);


//         if (e.type == 'touchstart') {
//             posX1 = e.touches[0].clientX;
//         } else {
//             posX1 = e.clientX;
//             console.log(`e.clientX: ${e.clientX}`);
//             document.onmouseup = dragEnd;
//             document.onmousemove = dragAction;
//         }
//     }

//     function dragAction(e) {
//         e = e || window.event;

//         if (e.type == 'touchmove') {
//             posX2 = posX1 - e.touches[0].clientX;
//             posX1 = e.touches[0].clientX;
//         } else {
//             posX2 = posX1 - e.clientX;
//             posX1 = e.clientX;
//         }
//         items.style.left = (items.offsetLeft - posX2) + "px";
//     }

//     // touchend 및 mouseup 이벤트
//     // 비교해야 할 항목의 초기 및 최종 위치가 div에 사이의 차이를 함께 임계 값 
//     function dragEnd(e) {
//         posFinal = items.offsetLeft;
//         console.log(`posFinal: ${posFinal}`);
//         console.log(`posInitial: ${posInitial}`);

//         if (posFinal - posInitial < -threshold) {
//             shiftSlide(1, 'drag');
//         } else if (posFinal - posInitial > threshold) {
//             shiftSlide(-1, 'drag');
//         } else {
//             items.style.left = (posInitial) + "px";
//         }

//         document.onmouseup = null;
//         document.onmousemove = null;
//     }

//     function shiftSlide(dir, action) {
//         items.classList.add('shifting');

//         if (allowShift) {
//             if (!action) {
//                 posInitial = items.offsetLeft;
//             }

//             if (dir == 1) {
//                 items.style.left = (posInitial - slideSize) + "px";
//                 index++;
//             } else if (dir == -1) {
//                 items.style.left = (posInitial + slideSize) + "px";
//                 index--;
//             }
//         };

//         allowShift = false;
//     }

//     function checkIndex() {
//         items.classList.remove('shifting');

//         if (index == -1) {
//             items.style.left = -(slidesLength * slideSize) + "px";
//             index = slidesLength - 1;
//         }

//         if (index == slidesLength) {
//             items.style.left = -(1 * slideSize) + "px";
//             index = 0;
//         }

//         allowShift = true;
//     }
// }





//section.sec7

const mapCon = document.querySelector('.worldMap-con')
const mapScrollUl = document.querySelector('.map-tab-scroll>ul')
const mapScrollUlLi = document.querySelectorAll('.overOut2')
const mapInfoLeft = document.querySelectorAll('.map-info-left')
const mapInfoRight = document.querySelectorAll('.map-info-right')
const mapPin =document.querySelectorAll('.map-location-icon')
const mapInfoTextbox1 =document.querySelectorAll('.map-info-textbox.num1')
// const mapInfoLeft = document.querySelector('.map-info-left')

const infoTextBox = [
    {   country : 'China',
        mapInfoTitle : ' 중국 현지인을 감동시킨 농심의 매운 맛',
        mapInfoTxT : '품질에 대한 자부심을 바탕으로 중국 전역에 농심의 맛 그대로 프리미엄 이미지를 뿌리내리고 있습니다.',
        topTxt :  '2019년 중국지역 매출', strongTxt : '2억 7천만', sideTxt : '달러 돌파'},
    {   country : 'United States',
        mapInfoTitle : ' 미국시장 최고의 브랜드를 목표로',
        mapInfoTxT : '미국 내에서 농심 제품들은 이제 한인 사회를 넘어 미국 소비자들이 먼저 알고 찾는 글로벌 브랜드 반열에 올라섰습니다.',
        topTxt :  '2019년 미국지역 매출', strongTxt : '2억 9천만', sideTxt : '달러 돌파'},
    {   country : 'Japan',
        mapInfoTitle : ' 일본 매운맛 라면 시장을 선도하는 농심',
        mapInfoTxT : '신라면을 중심으로 브랜드 파워를 강화하여 경쟁이 치열한 일본 라면시장에서 매운맛 No.1으로 도약하고자 노력하고 있습니다.',
        topTxt :  '2019년 일본지역 매출', strongTxt : '6.5천만', sideTxt : '달러 돌파'},
    {   country : 'AUSTRALIA',
        mapInfoTitle : ' 오세아니아를 매료시킨 농심의 매운 맛',
        mapInfoTxT : '호주 법인을 통해 오세아니아 공략에 박차를 가하고 있으며, 현재 호주 양대 소매유통기업인 Woolworths 와 Coles에 辛라면을 입점시켜 판매하고 있습니다.',
        topTxt :  '2019년 호주지역 매출', strongTxt : '3천만', sideTxt : '달러 돌파'},
    {   country : 'VIETNAM',
        mapInfoTitle : ' 동남아지역의 HUB, 베트남법인 설립',
        mapInfoTxT : '호치민 법인을 통해 베트남 전 지역에 농심의 맛을 알리고 있습니다. 더 나아가 동남아시아 지역의 허브로 도약할 것입니다.',
        topTxt :  '2019년 1월', strongTxt : '베트남법인', sideTxt : '설립'},
    {   country : 'CANADA',
        mapInfoTitle : '미국을 넘어서 북미전역으로 농심의 맛 전파',
        mapInfoTxT : '국내를 넘어 해외에서도 인정 받는 농심의 라면은 캐나다에서도 사랑을 받고 있습니다.',
        topTxt :  '2020년 1월', strongTxt : '캐나다법인', sideTxt : '설립'},
]


mapScrollUl.addEventListener('click', function (event) {
    let _target = event.target;
    console.log(_target);
    mapScrollUlLi.forEach((el, idx) => {
        if (_target == el) {
            console.log(el);
            let gap2 = mapScrollUlLi[0].clientHeight;
            el.children[0].classList.add('dotOn');
            el.classList.add('tabOn');
            mapInfoLeft.forEach((el, idx2) => {
                if (idx == idx2) {
                    console.log(el);
                    console.log(el.children[0]);
                    console.log(el.children[1].children[0]);
                    console.log(el.children[1].children[1]);
                    el.classList.add('infoOn');
                    el.children[0].classList.add('infoOn');
                    el.children[1].children[0].innerText = infoTextBox[idx2].mapInfoTitle;
                    el.children[1].children[1].innerText = infoTextBox[idx2].mapInfoTxT;
                    // el.classList.add('active1');
                } else {
                    el.classList.remove('infoOn');
                    // el.classList.remove('active1')
                    el.children[0].classList.remove('infoOn');
                }
            });
            mapInfoRight.forEach((el, idx3) => {
                if (idx == idx3) {
                    console.log(el);
                    console.log(el.children[0]);
                    console.log(el.children[1]);
                    console.log(el.children[2]);
                    el.classList.add('infoOn');
                    el.children[0].innerText = infoTextBox[idx3].topTxt;
                    el.children[1].innerText = infoTextBox[idx3].strongTxt;
                    el.children[2].innerText = infoTextBox[idx3].sideTxt;
                    // el.classList.add('active1');
                } else {
                    el.classList.remove('infoOn');
                    // el.classList.remove('active1')
                    el.children[0].classList.remove('infoOn');
                }
            });
        } else {
            galleryUlLi[0].clientWidth;
            el.children[0].classList.remove('dotOn');

            el.classList.remove ('tabOn');
        }
    });
});

        // mapScrollUlLi.forEach((el) => {
        //     el.addEventListener('click', function (event) {
        //         mapInfoLeft.style.display = "block";
        //     })
        // })