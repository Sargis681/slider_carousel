const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
const carousel = document.querySelector(".carousel-items")
let deg = 0
let radius = 0

images.forEach(img => {
  
  carousel.innerHTML += `
    <div class="carousel-item" style='transform: rotateY(${radius}deg) translateZ(25rem);'>
      <img src="./images/${img}" alt="#">
    </div>
  `
  radius += 45
})

function switchSlide(value){
  value ? deg -= 45 : deg += 45
  carousel.style.transform = `translateZ(-25rem) rotateY(${deg}deg)`
}