const sliderTemplate = (parentS, childrenS, prevS, nextS, dotsParentS) => {
    const slidesParent = document.querySelector(parentS),
        prev = document.querySelector(prevS),
        next = document.querySelector(nextS);
    let iFirstVisibleSlide = 0;
    let iLastVisibleSlide = 2;
    let defaultSetAttibuteSlides = true;
    let defaultMoveSlide = false;

    // ------------------------------------------------------------------------------

    const takeSlides = () => document.querySelectorAll(childrenS);

    // ------------------------------------------------------------------------------

    const takeDotsParent = () => document.querySelector(dotsParentS);

    // ------------------------------------------------------------------------------

    const checkWidth = () => {
        const windowWidth = window.innerWidth;
        takeSlides().forEach(item => item.classList.remove('hidden'));
        takeSlides().forEach(item => item.classList.remove('active'));
        takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutRight'));
        takeSlides().forEach(slide => slide.classList.remove('animate__slideInLeft'));
        takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
        takeSlides().forEach(slide => slide.classList.remove('animate__slideInRight'));

        if (windowWidth > 1199.98) {
            takeSlides().forEach((item, i) => {
                if (i > 2) {
                    item.classList.add('hidden');
                }
                if (i < 3) {
                    item.classList.add('active');
                }
            });
            iLastVisibleSlide = 2;
        }
        if (windowWidth > 799.98 && windowWidth < 1199.98) {
            takeSlides().forEach((item, i) => {
                if (i > 1) {
                    item.classList.add('hidden');
                }
                if (i < 2) {
                    item.classList.add('active');
                }
            });
            iLastVisibleSlide = 1;
        }
        if (windowWidth > 299.98 && windowWidth < 799.98) {
            takeSlides().forEach((item, i) => {
                if (i > 0) {
                    item.classList.add('hidden');
                }
                if (i < 1) {
                    item.classList.add('active');
                }
            });
            iLastVisibleSlide = 0;
        }
    };

    checkWidth();

    window.addEventListener('resize', () => checkWidth());

    // ------------------------------------------------------------------------------

    const setAttibuteSlides = () => takeSlides().forEach((slide, i) => slide.setAttribute('data-index-slide', i));

    // ------------------------------------------------------------------------------

    const createDots = () => {

        const dotsParent = takeDotsParent();
        const arrayDots = Array.from(dotsParent.children);

        if (arrayDots.length === 0) {
            takeSlides().forEach(() => {
                const newDot = document.createElement('li');
                dotsParent.append(newDot);
            });

            const dotsParentWrapper = dotsParent.closest('.offer__slider_counter');
            let widthDotsParent = getComputedStyle(dotsParent).width.slice(0, -2);

            dotsParentWrapper.style.left = `calc(50 % -${widthDotsParent / 2}px)`;

            const dots = dotsParent.querySelectorAll('li');
            dots[0].classList.add('slick-active');
        };

        if (defaultSetAttibuteSlides) {
            defaultSetAttibuteSlides = false;
            setAttibuteSlides();
        }

    };

    createDots();

    // ------------------------------------------------------------------------------
    const moveSlideDots = (index) => {

        takeSlides().forEach(slide => slide.classList.remove('animate__slideInRight'));
        takeSlides().forEach(slide => slide.classList.remove('animate__slideInLeft'));
        takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
        takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutRight'));
        takeSlides().forEach(slide => slide.classList.remove('active'));
        takeSlides().forEach(slide => slide.classList.add('hidden'));
        takeSlides()[index].classList.remove('hidden');
        takeSlides()[index].classList.add('active');

        console.log('1');
        arrayDots.forEach(dot => dot.classList.remove('slick-active'));
        arrayDots[index].classList.add('slick-active');
    };

    const dotsParent = takeDotsParent();
    const arrayDots = Array.from(dotsParent.children);

    arrayDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            moveSlideDots(i);
            defaultMoveSlide = true; // Переключатель того что DOTS использовался.
        });
    });

    // ------------------------------------------------------------------------------

    const moveSlide = (i) => {
        console.log('1')
        if (iLastVisibleSlide === 0) { //Когда слайд один на экране то исполнять это.

            if (defaultMoveSlide) { //Сбрасываю все настройки после управления слайдом через DOTS

                takeSlides().forEach(item => item.classList.remove('hidden'));
                takeSlides().forEach(item => item.classList.remove('active'));
                takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutRight'));
                takeSlides().forEach(slide => slide.classList.remove('animate__slideInLeft'));
                takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
                takeSlides().forEach(slide => slide.classList.remove('animate__slideInRight'));

                takeSlides().forEach((item, i) => {
                    if (i > 0) {
                        item.classList.add('hidden');
                    }
                    if (i < 1) {
                        item.classList.add('active');
                    }
                });
                iLastVisibleSlide = 0;

                defaultMoveSlide = false;
            }

            if (i === 1) {
                takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutRight'));
                takeSlides().forEach(slide => slide.classList.remove('animate__slideInLeft'));
                takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
                takeSlides().forEach(slide => slide.classList.remove('animate__slideInRight'));

                takeSlides()[iFirstVisibleSlide].classList.add('animate__fadeOutLeft');

                setTimeout(() => {
                    slidesParent.insertAdjacentElement('beforeend', takeSlides()[iFirstVisibleSlide]);
                    let iLastSlide = takeSlides().length - 1
                    takeSlides()[iLastSlide].classList.remove('active');
                    takeSlides()[iLastSlide].classList.add('hidden');

                    takeSlides()[iLastVisibleSlide].classList.remove('hidden');
                    takeSlides()[iLastVisibleSlide].classList.add('active');

                    // takeSlides()[iFirstVisibleSlide].classList.add('animate__slideInRight');
                }, 300);
            }
            if (i === -1) {
                takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutRight'));
                takeSlides().forEach(slide => slide.classList.remove('animate__slideInLeft'));
                takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
                takeSlides().forEach(slide => slide.classList.remove('animate__slideInRight'));

                takeSlides()[iFirstVisibleSlide].classList.add('animate__fadeOutRight');

                setTimeout(() => {
                    let iLastSlide = takeSlides().length - 1
                    slidesParent.insertAdjacentElement('afterbegin', takeSlides()[iLastSlide]);
                    takeSlides()[iFirstVisibleSlide].classList.remove('hidden');
                    takeSlides()[iFirstVisibleSlide].classList.add('active');

                    takeSlides()[iLastVisibleSlide + 1].classList.add('hidden');
                    takeSlides()[iLastVisibleSlide + 1].classList.remove('active');

                    takeSlides()[iFirstVisibleSlide].classList.add('animate__slideInLeft');
                }, 300);
            }

            //Синхноризация открытого слайда с DOTS

            const dotsParent = takeDotsParent();
            const arrayDots = Array.from(dotsParent.children);

            arrayDots.forEach(dot => dot.classList.remove('slick-active'));
            arrayDots[+takeSlides()[0].getAttribute('data-index-slide')].classList.add('slick-active');


        } else { //Когда слайдов больше одного на экране то исполнять это.
            if (i === 1) {
                takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutRight'));
                takeSlides().forEach(slide => slide.classList.remove('animate__slideInLeft'));

                takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
                takeSlides()[iFirstVisibleSlide].classList.add('animate__fadeOutLeft');

                setTimeout(() => {

                    slidesParent.insertAdjacentElement('beforeend', takeSlides()[iFirstVisibleSlide]);
                    let iLastSlide = takeSlides().length - 1;
                    takeSlides()[iLastSlide].classList.remove('active');
                    takeSlides()[iLastSlide].classList.add('hidden');

                    takeSlides()[iLastVisibleSlide].classList.remove('hidden');
                    takeSlides()[iLastVisibleSlide].classList.add('active');
                    takeSlides().forEach(slide => slide.classList.remove('animate__slideInRight'));
                    takeSlides()[iLastVisibleSlide].classList.add('animate__slideInRight');

                }, 300);

            }
            if (i === -1) {
                takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
                takeSlides().forEach(slide => slide.classList.remove('animate__slideInRight'));

                takeSlides().forEach(slide => slide.classList.remove('animate__fadeOutRight'));
                takeSlides()[iLastVisibleSlide].classList.add('animate__fadeOutRight');

                setTimeout(() => {

                    let iLastSlide = takeSlides().length - 1
                    slidesParent.insertAdjacentElement('afterbegin', takeSlides()[iLastSlide]);
                    takeSlides()[iFirstVisibleSlide].classList.remove('hidden');
                    takeSlides()[iFirstVisibleSlide].classList.add('active');

                    takeSlides()[iLastVisibleSlide + 1].classList.add('hidden');
                    takeSlides()[iLastVisibleSlide + 1].classList.remove('active');
                    takeSlides().forEach(slide => slide.classList.remove('animate__slideInLeft'));
                    takeSlides()[iFirstVisibleSlide].classList.add('animate__slideInLeft');

                }, 300);
            }
        }

    };

    next.addEventListener('click', () => moveSlide(1));
    prev.addEventListener('click', () => moveSlide(-1));


    // ------------------------------------------------------------------------------


    let slider = document.querySelector(parentS);
    let touchStartX = 0;
    let touchEndX = 0;
    let swipeThreshold = 50; // Пороговое значение для определения свайпа

    const handleTouchStart = (e) => touchStartX = e.touches[0].clientX;
    const handleTouchMove = (e) => touchEndX = touchEndX = e.touches[0].clientX;;
    const handleTouchEnd = () => {
        let swipeLength = touchEndX - touchStartX;
        // Свайп вправо - переключить на предыдущий слайд
        if (swipeLength > swipeThreshold) moveSlide(-1);
        // Свайп влево - переключить на следующий слайд
        if (swipeLength < -swipeThreshold) moveSlide(1);

    };


    const handleResize = () => {
        let screenWidth = window.innerWidth;

        if (screenWidth > 799.98) {
            // Удалите обработчики событий
            slider.removeEventListener('touchstart', handleTouchStart);
            slider.removeEventListener('touchmove', handleTouchMove);
            slider.removeEventListener('touchend', handleTouchEnd);
        } else {
            slider.addEventListener('touchstart', handleTouchStart);
            slider.addEventListener('touchmove', handleTouchMove);
            slider.addEventListener('touchend', handleTouchEnd);

            //Выравнивание индикаторов слайдера при динамическом изменении ширины экрана.
            const dotsParentWrapper = document.querySelector('.advantages > .container > .slick-dots');
            let widthDotsParent = getComputedStyle(dotsParentWrapper).width.slice(0, -2);
            dotsParentWrapper.style.left = `calc(50 % -$ {widthDotsParent / 2}px)`;
        }

    }


    handleResize();

    window.addEventListener('resize', handleResize);

};

//Код навален без оптимизации и лаконичности. Есть много чего оптимизировать.

export {sliderTemplate};