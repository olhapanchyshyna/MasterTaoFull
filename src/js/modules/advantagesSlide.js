const advantagesSlider = () => {
    const slides = document.querySelectorAll('.advantages-item'),
          dots = () => document.querySelectorAll('.advantages li');
    let index = 0;
    let defaultActive = true;
  
  
    // ------------------------------------------------------------------------------
  
    
    const checkWidth = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 585.98) {
        slides.forEach(item => item.classList.add('hidden'));
        if(defaultActive){
          slides[0].classList.add('active');
          defaultActive = false;
        };
      }
      if (windowWidth > 585.98) {
        slides.forEach(item => item.classList.remove('hidden'));
        slides.forEach(item => item.classList.remove('active'));
        slides.forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
        slides.forEach(slide => slide.classList.remove('animate__fadeOutRight'));
        slides.forEach(slide => slide.classList.remove('animate__slideInRight'));
        slides.forEach(slide => slide.classList.remove('animate__slideInLeft'));
        defaultActive = true;
      };
    };
  
    checkWidth();
  
    window.addEventListener('resize', () => checkWidth());
  
  
    // ------------------------------------------------------------------------------
  
   
    const createDots = () => {
      const dotsParent = document.querySelector('.carousel-indicators-advantages');
      const arraySlides = Array.from(dotsParent.children);
  
      if(arraySlides.length === 0) {
        slides.forEach(() => {
          const newDot = document.createElement('li');
          dotsParent.append(newDot);
        });
  
        const dotsParentWrapper = dotsParent.closest('.offer__slider_counter-advantages');
        let widthDotsParent = getComputedStyle(dotsParent).width.slice(0, -2);
  
        dotsParentWrapper.style.left = `calc(50% - ${widthDotsParent / 2}px)`;
  
        const dots = dotsParent.querySelectorAll('li');
        dots[0].classList.add('slick-active');
  
      };
  
    };
  
    createDots();
  
  
    // ------------------------------------------------------------------------------
  
  
    const moveSlideDots = () => {
      slides.forEach(slide => slide.classList.remove('animate__slideInRight'));
      slides.forEach(slide => slide.classList.remove('animate__slideInLeft'));
      slides.forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
      slides.forEach(slide => slide.classList.remove('animate__fadeOutRight'));
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
      
      dots().forEach(dot => dot.classList.remove('slick-active'));
      dots()[index].classList.add('slick-active');
    };
  
    dots().forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        moveSlideDots();
      });
    });
  
  
    // ------------------------------------------------------------------------------
  
  
    const moveSlide = i => {
  
      slides.forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
      slides.forEach(slide => slide.classList.remove('animate__fadeOutRight'));
      if(i === 1)slides[index].classList.add('animate__fadeOutLeft');
      if(i === -1)slides[index].classList.add('animate__fadeOutRight');
  
      index += i;
  
      if(index > slides.length - 1) index = 0;
      if(index < 0) index = slides.length - 1;
  
      setTimeout(() => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
      }, 100);
  
      slides.forEach(slide => slide.classList.remove('animate__slideInRight'));
      slides.forEach(slide => slide.classList.remove('animate__slideInLeft'));
      if(i === 1)slides[index].classList.add('animate__slideInRight');
      if(i === -1)slides[index].classList.add('animate__slideInLeft');
  
      dots().forEach(dot => dot.classList.remove('slick-active'));
      dots()[index].classList.add('slick-active');
  
    };
  
  
    // ------------------------------------------------------------------------------
  
  let slider = document.querySelector('.advantages > .container');
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
  
      if (screenWidth > 585.98) {
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
        dotsParentWrapper.style.left = `calc(50% - ${widthDotsParent / 2}px)`;
      }
  
    }
  
  
  handleResize();
  
  window.addEventListener('resize', handleResize);
  
  };
  
  
  //Информация - код навален без оптимизации и лаконичности. Есть много чего оптимизировать.
  
  export {advantagesSlider};