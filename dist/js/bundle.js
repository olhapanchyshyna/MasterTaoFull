/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards(){

    // -----------dilivery card------------


    // class DiliveryCard {
    //     constructor(src,alt,title,days,weight,prise,parentSelector,...classes){
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.days = days;
    //         this.weight = weight;
    //         this.prise = prise;
    //         this.parent = document.querySelector(parentSelector);
    //         this.class = classes;
    //     }


    //     render(){
    //         const element = document.createElement('div');

    //         if( this.class.length === 0){
    //             element.classList.add("slider-template__item");
    //         }else{
    //             this.class.forEach(item => element.classList.add(item));
    //         }
                
    //         element.innerHTML = `
    //             <div class="special-box">
    //                 <div class="img-box">
    //                     <img src= ${this.src} alt=${this.alt}>
    //                 </div>
    //                 <div class="options">${this.title}</div>
    //                 <ul class="attr">
    //                     <li class="attr-day">${this.days}</li>
    //                     <li class="attr-weight">${this.weight}</li>
    //                 </ul>
    //                 <div class="price">
    //                     <span>от </span> ${this.prise} <span class="text-white">$/кг</span>
    //                 </div>
    //                 <div class="button-group">
    //                     <button data-btn class="btn btn-primary">Оставить заявку</button>
    //                     <button class="btn btn-secondary">Заявка</button>
    //                 </div>
    //             </div>
        
    //         `;

    //         this.parent.append(element);

    //     }
    // }


    // new DiliveryCard(
    //     "img/slider-dilivery-1.png",
    //     "dilivery",
    //     'Авто - обычная',
    //     '9-15 дней',
    //     'от 5 кг',
    //     '2,5',
    //     '.dilivery .slider-template'
    // ).render();

    // new DiliveryCard(
    //     "img/slider-dilivery-2.png",
    //     "dilivery",
    //     'Авто - ускоренная',
    //     '9-12 дней',
    //     'от 15 кг',
    //     '3,5',
    //     '.dilivery .slider-template'
    // ).render();

    // new DiliveryCard(
    //     "img/slider-dilivery-3.png",
    //     "dilivery",
    //     'Авиа',
    //     '7-10 дней',
    //     'от 7 кг',
    //     '4,5',
    //     '.dilivery .slider-template'
    // ).render();

    // new DiliveryCard(
    //     "img/slider-dilivery-4.png",
    //     "dilivery",
    //     'Ж/д',
    //     '9-15 дней',
    //     'от 5 кг',
    //     '3,5',
    //     '.dilivery .slider-template'
    // ).render();

    // new DiliveryCard(
    //     "img/slider-dilivery-5.png",
    //     "dilivery",
    //     'Море',
    //     '9-15 дней',
    //     'от 5 кг',
    //     '2,5',
    //     '.dilivery .slider-template'
    // ).render();




    // services card


    // class ServicesCard {
    //     constructor(src,title,text,parentSelector,...classes){
    //         this.src = src;
    //         this.title = title;
    //         this.text = text;
    //         this.parent = document.querySelector(parentSelector);
    //         this.class = classes;
    //     }


    //     render(){
    //         const element = document.createElement('div');

    //         if(this.class.length === 0){
    //             element.classList.add('slider-template__item');
    //         }else{
    //             this.class.forEach(item => element.classList.add(item));
    //         }

    //         element.innerHTML = `
    //             <div class="special-box" style="${this.src};">
    //                 <div class="title">${this.title}</div>
    //                 <div class="description">
    //                     ${this.text}
    //                 </div>
    //                 <div class="button-group">
    //                     <button class="btn btn-secondary">Подробнее</button>
    //                 </div>
    //             </div>
    //         `;

    //         this.parent.append(element);
    //     }
    // }


    // new ServicesCard(
    //     "background-image: url(img/slider-services-1.png)",
    //     'Выкуп товара',
    //     'Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Украину - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Украина.',
    //     '.services .slider-template'
    //     // 'slider-template__item'
    // ).render();

    // new ServicesCard(
    //     "background-image: url(img/slider-services-2.png)",
    //     'Страховка груза',
    //     'Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Украину - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Украина.',
    //     '.services .slider-template'
    //     // 'slider-template__item'
    // ).render();

    // new ServicesCard(
    //     "background-image: url(img/slider-services-3.png)",
    //     'Аренда склада',
    //     'Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Украину - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Украина.',
    //     '.services .slider-template'
    //     // 'slider-template__item'
    // ).render();

    // new ServicesCard(
    //     "background-image: url(img/slider-services-4.png)",
    //     'Перевод денежных средств',
    //     'Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Украину - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Украина.',
    //     '.services .slider-template'
    //     // 'slider-template__item'
    // ).render();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modals(){
    
    // --------------modal--------------

    const   modal = document.querySelector('.form-container'),
            btn = document.querySelectorAll('[data-btn]'),
            close = document.querySelector('[data-close]');


    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    close.addEventListener('click', () => {
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            closeModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if(e.code === 'Escape'){
            closeModal();
        }
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliders(){


    // --------------Slides first-screen--------------

    const   slidesFirstScreen = document.querySelectorAll('.first-screen  .slick-slide'),
            sliderFirstScreen = document.querySelector('.first-screen'),
            prevFirstScreen = document.querySelector('.offer__slider-prev-first-screen'),
            nextFirstScreen = document.querySelector('.offer__slider-next-first-screen'),
            dotsFirstScreen = document.querySelectorAll('.first-screen .dot'),
            dotsWrapperFirstScreen = document.querySelector('.carousel-indicators-first-screen'),
            sliderWrapperFirstScreen = document.querySelector('.slider-template-first-screen'),
            widthFirstScreen = window.getComputedStyle(sliderWrapperFirstScreen).width,
            slidesFiledFirstScreen = document.querySelector('.offer__slider-inner-first-screen');

    let     slideIndexFirstScreen = 1,
            offsetFirstScreen = 0;    


    slidesFiledFirstScreen.style.width = 100 * slidesFirstScreen.length + '%';
    sliderFirstScreen.style.position = 'relative';
    slidesFiledFirstScreen.style.display = 'flex';
    slidesFiledFirstScreen.style.transition = '0.5s all';
    sliderWrapperFirstScreen.style.overflow = 'hidden';



    slidesFirstScreen.forEach(item => {
        item.style.width = widthFirstScreen;
    });


    dotsFirstScreen.forEach(item => {
        item.classList.remove('active-current-first-screen');
    });

    function showDots(i = 0){
        dotsFirstScreen[i].classList.add('active-current-first-screen');
    }
    showDots();


    nextFirstScreen.addEventListener('click', () =>{

        if (offsetFirstScreen == (+widthFirstScreen.slice(0, widthFirstScreen.length - 2) * (slidesFirstScreen.length - 1))) {
            offsetFirstScreen = 0;
        } else {
            offsetFirstScreen += +widthFirstScreen.slice(0, widthFirstScreen.length - 2); 
        }

        slidesFiledFirstScreen.style.transform = `translateX(-${offsetFirstScreen}px)`;

        if (slideIndexFirstScreen == slidesFirstScreen.length) {
            slideIndexFirstScreen = 1;
        } else {
            slideIndexFirstScreen++;
        }


        dotsFirstScreen.forEach(dot => dot.style.opacity = ".5");
        dotsFirstScreen[slideIndexFirstScreen-1].style.opacity = 1;
    });


    prevFirstScreen.addEventListener('click', () => {
        if (offsetFirstScreen == 0){
            offsetFirstScreen = (+widthFirstScreen.slice(0, widthFirstScreen.length - 2) * (slidesFirstScreen.length - 1));
        }else {
            offsetFirstScreen -= +widthFirstScreen.slice(0, widthFirstScreen.length - 2); 
        }

        slidesFiledFirstScreen.style.transform = `translateX(-${offsetFirstScreen}px)`;

        if(slideIndexFirstScreen == 1){
            slideIndexFirstScreen = slidesFirstScreen.length;
        }else {
            slideIndexFirstScreen--;
        }


        dotsFirstScreen.forEach(dot => dot.style.opacity = ".5");
        dotsFirstScreen[slideIndexFirstScreen-1].style.opacity = 1;
    });


    dotsFirstScreen.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndexFirstScreen = slideTo;
            offsetFirstScreen = +widthFirstScreen.slice(0, widthFirstScreen.length - 2) * (slideTo - 1);

            slidesFiledFirstScreen.style.transform = `translateX(-${offsetFirstScreen}px)`;

            

            dotsFirstScreen.forEach(dot => dot.style.opacity = ".5");
            dotsFirstScreen[slideIndexFirstScreen-1].style.opacity = 1;
        });
    });





    // --------------Slides advantages--------------


    
    const   slidesAdvantages = document.querySelectorAll('.advantages-item'),
            sliderAdvantages = document.querySelector('.advantages'),
            dotsAdvantages = document.querySelectorAll('.advantages .dot'),
            dotsWrapperAdvantages = document.querySelector('.carousel-indicators-advantages'),
            sliderWrapperAdvantages = document.querySelector('.advantes-row'),
            widthAdvantages = window.getComputedStyle(sliderWrapperAdvantages).width,
            slidesFiledAdvantages = document.querySelector('.offer__slider-inner-advantages');


    let     slideIndexAdvantages = 1,
            offsetAdvantages = 0;    



    if(document.documentElement.clientWidth <= 865){

        slidesFiledAdvantages.style.width = 100 * slidesAdvantages.length + '%';
        sliderAdvantages.style.position = 'relative';
        slidesFiledAdvantages.style.display = 'flex';
        slidesFiledAdvantages.style.transition = '0.5s all';
        sliderWrapperAdvantages.style.overflow = 'hidden';


        slidesAdvantages.forEach(item => {
            item.style.width = widthAdvantages;
        });


        dotsAdvantages.forEach(item => {
            item.classList.remove('active-current-advantages');
        });

    
        function showDotsAdvantages(i = 0){
            dotsAdvantages[i].style.opacity = 1;
        }
        showDotsAdvantages();



        dotsAdvantages.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');
    
                slideIndexAdvantages = slideTo;
                offsetAdvantages = +widthAdvantages.slice(0, widthAdvantages.length - 2) * (slideTo - 1);
    
                slidesFiledAdvantages.style.transform = `translateX(-${offsetAdvantages}px)`;
    
                
    
                dotsAdvantages.forEach(dot => dot.style.opacity = ".5");
                dotsAdvantages[slideIndexAdvantages-1].style.opacity = 1;
                // showDotsDilivery(slideIndexDilivery-1);
            });
        });
    
    }
    
    
    // --------------Slides dilivery--------------


    
    const   slidesDilivery = document.querySelectorAll('.dilivery .slider-template__item'),
            sliderDilivery = document.querySelector('.slider-template'),
            nextDilivery = document.querySelector('.offer__slider-next'),
            prevDilivery = document.querySelector('.offer__slider-prev'),
            dotsDilivery = document.querySelectorAll('.dilivery .dot'),
            dotsWrapperDilivery = document.querySelector('.carousel-indicators-dilivery'),
            sliderWrapperDilivery = document.querySelector('.slider-template'),
            widthDilivery = window.getComputedStyle(sliderWrapperDilivery).width,
            slidesFiledDilivery = document.querySelector('.offer__slider-inner');


    let     slideIndexDilivery = 1,
            offsetDilivery = 0;    


    slidesFiledDilivery.style.width = 100 * slidesDilivery.length + '%';
    // sliderDilivery.style.position = 'relative';
    slidesFiledDilivery.style.display = 'flex';
    slidesFiledDilivery.style.transition = '0.5s all';
    sliderWrapperDilivery.style.overflow = 'hidden';



    // slidesDilivery.forEach(item => {
    //     item.style.width = widthDilivery;
    // });




    function addSlideDilivery(src,title,day,weight,price){
        const parentDilivery = document.querySelector('.dilivery .offer__slider-inner');
        const cloneFirstSlideDilivery = document.createElement('div');

            cloneFirstSlideDilivery.classList.add('slider-template__item');
            cloneFirstSlideDilivery.innerHTML = `
                <div class="img-box">
                    <img src=${src} alt="dilivery">
                </div>
                <div class="options">${title}</div>
                <ul class="attr">
                    <li class="attr-day">${day}</li>
                    <li class="attr-weight">${weight}</li>
                </ul>
                <div class="price">
                    <span>от</span> ${price} <span class="text-white">$/кг</span>
                </div>
                <div class="button-group">
                    <button data-btn class="btn btn-primary">Оставить заявку</button>
                    <button class="btn btn-secondary">Заявка</button>
                </div>
            `;
            parentDilivery.append(cloneFirstSlideDilivery);
    }
    addSlideDilivery("src/img/dilivery/slider-dilivery-1.png",'Авто - обычная','9-15 дней', 'от 5 кг', '2,5');
    addSlideDilivery("src/img/dilivery/slider-dilivery-2.png",'Авто - ускоренная','9-12 дней', 'от 15 кг', '3,5');
    
        


    function listenerNextDilivery(){
        if (offsetDilivery == (+widthDilivery.slice(0, widthDilivery.length - 2)/3  * (slidesDilivery.length - 1))) { //650    px
            offsetDilivery = 0;
        } else {
            offsetDilivery += (+widthDilivery.slice(0, widthDilivery.length - 2)/3); 
        }

        slidesFiledDilivery.style.transform = `translateX(-${offsetDilivery}px)`;

        if (slideIndexDilivery == slidesDilivery.length) {
            slideIndexDilivery = 1;
        } else {
            slideIndexDilivery++;
        }

    }
   
    nextDilivery.addEventListener('click', listenerNextDilivery);



    function listenerPrevDilivery(){
        if (offsetDilivery == 0) {
            offsetDilivery = +widthDilivery.slice(0, widthDilivery.length - 2)/3 * (slidesDilivery.length - 1);
        } else {
            offsetDilivery -= (+widthDilivery.slice(0, widthDilivery.length - 2)/3);
        }

        slidesFiledDilivery.style.transform = `translateX(-${offsetDilivery}px)`;

        if (slideIndexDilivery == 1) {
            slideIndexDilivery = slidesDilivery.length;
        } else {
            slideIndexDilivery--;
        }

    }

    prevDilivery.addEventListener('click', listenerPrevDilivery);


    if(document.documentElement.clientWidth <= 1330){

        nextDilivery.removeEventListener('click', listenerNextDilivery);
        prevDilivery.removeEventListener('click', listenerPrevDilivery);

        
        nextDilivery.addEventListener('click', listenerNextDilivery2);
        prevDilivery.addEventListener('click', listenerPrevDilivery2);
    }





    function listenerNextDilivery2(){
        if (offsetDilivery == (+widthDilivery.slice(0, widthDilivery.length - 2)/2  * (slidesDilivery.length - 1))) { //650    px
            offsetDilivery = 0;
        } else {
            offsetDilivery += (+widthDilivery.slice(0, widthDilivery.length - 2)/2); 
        }

        slidesFiledDilivery.style.transform = `translateX(-${offsetDilivery}px)`;

        if (slideIndexDilivery == slidesDilivery.length) {
            slideIndexDilivery = 1;
        } else {
            slideIndexDilivery++;
        }

    }

    function listenerPrevDilivery2 (){
        if (offsetDilivery == 0) {
            offsetDilivery = +widthDilivery.slice(0, widthDilivery.length - 2)/2 * (slidesDilivery.length - 1);
        } else {
            offsetDilivery -= (+widthDilivery.slice(0, widthDilivery.length - 2)/2);
        }

        slidesFiledDilivery.style.transform = `translateX(-${offsetDilivery}px)`;

        if (slideIndexDilivery == 1) {
            slideIndexDilivery = slidesDilivery.length;
        } else {
            slideIndexDilivery--;
        }
    }





    if(document.documentElement.clientWidth <= 865){

        nextDilivery.removeEventListener('click', listenerNextDilivery2);
        prevDilivery.removeEventListener('click', listenerPrevDilivery2);


        dotsDilivery.forEach(item => {
            item.classList.remove('active-current-dilivery');
        });

    
        function showDotsDilivery(i = 0){
            dotsDilivery[i].classList.add('active-current-dilivery');
        }
        showDotsDilivery();



        dotsDilivery.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');
    
                slideIndexDilivery = slideTo;
                offsetDilivery = +widthDilivery.slice(0, widthDilivery.length - 2) * (slideTo - 1);
    
                slidesFiledDilivery.style.transform = `translateX(-${offsetDilivery}px)`;
    
                
    
                dotsDilivery.forEach(dot => dot.style.opacity = ".5");
                dotsDilivery[slideIndexDilivery-1].style.opacity = 1;
                // showDotsDilivery(slideIndexDilivery-1);
            });
        });
    
    }
    




    // --------------Slides services--------------

    


    const   slidesServices = document.querySelectorAll('.services .slider-template__item'),
            nextServices = document.querySelector('.offer__slider-next-services'),
            prevServices = document.querySelector('.offer__slider-prev-services'),
            dotsServices = document.querySelectorAll('.services .dot'),
            dotsWrapperServices = document.querySelector('.carousel-indicators-services'),
            currentServices = document.querySelectorAll('.services .current'),
            sliderWrapperServices = document.querySelector('.services .slider-template'),
            widthServices = window.getComputedStyle(sliderWrapperServices).width,
            slidesFiledServices = document.querySelector('.services .offer__slider-inner');

    
    let     slideIndexServices = 1, 
            offsetServices = 0;    


    slidesFiledServices.style.width = 100 * slidesServices.length + '%';
    slidesFiledServices.style.display = 'flex';
    slidesFiledServices.style.transition = '0.5s all';
    sliderWrapperServices.style.overflow = 'hidden';



    slidesServices.forEach(item => {
        item.style.width =  widthServices;
    });



    function addSlideServices(title,text,style){
        const parentServices = document.querySelector('#services .offer__slider-inner');
        const cloneFirstSlideServices = document.createElement('div');

            cloneFirstSlideServices.classList.add('slider-template__item');
            cloneFirstSlideServices.style = `${style}`;
            cloneFirstSlideServices.innerHTML = `
                <div class="slider-template__item-content" style=>
                    <div class="title">${title}</div>
                    <div class="description">
                        ${text};
                    </div>
                    <div class="button-group">
                        <button class="btn btn-secondary">Подробнее</button>
                    </div>
                </div>   
            `;
            parentServices.append(cloneFirstSlideServices);
    }
    addSlideServices('Выкуп товара', 'Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Украину -сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Украина.',"background-image: url(/src/img/services/slider-services-1.png);");
    addSlideServices('Страховка груза', 'Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Украину -сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Украина.',"background-image: url(/src/img/services/slider-services-2.png);");
        


    function listenerNextServices(){
        if (offsetServices == (+widthServices.slice(0, widthServices.length - 2)/3  * (slidesServices.length - 1))) { //650    px
            offsetServices = 0;
        } else {
            offsetServices += (+widthServices.slice(0, widthServices.length - 2)/3); 
        }

        slidesFiledServices.style.transform = `translateX(-${offsetServices}px)`;

        if (slideIndexServices == slidesServices.length) {
            slideIndexServices = 1;
        } else {
            slideIndexServices++;
        }
    }

    function listenerPrevServices(){
        if (offsetServices == 0) {
            offsetServices = +widthServices.slice(0, widthServices.length - 2)/3 * (slidesServices.length - 1);
        } else {
            offsetServices -= (+widthServices.slice(0, widthServices.length - 2)/3);
        }

        slidesFiledServices.style.transform = `translateX(-${offsetServices}px)`;

        if (slideIndexServices == 1) {
            slideIndexServices = slidesServices.length;
        } else {
            slideIndexServices--;
        }

    }

    nextServices.addEventListener('click', listenerNextServices);
    prevServices.addEventListener('click', listenerPrevServices);




    if(document.documentElement.clientWidth <= 1330){

        nextServices.removeEventListener('click', listenerNextServices);
        prevServices.removeEventListener('click', listenerPrevServices);

        
        nextServices.addEventListener('click', listenerNextServices2);
        prevServices.addEventListener('click', listenerPrevServices2);
    }





    function listenerNextServices2(){
        if (offsetServices == (+widthServices.slice(0, widthServices.length - 2)/2  * (slidesServices.length - 1))) { //650    px
            offsetServices = 0;
        } else {
            offsetServices += (+widthServices.slice(0, widthServices.length - 2)/2); 
        }

        slidesFiledServices.style.transform = `translateX(-${offsetServices}px)`;

        if (slideIndexServices == slidesServices.length) {
            slideIndexServices = 1;
        } else {
            slideIndexServices++;
        }
    }

    function listenerPrevServices2 (){
        if (offsetServices == 0) {
            offsetServices = +widthServices.slice(0, widthServices.length - 2)/2 * (slidesServices.length - 1);
        } else {
            offsetServices -= (+widthServices.slice(0, widthServices.length - 2)/2);
        }

        slidesFiledServices.style.transform = `translateX(-${offsetServices}px)`;

        if (slideIndexServices == 1) {
            slideIndexServices = slidesServices.length;
        } else {
            slideIndexServices--;
        }
    }





    if(document.documentElement.clientWidth <= 865){

        nextServices.removeEventListener('click', listenerNextServices2);
        prevServices.removeEventListener('click', listenerPrevServices2);

       
        dotsServices.forEach(item => {
            item.classList.remove('active-current-services');
        });


        function showDotsServices(i = 0){
            dotsServices[i].style.opacity = 1;
        }
        showDotsServices();

       



        dotsServices.forEach(dot => {
            dot.addEventListener('click', (e) => {
                console.log(dot);
                const slideTo = e.target.getAttribute('data-slide-to');
    
                slideIndexServices = slideTo;
                offsetServices = +widthServices.slice(0, widthServices.length - 2) * (slideTo - 1);
    
                slidesFiledServices.style.transform = `translateX(-${offsetServices}px)`;
    
    
                dotsServices.forEach(dot => dot.style.opacity = ".5");
                dotsServices[slideIndexServices-1].style.opacity = 1;
            });
        });
    
    }
    

    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");






document.addEventListener('DOMContentLoaded', () =>{

    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map