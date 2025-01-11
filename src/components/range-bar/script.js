document.addEventListener('input', function (evt) {
    if (evt.target && evt.target.classList.contains('range-bar__input')) {
        let target = evt.target;
        let parent = target.closest('.range-bar')
        let selectedValue = parent.querySelector('.range-bar__value-data');
        selectedValue.textContent = `${target.value}`;
    }
})

document.addEventListener('DOMContentLoaded', function (evt) {
    let rangeInputs = document.querySelectorAll('.range-bar__input')

    rangeInputs.forEach(input => {
        let parent = input.closest('.range-bar')
        parent.querySelector('.range-bar__value-data').textContent = input.value
    })
})