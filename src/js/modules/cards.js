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

export default cards;