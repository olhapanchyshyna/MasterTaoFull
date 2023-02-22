function sliders(){

    function showSlidersBig(slidesItem,sliderSelector,prevSelector,nextSelector,dotsSelector,sliderWrapperSelector,slidesFiledSelector,activeClass){

             // --------------Slides first-screen--------------

        const   slides = document.querySelectorAll(slidesItem),
                slider = document.querySelector(sliderSelector),
                prev = document.querySelector(prevSelector),
                next = document.querySelector(nextSelector),
                dots = document.querySelectorAll(dotsSelector),
                sliderWrapper = document.querySelector(sliderWrapperSelector),
                width = window.getComputedStyle(sliderWrapper).width,
                slidesFiled = document.querySelector(slidesFiledSelector);

        let     slideIndex = 1,
                offset = 0;    


        slidesFiled.style.width = 100 * slides.length + '%';
        slider.style.position = 'relative';
        slidesFiled.style.display = 'flex';
        slidesFiled.style.transition = '0.5s all';
        sliderWrapper.style.overflow = 'hidden';


        slides.forEach(item => {
            item.style.width = width;
        });


        dots.forEach(item => {
            item.classList.remove(activeClass);
        });

        function showDots(i = 0){
            dots[i].style.opacity = 1;
        }
        showDots();


        next.addEventListener('click', () =>{

            if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2); 
            }

            slidesFiled.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }


            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex-1].style.opacity = 1;
        });


        prev.addEventListener('click', () => {
            if (offset == 0){
                offset = (+width.slice(0, width.length - 2) * (slides.length - 1));
            }else {
                offset -= +width.slice(0, width.length - 2); 
            }

            slidesFiled.style.transform = `translateX(-${offset}px)`;

            if(slideIndex == 1){
                slideIndex = slides.length;
            }else {
                slideIndex--;
            }


            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex-1].style.opacity = 1;
        });

    
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');
    
                slideIndex = slideTo;
                offset = +width.slice(0, width.length - 2) * (slideTo - 1);
    
                slidesFiled.style.transform = `translateX(-${offset}px)`;
    
                
    
                dots.forEach(dot => dot.style.opacity = ".5");
                dots[slideIndex-1].style.opacity = 1;
            });
        });
    }
    showSlidersBig('.first-screen .slick-slide','.first-screen','.offer__slider-prev-first-screen', '.offer__slider-next-first-screen','.first-screen .dot', '.slider-template-first-screen','.offer__slider-inner-first-screen','active-current');
    
    

    
        // --------------Slides advantages--------------

    
    
    const   slidesAdvantages = document.querySelectorAll('.advantages-item'),
            sliderAdvantages = document.querySelector('.advantages'),
            dotsAdvantages = document.querySelectorAll('.advantages .dot'),
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
            });
        });
    
    }
        


        
    function showSlidersSmall(slidesItem,prevSelector,nextSelector,dotsSelector,sliderWrapperSelector,slidesFiledSelector,activeClass,addSliderDilivery = false, addSliderServices = false){
  
        const   slides = document.querySelectorAll(slidesItem),
                prev = document.querySelector(prevSelector),
                next = document.querySelector(nextSelector),
                dots = document.querySelectorAll(dotsSelector),
                sliderWrapper = document.querySelector(sliderWrapperSelector),
                width = window.getComputedStyle(sliderWrapper).width,
                slidesFiled = document.querySelector(slidesFiledSelector);


        let     slideIndex = 1,
                offset = 0;    


        slidesFiled.style.width = 100 * slides.length + '%';
        slidesFiled.style.display = 'flex';
        slidesFiled.style.transition = '0.5s all';
        sliderWrapper.style.overflow = 'hidden';


        slides.forEach(item => {
            item.style.width = width;
        });


        if(addSliderDilivery){
            function addSlideDilivery(src,title,day,weight,price){

                const parent = document.querySelector('.dilivery .offer__slider-inner');
                const clone = document.createElement('div');
    
                clone.classList.add('slider-template__item');
                clone.innerHTML = `
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
                parent.append(clone);
            }
            addSlideDilivery("assets/img/dilivery/slider-dilivery-1.png",'Авто - обычная','9-15 дней', 'от 5 кг', '2,5');
            addSlideDilivery("assets/img/dilivery/slider-dilivery-2.png",'Авто - ускоренная','9-12 дней', 'от 15 кг', '3,5');
            
        }

        if(addSliderServices){
            function addSlideServices(title,text,style){
                const parent = document.querySelector('#services .offer__slider-inner');
                const clone = document.createElement('div');
    
                clone.classList.add('slider-template__item');
                clone.style = `${style}`;
                clone.innerHTML = `
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
                parent.append(clone);
            }
            addSlideServices('Выкуп товара', 'Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Украину -сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Украина.',"background-image: url(/assets/img/services/slider-services-1.png);");
            addSlideServices('Страховка груза', 'Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Украину -сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Украина.',"background-image: url(/assets/img/services/slider-services-2.png);");
                
        }

        function listenerNext(){
            if (offset == (+width.slice(0, width.length - 2)/3  * (slides.length - 1))) { //650    px
                offset = 0;
            } else {
                offset += (+width.slice(0, width.length - 2)/3); 
            }

            slidesFiled.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }

        }
    
        next.addEventListener('click', listenerNext);


        function listenerPrev(){
            if (offset == 0) {
                offset = +width.slice(0, width.length - 2)/3 * (slides.length - 1);
            } else {
                offset -= (+width.slice(0, width.length - 2)/3);
            }

            slidesFiled.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }

        }

        prev.addEventListener('click', listenerPrev);


        if(document.documentElement.clientWidth <= 1330){

            next.removeEventListener('click', listenerNext);
            prev.removeEventListener('click', listenerPrev);

            
            next.addEventListener('click', listenerNext2);
            prev.addEventListener('click', listenerPrev2);
        }


        function listenerNext2(){
            
            if (offset == (+width.slice(0, width.length - 2)/2  * (slides.length - 1))) { //650    px
                offset = 0;
            } else {
                offset += (+width.slice(0, width.length - 2)/2); 
            }

            slidesFiled.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }

        }

        function listenerPrev2 (){
            if (offset == 0) {
                offset = +width.slice(0, width.length - 2)/2 * (slides.length - 1);
            } else {
                offset -= (+width.slice(0, width.length - 2)/2);
            }

            slidesFiled.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }
        }


        if(document.documentElement.clientWidth <= 865){

            next.removeEventListener('click', listenerNext2);
            prev.removeEventListener('click', listenerPrev2);


            dots.forEach(item => {
                item.classList.remove('active-current');
            });

            
            function showDots(i = 0){
                dots[i].style.opacity = 1;
            }
            showDots();


            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const slideTo = e.target.getAttribute('data-slide-to');
        
                    slideIndex = slideTo;
                    offset = +width.slice(0, width.length - 2) * (slideTo - 1);
        
                    slidesFiled.style.transform = `translateX(-${offset}px)`;
        
                    
        
                    dots.forEach(dot => dot.style.opacity = ".5");
                    dots[slideIndex-1].style.opacity = 1;
                });
            });
        
        }
    }
    showSlidersSmall('.dilivery .slider-template__item','.offer__slider-prev','.offer__slider-next','.dilivery .dot','.slider-template','.offer__slider-inner','active-current',true,false);
    showSlidersSmall('.services .slider-template__item','.offer__slider-prev-services','.offer__slider-next-services','.services .dot','.services .slider-template','.services .offer__slider-inner','active-current',false,true);

}

export default sliders;