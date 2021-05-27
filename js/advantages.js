(function () {
    const _carousel = document.querySelector('.profile-carousel');
    const flkty = new Flickity(_carousel, {
        // options
        cellAlign: 'left',
        prevNextButtons: false,
        autoPlay: 5000,
        wrapAround: true
    });
})();