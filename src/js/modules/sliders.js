function sliders(){
    
    function showSlidersBig(slidesItem, sliderSelector, prevSelector, nextSelector, dotsSelector, sliderWrapperSelector, slidesFiledSelector, activeClass) {
        let slides = document.querySelectorAll(slidesItem);
        let slider = document.querySelector(sliderSelector);
        let prev = document.querySelector(prevSelector);
        let next = document.querySelector(nextSelector);
        let dots = document.querySelectorAll(dotsSelector);
        let sliderWrapper = document.querySelector(sliderWrapperSelector);
        let slidesFiled = document.querySelector(slidesFiledSelector);
        let slideIndex = 0;
        let offset = 0;
      
        function resizeHandler() {
            const width = sliderWrapper.clientWidth;
            slides.forEach(item => {
                item.style.width = `${width}px`;
            });
            offset = slideIndex * width;
            moveSlides();
        }
      
        function moveSlides() {
            slidesFiled.style.transform = `translateX(-${offset}px)`;
        }
      
        function nextSlide() {
            if (slideIndex === slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            offset = slideIndex * slides[0].clientWidth;
            moveSlides();
            showDots();
        }
      
        function prevSlide() {
            if (slideIndex === 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            offset = slideIndex * slides[0].clientWidth;
            moveSlides();
            showDots();
        }
      
        function setSlide(slideTo) {
            slideIndex = slideTo;
            offset = slideIndex * slides[0].clientWidth;
            moveSlides();
            showDots();
        }
      
        function showDots() {
            dots.forEach(dot => {
                dot.classList.remove(activeClass);
            });
            dots[slideIndex].classList.add(activeClass);
        }
      
        window.addEventListener('resize', resizeHandler);
      
        slidesFiled.style.width = `${100 * slides.length}%`;
        slider.style.position = 'relative';
        slidesFiled.style.display = 'flex';
        slidesFiled.style.transition = '0.9s all';
        sliderWrapper.style.overflow = 'hidden';
      
        next.addEventListener('click', nextSlide);
        prev.addEventListener('click', prevSlide);
      
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                setSlide(index);
            });
        });
      
        resizeHandler();
        showDots();
    }  
    showSlidersBig('.first-screen .slick-slide', '.first-screen', '.offer__slider-prev-first-screen', '.offer__slider-next-first-screen', '.first-screen .dot', '.slider-template-first-screen', '.offer__slider-inner-first-screen', 'active-current');
      
    
    // --------------Slides advantages--------------
        
    const slidesAdvantages = document.querySelectorAll('.advantages-item');
    const sliderAdvantages = document.querySelector('.advantages');
    const dotsAdvantages = document.querySelectorAll('.advantages .dot');
    const sliderWrapperAdvantages = document.querySelector('.advantes-row');
    const slidesFiledAdvantages = document.querySelector('.offer__slider-inner-advantages');
    const widthAdvantages = sliderWrapperAdvantages.clientWidth;

    let slideIndexAdvantages = 0;
    let offsetAdvantages = 0;

    window.addEventListener('resize', () => {
        showAdvantages();
    })
    showAdvantages();

    function showAdvantages(){
        if (document.documentElement.clientWidth <= 865) {
            slidesFiledAdvantages.style.width = 100 * slidesAdvantages.length + '%';
            sliderAdvantages.style.position = 'relative';
            slidesFiledAdvantages.style.display = 'flex';
            slidesFiledAdvantages.style.transition = '0.9s all';
            sliderWrapperAdvantages.style.overflow = 'hidden';
           
            slidesAdvantages.forEach(item => {
                item.style.width = `${widthAdvantages}px`;
            });
    
            function showDotsAdvantages() {
                dotsAdvantages.forEach(dot => {
                    dot.classList.remove('active-current-advantages');
                });
                dotsAdvantages[slideIndexAdvantages].classList.add('active-current-advantages');
            }
    
            function moveSlidesAdvantages() {
                slidesFiledAdvantages.style.transform = `translateX(-${offsetAdvantages}px)`;
            }
    
            function setSlideAdvantages(slideTo) {
                slideIndexAdvantages = slideTo;
                offsetAdvantages = slideIndexAdvantages * widthAdvantages;
                moveSlidesAdvantages();
                showDotsAdvantages();
            }
    
            dotsAdvantages.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    setSlideAdvantages(index);
                });
            });
    
            showDotsAdvantages();   
        }
        if (document.documentElement.clientWidth >= 866){
            slidesAdvantages.forEach(item => {
                item.style.width = ``;
            });

            slidesFiledAdvantages.style.width = '';
        }
    }




    // showSlidersSmall

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
        slidesFiled.style.transition = '0.9s all';
        sliderWrapper.style.overflow = 'hidden';

      
        function moveSlides() {
            slidesFiled.style.transform = `translateX(-${offset}px)`;
        }

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
            addSlideServices('Выкуп товара', 'Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Украину -сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Украина.',"background-image: url(assets/img/services/slider-services-1.png);");
            addSlideServices('Страховка груза', 'Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Украину -сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Украина.',"background-image: url(assets/img/services/slider-services-2.png);");
                
        }

        function listenerNext(){
            if (offset == (+width.slice(0, width.length - 2)/3  * (slides.length - 1))) { //650    px
                offset = 0;
            } else {
                offset += (+width.slice(0, width.length - 2)/3); 
            }

            moveSlides();

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

            moveSlides()

            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }

        }

        prev.addEventListener('click', listenerPrev);


        window.addEventListener('resize', () => {
            widthBigger();
            widthSmaller();
        })

        widthBigger();
        widthSmaller();

        function widthBigger(){
            if(document.documentElement.clientWidth <= 1330){

                next.removeEventListener('click', listenerNext);
                prev.removeEventListener('click', listenerPrev);
    
                
                next.addEventListener('click', listenerNext2);
                prev.addEventListener('click', listenerPrev2);
            }

        }
        
        function listenerNext2(){
            
            if (offset == (+width.slice(0, width.length - 2)/2  * (slides.length - 1))) { //650    px
                offset = 0;
            } else {
                offset += (+width.slice(0, width.length - 2)/2); 
            }

            moveSlides()

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

            moveSlides()

            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }
        }


        function widthSmaller(){
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
            
                        
                        moveSlides();
            
                        dots.forEach(dot => dot.style.opacity = ".5");
                        dots[slideIndex-1].style.opacity = 1;
                    });
                });
            
            }
        }
    }
    showSlidersSmall('.dilivery .slider-template__item','.offer__slider-prev','.offer__slider-next','.dilivery .dot','.slider-template','.offer__slider-inner','active-current',true,false);
    showSlidersSmall('.services .slider-template__item','.offer__slider-prev-services','.offer__slider-next-services','.services .dot','.services .slider-template','.services .offer__slider-inner','active-current',false,true);

   
}

export default sliders;