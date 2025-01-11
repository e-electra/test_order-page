document.addEventListener('click', function (evt) {
    if (evt.target && evt.target.closest('.select__input')) {
        let target = evt.target
        let parent = target.closest('.select');
        parent.classList.toggle('select-active');
        parent.classList.remove('error');
    }

    if (evt.target && evt.target.closest('.select__option-item')) {
        let option = evt.target.closest('.select__option-item');
        let optionLabel = option.querySelector('.select__option-label')
        let parent = option.closest('.select');
        let parentInput = parent.querySelector('.select__input')
        let parentOptions = parent.querySelectorAll('.select__option-item');

        parentOptions.forEach((option) => {
            option.classList.remove('selected');
        })

        option.classList.add('selected')
        parentInput.value = optionLabel.textContent;
    }

    if (evt.target && !evt.target.closest('.select__input')) {
        let selects = document.querySelectorAll('.select');
        selects.forEach((select) => {
            select.classList.remove('select-active');
        })
    }
})