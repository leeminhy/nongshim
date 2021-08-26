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

//$('.category-tab>ul>li') 클릭 시 li에 해당하는 카테고리 상품 출력
$('.category-tab>ul>li').on('click', function (event) {
    console.log($(event.target));
    $(event.target).addClass('tapOn').siblings().removeClass('tapOn');
    let eIndex = $(event.target).index();
    
    secLiFun(eIndex);
    let pdListLength = '총 '+ $('.products-list-grid>ul').children().length +'건의 상품이 있습니다.'
    $('.category-tab>p').text(pdListLength);
})  


$('.gnb>ul>li').on('mouseover', function(){
    $('.nav_white_bg').addClass('whiteBgOn');
    let _height=$(this).find('ul.sub-item').height();
    console.log($(this))
    console.log($(this).index())
    let eIdx = $(this).index();
    $('.nav_white_bg').height(_height+180);

    // console.log($(this).find('ul.sub-item').height());
})

$('.gnb>ul').on('mouseout', function(){
    $('.nav_white_bg').removeClass('whiteBgOn');
})


//products-list-grid object
let products = 
[
    [ //A00
        { cat: 'A00', title: '신라면볶음면', hideText: '빠져드는 매운맛', new:true},
        { cat: 'A00', title: '배홍동', hideText: '비빔면 핫플레이스!! 배홍동', new:true},
        { cat: 'A00', title: '감자면', hideText: '감자로 만들어 쫄깃~한 면발 감자면' },
        { cat: 'A00', title: '김치사발면', hideText: '시원하고 얼큰한 김치찌개맛 김치사발면' },
        { cat: 'A00', title: '너구리', hideText: '쫄깃쫄깃 ~ ♪ 오동통통 ~ ♩♪ 너구리 한 마리 몰고가세요 ~ 너구리' },
        { cat: 'A00', title: '농심 사리면', hideText: '이제 찌개 먹을때도 농심 사리면' },
        { cat: 'A00', title: '농심 쌀국수', hideText: '가벼운 한끼식사, 농심쌀국수/소고기장국' },
        { cat: 'A00', title: '농심가락(업소용)', hideText: '맛이 살아있는 농심가락' },
        { cat: 'A00', title: '둥지냉면', hideText: '냉면은 둥지냉면' },
        { cat: 'A00', title: '맛짬뽕', hideText: '삼선짬뽕의 깊고 진한 맛 삼선 맛짬뽕' },
        { cat: 'A00', title: '메밀소바', hideText: '제대로 된 후루룩 메밀소바' },
        { cat: 'A00', title: '멸치칼국수', hideText: '시원하고 담백한! 멸치칼국수' },
        { cat: 'A00', title: '모듬해물탕면', hideText: '해산물을 모아 더 시원한 모듬 해물탕면' },
        { cat: 'A00', title: '무파마탕면', hideText: '속 시원한 무파마탕면' },
        { cat: 'A00', title: '보글보글 부대찌개면', hideText: '사골육수로 진한 부대찌개맛 보글보글 부대찌개면' },
        { cat: 'A00', title: '사리곰탕면', hideText: '진국의 맛! 사리곰탕면' },
        { cat: 'A00', title: '새우탕', hideText: '시원하고 개운한 맛! 새우탕' },
        { cat: 'A00', title: '생생우동', hideText: '국물이 끝내줘요! 생생우동' },
        { cat: 'A00', title: '신라면', hideText: '사나이 울리는 농심 辛라면' },
        { cat: 'A00', title: '신라면건면', hideText: '맛있고 깔끔하게! 辛라면건면' },
        { cat: 'A00', title: '신라면블랙', hideText: '뉴욕타임즈 선정 세계에서 가장 맛있는 라면 브랜드 신라면블랙' },
        { cat: 'A00', title: '안성탕면', hideText: '내입에 안성맞춤! 安城湯麵 안성탕면 SINCE 1983' },
        { cat: 'A00', title: '야채라면', hideText: '기름에 튀기지 않은 면발에 7가지 야채로 개운한 야채라면' },
        { cat: 'A00', title: '얼큰장칼국수', hideText: '칼국수다운 칼국수 칼국수 전문점의 맛 얼큰장칼국수' },
        { cat: 'A00', title: '오징어짬뽕', hideText: '짬뽕엔 역시 오징어!! 오징어짬뽕' },
        { cat: 'A00', title: '우육탕', hideText: '얼큰하고 진한 소고기 국물맛 우육탕 牛肉湯' },
        { cat: 'A00', title: '육개장', hideText: '한국인의 맛 육개장' },
        { cat: 'A00', title: '짜왕', hideText: '짜장면 보다 맛있는 짜왕' },
        { cat: 'A00', title: '짜파게티', hideText: '오늘은 내가 짜파게티 요리사' },
        { cat: 'A00', title: '짜파구리', hideText: '간편하게 즐기는 매콤한 컵라면' },
        { cat: 'A00', title: '짬뽕건면', hideText: '짬뽕보다 맛있는 짬뽕건면' },
        { cat: 'A00', title: '찰비빔면', hideText: '매콤달콤 내 입에 착~ 찰비빔면' },
        { cat: 'A00', title: '참치마요큰사발', hideText: '고소하게 비비자! 참치마요큰사발' },
        { cat: 'A00', title: '튀김우동', hideText: '진한 가쓰오 국물에 고소한 튀김이 어우러진 우동 농심 튀김우동' },
        { cat: 'A00', title: '특육개장큰사발면', hideText: '진하고 얼큰한, 전통 육개장의 맛 특육개장' },
        { cat: 'A00', title: '후루룩국수', hideText: '후루룩~ 후루룩~ 국수 먹는 재미 후루룩국수' },
    ],
    [ //B00
        { cat: 'B00', title: 'new 포테토칩 곱창이핫해', hideText: '숯불에 구운 매콤한 곱창 풍미', new:true },
        { cat: 'B00', title: 'new 감튀 레드칠리맛', hideText: '겉도바삭!속도바삭! 겉바속바', new:true },
        { cat: 'B00', title: 'new 옥수수깡', hideText: '옥수수맛 그대로~ 옥수수깡!', new:true },
        { cat: 'B00', title: '감자깡', hideText: '담백한 감자로 만든 감자깡' },
        { cat: 'B00', title: '감튀', hideText: '겉도 바삭! 속도 바삭! 감튀 레드칠리맛' },
        { cat: 'B00', title: '고구마깡', hideText: '맛있는 고구마로 만든 달콤한 스낵! 고구마깡 고구마깡' },
        { cat: 'B00', title: '구운새우칩', hideText: '얇게 구워 바삭 맛있어서 순삭 구운새우칩' },
        { cat: 'B00', title: '꿀꽈배기', hideText: '아카시아꿀로 만든 달콤한 꿀꽈배기' },
        { cat: 'B00', title: '닭다리', hideText: '모양도 맛도 닭다리! 닭다리' },
        { cat: 'B00', title: '바나나킥', hideText: '바나나 맛 그대로 바나나킥' },
        { cat: 'B00', title: '벌집핏자', hideText: '모양은 벌집, 맛은 핏자 벌집핏자를 먹으면 바비큐향 가득한 정통 핏자가 생각난다 ~ 벌집핏자' },
        { cat: 'B00', title: '별따먹자', hideText: '쌀로 만든 별모양 쌀과자 별따먹자' },
        { cat: 'B00', title: '새우깡', hideText: ' 손이가요 손이가 ~ 새우깡' },
        { cat: 'B00', title: '수미칩', hideText: ' 맛있는수미감자, 秀美칩' },
        { cat: 'B00', title: '알새우칩', hideText: ' 고소하고 담백한 새우칩! 알새우칩' },
        { cat: 'B00', title: '양파깡', hideText: ' 맛있는 양파 양파깡' },
        { cat: 'B00', title: '양파링', hideText: ' 재미있는 링스낵 양파링' },
        { cat: 'B00', title: '오징어다리', hideText: ' 갓다리가 왔다! 오징어다리' },
        { cat: 'B00', title: '오징어집', hideText: ' 고소한 버터구이 오징어스낵 오징어집' },
        { cat: 'B00', title: '옥수수깡', hideText: '옥수수맛 그대로~ 옥수수깡!'},
        { cat: 'B00', title: '인디안밥', hideText: ' 고소한 옥수수를 그대로 인디안밥' },
        { cat: 'B00', title: '자갈치', hideText: ' 맛도 모양도 문어! 자갈치' },
        { cat: 'B00', title: '조청유과', hideText: ' 고소한 전통 유과와 달콤한 조청의 우리 맛 스낵 조청유과' },
        { cat: 'B00', title: '쫄병스낵', hideText: ' 동글동글 뭉쳐 만든 라면스낵 쫄병스낵' },
        { cat: 'B00', title: '포스틱', hideText: ' 바삭함 끝판왕 포스 포스틱' },
        { cat: 'B00', title: '포테토칩', hideText: ' 국내최초 100% 生감자칩 포테토칩' },
        { cat: 'B00', title: '프레첼', hideText: ' 심쿵달달 하트맛 프레첼' }
    ],
    [ //C00
        { cat: 'C00', title: '웰치소다 오렌지 (355ml파워오투 패션후르트라임', hideText: '백산수info', new:true },
        { cat: 'C00', title: '웰치소다 오렌지 (355ml)', hideText: ' 웰치스 오렌지맛은 상큼한 오렌지 본연의 맛을 담은 소다 음료', new:true },
        { cat: 'C00', title: '백산수', hideText: '천지차이 백산수' },
        { cat: 'C00', title: '웰치', hideText: 'FAMILY FARMER OWNED 140여년 전통의 포도 명가 Welch‘s' },
        { cat: 'C00', title: '이토엔', hideText: '자연 그대로의 풍부한 맛과 향 이토엔 티' },
        { cat: 'C00', title: '카프리썬', hideText: '가족음료 카프리썬' },
        { cat: 'C00', title: '파워오투', hideText: '농축 산소로 한계에 도전하라!! 파워오투' },
        { cat: 'C00', title: '폴저스 커피', hideText: '미국 판매 1위, 정통 아메리카노 폴저스 ' },
        { cat: 'C00', title: 'Campbell´s V8', hideText: '맛있는 건강! 혼합야채주스 V8' }
    ],
    [ //D00
        { cat: 'D00', title: '쿡탐 고기곰탕면', hideText: '푸짐한 면요리를 간편하게 즐기는 쿡탐 고기곰탕면', new:true },
        { cat: 'D00', title: '냉동밥', hideText: '신선함까지 얼려버린 농심 냉동밥' },
        { cat: 'D00', title: '쿡탐 국물라볶이', hideText: '라면 X 떡볶이 맛있는 콜라보레이션 쿡탐 국물라볶이(짜파게티맛 국물라볶이, 새우깡 국물라볶이, 오징어짬뽕 국물라볶이, 매콤달콤 국물라볶이)' },
        { cat: 'D00', title: '쿡탐 국물요리', hideText: '농심의 노하우로 맛으로 인정받는 쿡탐 국물요리' },
        { cat: 'D00', title: '쿡탐 면요리 간편식', hideText: '푸짐한 면요리를 간편하게 즐기는 쿡탐 면요리 간편식' },
        { cat: 'D00', title: '쿡탐 전골요리', hideText: '집에서 간편하게 즐기는 외식 전골요리 요리를 탐하다 쿡탐' }
    ],
    [ //E00
        { cat: 'E00', title: 'new 후르체 딸기', hideText: '홈메이드 과일 디저트', new:true },
        { cat: 'E00', title: '구버', hideText: '잼과 땅콩버터의 FUN한 만남! SMUCKER´s GOOBER' },
        { cat: 'E00', title: '나토리', hideText: '온가족이 즐길 수 있는 나토리 스낵' },
        { cat: 'E00', title: '리세스', hideText: '미국 No.1 피넛버터 초콜릿 리세스' },
        { cat: 'E00', title: '린트', hideText: '스위스 프리미엄 초콜릿 전문 브랜드, 린트' },
        { cat: 'E00', title: '맥코믹', hideText: '믿을 수 있는 맛 맥코믹' },
        { cat: 'E00', title: '멘토스', hideText: 'STAY FRESH with MENTOS 달콤한 츄잉캔디 멘토스' },
        { cat: 'E00', title: '몰튼', hideText: '해조류, 우유 등에 많은 요오드 함유 소금 MORTON 몰튼' },
        { cat: 'E00', title: '보노', hideText: '세상에서 가장 따뜻한 힐링 vono 보노' },
        { cat: 'E00', title: '빌라블랑카 오일', hideText: 'Acesur Villa Blanca 스페인 프리미엄 오일' },
        { cat: 'E00', title: '사우어잭', hideText: '깔끔하고 맛있는 신맛의 젤리 사우어잭' },
        { cat: 'E00', title: '스머커스 잼', hideText: "세계인의 식탁에는 '스머커스'" },
        { cat: 'E00', title: '알쿠니아', hideText: '지중해 연안의 태양을 가득 담은 알쿠니아 황도 알쿠니아' },
        { cat: 'E00', title: '지프 땅콩버터', hideText: '미국 판매 1위, 지프 땅콩버터 Jif' },
        { cat: 'E00', title: '츄파춥스', hideText: 'Life less serious! 츄파춥스' },
        { cat: 'E00', title: '켈로그', hideText: '좋은 것만 드려요. 켈로그' },
        { cat: 'E00', title: '튤립햄', hideText: '덴마크 왕실 지정 Danish Crown Foods가 만든 덴마크 튤립햄' },
        { cat: 'E00', title: '프링글스', hideText: '어디까지 먹어봤니? 내가 모르는 프링글스의 세상! 프링글스' },
        { cat: 'E00', title: '하우스 와사비', hideText: '와사비 본연의 맛! 하우스와사비' },
        { cat: 'E00', title: '하우스 카레', hideText: '엄마의 사랑이 가득! 더 맛있는 루카레 하우스카레' },
        { cat: 'E00', title: '혼다시', hideText: '요리의 맛은 더 풍부하게, 뒷맛은 더 깔끔하게 일식 한식 요리에 혼다시' },
        { cat: 'E00', title: '후르체', hideText: '홈메이드 과일 디저트 후르체(Fruiche)' },
    ]
]

let imgTag;
let cat;
let title;
let hideText;
let elIdx;
let htmlTag = '';

function secLiFun(idx) {
    if (idx == 0) {
        $('.products-list-grid>ul').html('');

        products.forEach(el => {
            // console.log(el);
            el.forEach((el2,idx) => {
                // console.log(el2);
                console.log(el2);
                title = el2.title;
                cat = el2.cat;
                hideText = el2.hideText;
                elIdx = idx;
                $('.products-list-grid>ul').append(`<li class="${cat}">
                <a href="#" class="new">
                    <div class="on-product">
                        <div class="over-product hidden">
                            <p class="hide-text">${hideText}</p>
                            <div class="detail-btn">자세히보기</div>
                        </div>
                        <div class="product-img">
                            <img src="../img/brand/product2/pd_${cat}_${elIdx}.jpg"
                                alt="product_img">
                        </div>
                    </div>
                    <span class="pd-title">${title}</span>
                </a>
            </li>
            `);
            });
        });
        return false;

    }
    arrFun(idx);

    $('.products-list-grid>ul').html(htmlTag);
    // console.log(htmlTag); //append로 출력되는 것

}

function arrFun(idx2) {
    htmlTag='';
    $('.products-list-grid>ul').html('');
    console.log(`index -> ${idx2}`)
    let arrKey = idx2 - 1;

    products[arrKey].forEach((el,idx3) => {
        // title = el + '';
        title = el.title + '';
        cat = el.cat + '';
        hideText = el.hideText + '';
        elIdx = idx3;
        htmlTag += `<li class="${cat}">
        <a href="#" class="new">
            <div class="on-product">
                <div class="over-product hidden">
                    <p class="hide-text">${hideText}</p>
                    <div class="detail-btn">자세히보기</div>
                </div>
                <div class="product-img">
                    <img src="../img/brand/product2/pd_${cat}_${elIdx}.jpg"
                        alt="product_img">
                </div>
            </div>
            <span class="pd-title">${title}</span>
        </a>
    </li>
    `;
    });

    return;

}

if($('.category-tab>ul>li').index() == 0) {
    products.forEach(el => {
        // console.log(el);
        el.forEach((el2,idx) => {
            // console.log(el2);
            title = el2.title;
            cat = el2.cat;
            hideText = el2.hideText;
            elIdx = idx;
            $('.products-list-grid>ul').append(`<li class="${cat}">
            <a href="#" class="new">
                <div class="on-product">
                    <div class="over-product hidden">
                        <p class="hide-text">${hideText}</p>
                        <div class="detail-btn">자세히보기</div>
                    </div>
                    <div class="product-img">
                        <img src="../img/brand/product2/pd_${cat}_${elIdx}.jpg"
                            alt="product_img">
                    </div>
                </div>
                <span class="pd-title">${title}</span>
            </a>
        </li>
        `);
        });
    });
    htmlTag='';
    // return false;
    let pdListLength = '총 '+ $('.products-list-grid>ul').eq(0).children().length +'건의 상품이 있습니다.'
    $('.category-tab>p').text(pdListLength);
}


