function modals(){

    // --------------modal--------------

    function showModal(modalSelector,btnSelector,closeBtn){
        const   modal = document.querySelector(modalSelector),
                btn = document.querySelectorAll(btnSelector),
                close = document.querySelector(closeBtn);


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
    showModal('.form-container','[data-btn]','[data-close]');

}

export default modals;