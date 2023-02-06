function cards(){


    async function getResource(url) {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    // -----------dilivery card------------


    class DiliveryCard {
        constructor(src,alt,title,days,weight,prise,parentSelector,classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.days = days;
            this.weight = weight;
            this.prise = prise;
            this.parent = document.querySelector(parentSelector);
            this.class = classes;
        }


        render(){
            const element = document.createElement('div');

            element.classList.add("slider-template__item");
                
            element.innerHTML = `
                <div class="img-box">
                    <img src= ${this.src} alt=${this.alt}>
                </div>
                <div class="options">${this.title}</div>
                <ul class="attr">
                    <li class="attr-day">${this.days}</li>
                    <li class="attr-weight">${this.weight}</li>
                </ul>
                <div class="price">
                    <span>от </span> ${this.prise} <span class="text-white">$/кг</span>
                </div>
                <div class="button-group">
                    <button data-btn class="btn btn-primary">Оставить заявку</button>
                    <button class="btn btn-secondary">Заявка</button>
                </div>
        
            `;
            this.parent.append(element);
        }

    }
    getResource('http://localhost:3000/dilivery')
    .then(data => {
        data.forEach(({img, altimg, title, days, weight,prise}) => {
            new DiliveryCard(img, altimg, title, days, weight,prise, ".dilivery .offer__slider-inner").render();
        });
    });

    


    // services card

    class ServicesCard {
        constructor(src,title,text,parentSelector,...classes){
            this.src = src;
            this.title = title;
            this.text = text;
            this.parent = document.querySelector(parentSelector);
            this.class = classes;
        }


        render(){
            const element = document.createElement('div');

            if(this.class.length === 0){
                element.classList.add('slider-template__item');
            }else{
                this.class.forEach(item => element.classList.add(item));
            }

            element.innerHTML = `
                <div class="slider-template__item-content" style="${this.src};">
                    <div class="title">${this.title}</div>
                    <div class="description">
                        ${this.text}
                    </div>
                    <div class="button-group">
                        <button class="btn btn-secondary">Подробнее</button>
                    </div>
                </div>
            `;

            this.parent.append(element);
        }
    }

    getResource('http://localhost:3000/services')
    .then(data => {
        data.forEach(({img, altimg, text}) => {
            new ServicesCard(img, altimg, text, ".services .offer__slider-inner").render();
        });
    });


}

export default cards;