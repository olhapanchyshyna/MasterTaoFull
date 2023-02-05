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

export default modals;