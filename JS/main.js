document.querySelectorAll('.catag').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.catag.active').classList.remove('active');
        this.classList.add('active');
    });
});