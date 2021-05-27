function initSelector(_selector) {
    const _selectorTitle = _selector.querySelector('.selector__title');
    const _selectorLabels = _selector.querySelectorAll('.selector__label');

    // Toggle menu
    _selectorTitle.addEventListener('click', () => {
        if ('active' === _selector.getAttribute('data-state')) {
            _selector.setAttribute('data-state', '');
        } else {
            _selector.setAttribute('data-state', 'active');
        }
    });

    // Close when click to option
    for (let i = 0; i < _selectorLabels.length; i++) {
        _selectorLabels[i].addEventListener('click', (evt) => {
            _selectorTitle.textContent = evt.target.textContent;
            _selectorTitle.classList.add("selector__title--show");
            _selector.setAttribute('data-state', '');
        });
    }
}

const _selectors = document.querySelectorAll('.selector');
_selectors.forEach((selector) => {
    initSelector(selector);
});
