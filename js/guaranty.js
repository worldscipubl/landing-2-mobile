(function () {
    const _carousel = document.querySelector('.guaranty-carousel');
    const flkty = new Flickity(_carousel, {
        // options
        cellAlign: 'left',
        prevNextButtons: false,
        // contain: true,
        // setGallerySize: false,
        // autoPlay: 5000,
        contain: false
    });
})();