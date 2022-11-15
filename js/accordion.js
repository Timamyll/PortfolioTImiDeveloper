const titles = document.querySelectorAll('.box-title')

function close() {
    titles.forEach((item, i) => {
        item.nextElementSibling.style.maxHeight = '0px'
        item.nextElementSibling.style.overflow = 'hidden'
        item.nextElementSibling.style.paddingTop = `0px`
        item.nextElementSibling.style.paddingBottom = `0px`
    });
}

titles.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (item.nextElementSibling.style.maxHeight != '0px') {
            close()
        } else {
            close()
            console.log(item.nextElementSibling.scrollHeight);
            item.nextElementSibling.style.paddingTop = '20px'
            item.nextElementSibling.style.paddingBottom = `20px`
            item.nextElementSibling.style.maxHeight = `${item.nextElementSibling.scrollHeight + 40}px`
        }
    })
});

close();