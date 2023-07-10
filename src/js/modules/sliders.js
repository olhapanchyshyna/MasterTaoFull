const firstScreenSlider = () => {
    const slides = document.querySelectorAll('.first-screen .slick-slide'),
          prev = document.querySelector('.offer__slider-prev-first-screen'),
          next = document.querySelector('.offer__slider-next-first-screen'),
          dots = document.querySelectorAll('.first-screen .dot');
    let index = 0;
  
    // ------------------------------------------------------------------------------ move slide
  
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
      }, 300);
  
      slides.forEach(slide => slide.classList.remove('animate__slideInRight'));
      slides.forEach(slide => slide.classList.remove('animate__slideInLeft'));
      if(i === 1)slides[index].classList.add('animate__slideInRight');
      if(i === -1)slides[index].classList.add('animate__slideInLeft');
      
      dots.forEach(dot => dot.classList.remove('slick-active'));
      dots[index].classList.add('slick-active');
    };
  
    next.addEventListener('click', () => moveSlide(1));
    prev.addEventListener('click', () => moveSlide(-1));
  
    // ------------------------------------------------------------------------------ Dots
  
    const moveSlideDots = () => {
      slides.forEach(slide => slide.classList.remove('animate__slideInRight'));
      slides.forEach(slide => slide.classList.remove('animate__slideInLeft'));
      slides.forEach(slide => slide.classList.remove('animate__fadeOutLeft'));
      slides.forEach(slide => slide.classList.remove('animate__fadeOutRight'));
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
      
      dots.forEach(dot => dot.classList.remove('slick-active'));
      dots[index].classList.add('slick-active');
    };
  
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        moveSlideDots();
      });
    });
  
    // ------------------------------------------------------------------------------ Touch
  
    let slider = document.querySelector('.offer__slider-inner-first-screen');
    let touchStartX = 0;
    let touchEndX = 0;
    let swipeThreshold = 50; 
  
    const handleTouchStart = (e) => touchStartX = e.touches[0].clientX;
    const handleTouchMove = (e) => touchEndX = touchEndX = e.touches[0].clientX;
    const handleTouchEnd = () => {
      console.log('hi')
      let swipeLength = touchEndX - touchStartX;
      if (swipeLength > swipeThreshold) moveSlide(-1);
      if (swipeLength < -swipeThreshold) moveSlide(1);
    };
  
    let eventHandlersActive = false; // Переменная для хранения состояния обработчиков событий
  
    const activateEventHandlers = () => {
      slider.addEventListener('touchstart', handleTouchStart);
      slider.addEventListener('touchmove', handleTouchMove);
      slider.addEventListener('touchend', handleTouchEnd);
      eventHandlersActive = true;
    };
  
    const deactivateEventHandlers = () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
      eventHandlersActive = false;
    };
  
    const handleResize = () => {
      let screenWidth = window.innerWidth;
      
      if (screenWidth > 649.98 && eventHandlersActive) deactivateEventHandlers();
      if (screenWidth <= 649.98 && !eventHandlersActive) activateEventHandlers();
  
    }
  
  
  handleResize();
  window.addEventListener('resize', handleResize);
  
};
export { firstScreenSlider };


  