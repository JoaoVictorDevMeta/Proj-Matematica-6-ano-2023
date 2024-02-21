var revelar = document.querySelectorAll('.appear')
let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

let observer = new IntersectionObserver(showItem, options);

function showItem(elements){
    elements.forEach(elem => {
        if(elem.isIntersecting){
            elem.target.classList.add("appearing");
        }
    })
}

revelar.forEach( item => {
    observer.observe(item)
})