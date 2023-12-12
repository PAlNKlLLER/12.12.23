const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const slides = document.querySelectorAll('.slide')

let currentslide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block'
        } else {
            slide.style.display = 'none'
        }
    })
}
showSlide(currentslide)

prevBtn.addEventListener('click', function () {
    currentslide = (currentslide - 1 + slides.length) % slides.length
    showSlide(currentslide)    
})
nextBtn.addEventListener('click', function () {
    currentslide = (currentslide + 1) % slides.length
    showSlide(currentslide)
})
