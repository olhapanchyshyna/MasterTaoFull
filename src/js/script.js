"use strict";

import cards from "./modules/cards";
import modals from "./modules/modal";
import sliders from "./modules/sliders";

document.addEventListener('DOMContentLoaded', () =>{
    cards();
    setTimeout(() => {
        sliders(); 
        modals();
    },100); 
});