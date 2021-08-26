'use strict';

const gnbUl = document.querySelector('.gnb>ul');
const gnbUlLi = document.querySelectorAll('.gnb>ul>li');
const gnbWhiteBg = document.querySelector('.nav_white_bg');

// 반응형 메뉴
const spanMenuBtn = document.querySelector('span.menu.nav')
const spanMenuNav = document.querySelector('.rwd-nav')
const closeBtn2 = document.querySelector('.closeBtn')
spanMenuBtn.addEventListener('click', function(event){
    spanMenuNav.classList.add('navOpen');
})
closeBtn2.addEventListener('click',function(event){
    spanMenuNav.classList.remove('navOpen');

})

//sub-item background #fff
$('.gnb>ul>li').on('mouseover', function(){
    $('.nav_white_bg').addClass('whiteBgOn');
    let _height=$(this).find('ul.sub-item').height();
    console.log($(this))
    console.log($(this).index())
    let eIdx = $(this).index();
    $('.nav_white_bg').height(_height+200);

    console.log($(this).find('ul.sub-item').height());
})

$('.gnb>ul').on('mouseout', function(){
    $('.nav_white_bg').removeClass('whiteBgOn');
})

//sub-item>li 상품명 mouseover 시 상품이미지 보여주기
for(let i = 0; i < $('ul.sub-item>li').length; i++){
    $('ul.sub-item>li').eq(i).on('mousemove', function () {
        $('ul.sub-item>li').eq(i).find('img').fadeIn(50).siblings().fadeOut(100);
    })
    $('ul.sub-item>li').eq(i).on('mouseout', function () {
        $('ul.sub-item>li').eq(i).find('img').fadeOut(100).siblings().fadeOut(100);
    })
}



const galleryLi= $('.gallery>ul>li');
const arrBg=[];

for(let i=0; i<galleryLi.length; i++) {
    arrBg.push('url(../img/brand/brand_sec1_'+i+'_bg.jpg) no-repeat 50% /cover');
    galleryLi.eq(i).css('background',arrBg[i]);
}


let i=-1;
let setOut;

function autoGallery(){
    i++;
    // if(i>=galleryLi.length-1) i=-1;

    console.log(i);
    let gap= galleryLi.eq(1).offset().left - galleryLi.eq(0).offset().left;
    let goto= -(gap * i)+'px';

    $('.gallery').animate({
        left: goto
    })

    $('.items>ul>li').eq(i).addClass('on').siblings().removeClass('on');

    setOut = setTimeout(autoGallery, 3000);
    if(i>=galleryLi.length-1) i=-1;
}

$('.overOut').hover(
    ()=>{ //mouseover
        clearTimeout(setOut);
    },
    ()=>{ //mouseout
        setOut = setTimeout(autoGallery, 4000);
    }
);

$('.items>ul>li').click((event)=>{
    let _this=$(event.target);
    let _this_index=$(event.target).index();
    console.log(_this_index)


    let gap= galleryLi.eq(1).offset().left - galleryLi.eq(0).offset().left;
    let goto= -(gap * _this_index)+'px';
    $('.gallery').animate({ left:goto },500);

    $('.items>ul>li').eq(_this_index).addClass('on').siblings().removeClass('on');
    // i = _this_index;
    // _this.addClass('on').siblings().removeClass('on');
});

$('span.arrow').on('click', function(event){
    let _this=$(event.target);
    let _this_index=$(event.target).index();
        if(_this_index==0){

            if(i <= 0) i=galleryLi.length; //i--; 이므로 -1 빼지 X
            i--;
            let gap= galleryLi.eq(1).offset().left - galleryLi.eq(0).offset().left;
            let goto= -(gap * i)+'px';
            $('.gallery').animate({ left:goto });
        
            $('.items>ul>li').eq(i).addClass('on').siblings().removeClass('on');
        
        } else if(_this_index==1){
            if(i >= galleryLi.length-1) i= -1; //i--; 이므로 -1 빼지 X
            i++;
            let gap= galleryLi.eq(1).offset().left - galleryLi.eq(0).offset().left;
            let goto= -(gap * i)+'px';
            $('.gallery').animate({ left:goto });
        
            $('.items>ul>li').eq(i).addClass('on').siblings().removeClass('on');

        }
});


( () => autoGallery())();