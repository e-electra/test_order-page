function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element
  
        return { name, value }
      })

    console.log(data)
}

function sendOrderForm(form) {
    let validationFields = form.querySelectorAll('.order-form__validation-field')

    validationFields.forEach(field => {
        field.classList.remove('error')
    });

    if (form.systemtype.value == "") {
        form.systemtype.focus();

        let parentLabel = form.systemtype.closest('.order-form__validation-field')
        parentLabel.classList.add('error')
        return false
    }

    if (form.email.validity.valid !== true) {
        let parentLabel = form.email.closest('.order-form__validation-field')
        form.email.focus();
        parentLabel.classList.add('error')
        return false
    }

    if (form.name.validity.valid !== true) {
        form.name.focus();
        let parentLabel = form.name.closest('.order-form__validation-field')
        parentLabel.classList.add('error')
        return false
    }

    console.log('отправка формы')
    serializeForm(form)
}

document.addEventListener('click', function (evt) {
    if (evt.target && evt.target.closest('.order-form__submit')) {
        evt.preventDefault()

        let form = evt.target.closest('form')
        sendOrderForm(form)
    }
})