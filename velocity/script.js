//tabs

const tabsBtns = document.querySelectorAll('.tabs__nav button');

const tabsItems = document.querySelectorAll('.tabs-item')

// функция скрывает табы и убирает active у кнопок
function hideTabs() {
    tabsItems.forEach(object => object.classList.add('hide'));
    tabsBtns.forEach(object => object.classList.remove('active'))
}

// функция показывает переданный номер таба и делает соответсвующую кнопку активной
function showTab(index) {
    tabsItems[index].classList.remove('hide')
    tabsBtns[index].classList.add('active')
}

hideTabs();
showTab(0)


tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hideTabs();
    showTab(index);
}))

// anchors
const anchors = document.querySelectorAll('.header-nav a');

anchors.forEach(anc => {
    anc.addEventListener('click', function(event) {
        event.preventDefault(); // отключение href
        const id = anc.getAttribute('href')

        const element = document.querySelector(id);
        window.scroll({
            top: element.offsetTop,
            behavior: 'smooth'
        })
    });
});