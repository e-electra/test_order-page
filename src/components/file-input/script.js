function addFiles(parent, fileArr) {
    let fileList = parent.querySelector('.file-input__file-list');
    fileList.innerHTML = ''

    if (fileArr.length > 0) {
        fileArr.forEach(file => {
            let fileItem = document.createElement('div');
            fileItem.classList.add('file-input__file')
            fileItem.innerHTML = `
                <span class="file-input__file-name">${file.name}</span>
                <span class="file-input__delete-file">
                    <svg class="file-input__delete-icon">
                        <use xlink:href="/src/assets/icons/delete.svg#delete"></use>
                    </svg>
                </span>
            `
            fileList.append(fileItem)
        });
        parent.classList.add('uploaded');
    } else {
        parent.classList.remove('uploaded');
    }
}

document.addEventListener('change', function (evt) {
    if (evt.target && evt.target.classList.contains('file-input__input')) {
        let parent = evt.target.closest('.file-input')
        let fileArr = Array.from(evt.target.files);

        addFiles(parent, fileArr);
    }
})

document.addEventListener('click', function (evt) {
    if (evt.target && evt.target.closest('.file-input__delete-file')) {
        evt.preventDefault();

        let parent = evt.target.closest('.file-input');
        let fileInput = parent.querySelector('.file-input__input');
        let fileList = parent.querySelector('.file-input__file-list');

        fileList.innerHTML = ''
        fileInput.value = '';
        parent.classList.remove('uploaded');
    }
})