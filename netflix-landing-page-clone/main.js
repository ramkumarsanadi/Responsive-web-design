const tabItems = document.querySelectorAll('.tab-items');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach(element => {
    element.addEventListener('click', selectItem)
});

function selectItem(e){
    removeBorder()
    removeshow()
    this.classList.add("tab-border")
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeshow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

