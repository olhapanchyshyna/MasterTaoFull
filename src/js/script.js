"use strict";
import bootstrap from 'bootstrap';
import modals from "./modules/modal";
import {firstScreenSlider } from "./modules/sliders";
import {advantagesSlider} from "./modules/advantagesSlide";
import {sliderTemplate} from './modules/sliderTemplate';

document.addEventListener('DOMContentLoaded', () =>{
    firstScreenSlider(); 
    advantagesSlider();
    modals();
    sliderTemplate(
        '.dilivery .offer__slider-inner', 
        '.dilivery .slider-template__item',
        '.dilivery .offer__slider-prev',
        '.dilivery .offer__slider-next',
        '.carousel-indicators-dilivery'
    );
    sliderTemplate(
        '.services .offer__slider-inner', 
        '.services .slider-template__item',
        '.services .offer__slider-prev',
        '.offer__slider-next-services',
        '.carousel-indicators-services'
    );
});